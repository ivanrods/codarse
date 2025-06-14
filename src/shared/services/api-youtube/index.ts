import { youtube, youtube_v3 } from "@googleapis/youtube";

const fetchWithNextConfig = (
  nextConfig?: NextFetchRequestConfig
): typeof fetch => {
  return (input, params = {}) => {
    return fetch(input, { ...params, next: nextConfig });
  };
};

const YouTubeAPIClient = youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY,
  fetchImplementation: fetchWithNextConfig(),
});

export const APIYouTube = {
  course: {
    getAll: async () => {
      const { data } = await YouTubeAPIClient.playlists.list(
        {
          maxResults: 50,
          part: ["snippet"],
          channelId: "UCtJ3j1ANBe91ZHXzw6FJveg",
        },
        {
          fetchImplementation: fetchWithNextConfig({
            revalidate: 60 * 60 * 48,
          }),
        }
      );

      const courses = (data.items || []).map((playlistItem) => ({
        id: playlistItem.id || "",
        title: playlistItem.snippet?.title || "",
        description: playlistItem.snippet?.description || "",
        image: playlistItem.snippet?.thumbnails?.medium?.url || "",
      }));

      return courses.filter((course) =>
        course.description.includes("#CODARSE")
      );
    },
    getById: async (id: string) => {
      const {
        data: { items: [courseItem] = [] },
      } = await YouTubeAPIClient.playlists.list(
        {
          id: [id],
          maxResults: 1,
          part: ["snippet"],
        },
        {
          fetchImplementation: fetchWithNextConfig({
            revalidate: 60 * 60 * 48,
          }),
        }
      );

      const classes: youtube_v3.Schema$PlaylistItem[] = [];
      let nextPageToken: string | undefined = undefined;
      do {
        await YouTubeAPIClient.playlistItems
          .list(
            {
              maxResults: 50,
              playlistId: id,
              part: ["snippet"],
              pageToken: nextPageToken,
            },
            {
              fetchImplementation: fetchWithNextConfig({
                revalidate: 60 * 60 * 24,
              }),
            }
          )
          .then(({ data }) => {
            classes.push(...(data.items || []));
            nextPageToken = data.nextPageToken || undefined;
          });
      } while (nextPageToken);

      type TGroupWithClass = {
        title: string;
        courseId: string;
        classes: {
          id: string;
          title: string;
        }[];
      };
      const classGroups = classes
        .sort((a, b) => (a.snippet?.position || 0) - (b.snippet?.position || 0))
        .map((youTubePlaylistItem) => ({
          id: youTubePlaylistItem.id || "",
          title: youTubePlaylistItem.snippet?.title || "",
          description: youTubePlaylistItem.snippet?.description || "",
        }))
        .reduce<TGroupWithClass[]>((previous, current) => {
          const currentGroupTitle =
            current.description
              .match(/CODARSE - .*/)
              ?.at(0)
              ?.replace("CODARSE - ", "")
              .trim() || "";

          const previousGroup = previous.at(previous.length - 1);
          const previousGroupTitle = previousGroup?.title;

          if (previousGroup && previousGroupTitle === currentGroupTitle) {
            previousGroup.classes.push({
              id: current.id,
              title: current.title,
            });
          } else {
            previous.push({
              courseId: id,
              title: currentGroupTitle,
              classes: [
                {
                  id: current.id,
                  title: current.title,
                },
              ],
            });
          }

          return previous;
        }, []);

      return {
        id,
        title: courseItem.snippet?.title || "",
        description: courseItem.snippet?.description || "",
        image: courseItem.snippet?.thumbnails?.medium?.url || "",

        classGroups,
        numberOfClasses: classes.length,
      };
    },
  },
  class: {
    getAllByCourseId: async (id: string) => {
      const classes: youtube_v3.Schema$PlaylistItem[] = [];
      let nextPageToken: string | undefined = undefined;

      do {
        await YouTubeAPIClient.playlistItems
          .list(
            {
              maxResults: 50,
              playlistId: id,
              part: ["snippet"],
              pageToken: nextPageToken,
            },
            {
              fetchImplementation: fetchWithNextConfig({
                revalidate: 60 * 60 * 24,
              }),
            }
          )
          .then(({ data }) => {
            classes.push(...(data.items || []));
            nextPageToken = data.nextPageToken || undefined;
          });
      } while (nextPageToken);

      return classes.map((classItem) => ({
        courseId: id,
        id: String(classItem.id),
      }));
    },
    getById: async (id: string) => {
      const {
        data: { items: [classItem] = [] },
      } = await YouTubeAPIClient.playlistItems.list(
        { id: [id], part: ["contentDetails"] },
        {
          fetchImplementation: fetchWithNextConfig({
            revalidate: 60 * 60 * 24,
          }),
        }
      );

      const videoId = classItem.contentDetails?.videoId;
      if (!videoId) throw new Error("Video id not found");

      const {
        data: { items: [videoItem] = [] },
      } = await YouTubeAPIClient.videos.list(
        {
          id: [videoId],
          maxResults: 1,
          part: ["snippet", "statistics"],
        },
        {
          fetchImplementation: fetchWithNextConfig({
            revalidate: 60 * 60 * 48,
          }),
        }
      );

      if (!videoItem.snippet) throw new Error("Snippet not found");
      if (!videoItem.statistics) throw new Error("Statistics not found");

      return {
        videoId,
        title: String(videoItem.snippet.title),
        description: String(videoItem.snippet.description),
        viewsCount: Number(videoItem.statistics.viewCount),
        likesCount: Number(videoItem.statistics.likeCount),
        commentsCount: Number(videoItem.statistics.commentCount),
      };
    },
  },
  comments: {
    getAllByVideoId: async (videoId: string) => {
      const { data } = await YouTubeAPIClient.commentThreads.list(
        {
          videoId,
          maxResults: 50,
          part: ["snippet", "replies"],
        },
        {
          fetchImplementation: fetchWithNextConfig({ revalidate: 60 * 60 * 8 }),
        }
      );

      return (data.items || []).map((threadComment) => ({
        likesCount:
          threadComment.snippet?.topLevelComment?.snippet?.likeCount || 0,
        content:
          threadComment.snippet?.topLevelComment?.snippet?.textOriginal || "",
        publishDate:
          threadComment.snippet?.topLevelComment?.snippet?.publishedAt || "",
        author: {
          userName:
            threadComment.snippet?.topLevelComment?.snippet
              ?.authorDisplayName || "",
          image:
            threadComment.snippet?.topLevelComment?.snippet
              ?.authorProfileImageUrl || "",
        },
        replies: (threadComment.replies?.comments || []).map((reply) => ({
          likesCount: reply.snippet?.likeCount || 0,
          content: reply.snippet?.textOriginal || "",
          publishDate: reply.snippet?.publishedAt || "",
          author: {
            userName: reply.snippet?.authorDisplayName || "",
            image: reply.snippet?.authorProfileImageUrl || "",
          },
        })),
      }));
    },
  },
};
