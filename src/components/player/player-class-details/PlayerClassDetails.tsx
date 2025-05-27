"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { useRouter } from "next/navigation";

import {
  IPlayerVideoPlayerRef,
  PlayerVideoPlayer,
} from "./components/PlayerVideoPlayer";
import { PlayerGrupClassProps } from "../playlist/components/PlayerGrupClass";
import { CourseHeader } from "@/components/course-header/CourseHeader";
import { PlayerClassHeader } from "./components/PlayerClassHeader";
import { Comments } from "./components/comments/Comments";
import { PlayerPlaylist } from "../playlist/PlayerPlaylist";
import { MdComment, MdThumbUp, MdVisibility } from "react-icons/md";

interface IPlayerClassDetailsProps {
  course: {
    id: string;
    title: string;
    description: string;
    numberOfClasses: number;

    classGroups: Pick<PlayerGrupClassProps, "classes" | "title">[];
  };
  classItem: {
    id: string;
    videoId: string;
    viewsCount: number;
    likesCount: number;
    commentsCount: number;
    title: string;
    description: string;
  };
}
export const PlayerClassDetails = ({
  course,
  classItem,
}: IPlayerClassDetailsProps) => {
  const router = useRouter();

  const playerVideoPlayerRef = useRef<IPlayerVideoPlayerRef>(null);
  const [currentTap, setCurrentTap] = useState("class-details");

  const nextClassId = useMemo(() => {
    const classes = course.classGroups.flatMap(
      (classGroup) => classGroup.classes
    );

    const currentClassIndex = classes.findIndex(
      ({ classId }) => classId === classItem.id
    );

    const nextClassIndex = currentClassIndex + 1;

    if (nextClassIndex === classes.length) {
      return undefined;
    }

    return classes[nextClassIndex].classId;
  }, [course.classGroups, classItem.id]);

  useEffect(() => {
    const matchMedia = window.matchMedia("(min-width: 768px)");
    const handleMatchMedia = (e: MediaQueryListEvent) => {
      if (e.matches && currentTap === "course-playlist") {
        setCurrentTap("class-details");
      }
    };
    matchMedia.addEventListener("change", handleMatchMedia);
    return () => matchMedia.addEventListener("change", handleMatchMedia);
  }, [currentTap]);

  return (
    <div className="flex-1 overflow-auto pb-10">
      <div className="aspect-video">
        <PlayerVideoPlayer
          videoId={classItem.videoId}
          ref={playerVideoPlayerRef}
          onPlayNext={() =>
            nextClassId
              ? router.push(`/player/${course.id}/${nextClassId}`)
              : {}
          }
        />
      </div>

      <div className="flex gap-2 p-2 opacity-50">
        <div className="flex gap-1 items-center">
          <MdVisibility />
          <span>visualização</span>
          <span>{classItem.viewsCount}</span>
        </div>
        <a className="flex gap-1 items-center" target="_blank" href={`https://www.youtube.com/watch?v=${classItem.videoId}`}>
          <MdThumbUp />
          <span>curtidas</span>
          <span>{classItem.likesCount}</span>
        </a>
        <div className="flex gap-1 items-center">
          <MdComment /> <span>comentários</span>
          <span>{classItem.commentsCount}</span>
        </div>
      </div>

      <Tabs.Root
        value={currentTap}
        onValueChange={(value) => setCurrentTap(value)}
      >
        <Tabs.List className="flex gap-4">
          <Tabs.Trigger
            value="class-details"
            className="p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-primary"
          >
            Visão geral
          </Tabs.Trigger>

          <Tabs.Trigger
            value="course-playlist"
            className="p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-primary  md:hidden"
          >
            Conteúdo do curso
          </Tabs.Trigger>

          <Tabs.Trigger
            value="class-comments"
            className="p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-primary"
          >
            Comentários
          </Tabs.Trigger>
          <Tabs.Trigger
            value="course-details"
            className="p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-primary"
          >
            Visão geral do curso
          </Tabs.Trigger>
        </Tabs.List>

        <hr className="border-paper mb-2" />

        <Tabs.Content value="class-details" className="px-2">
          <PlayerClassHeader
            title={classItem.title}
            description={classItem.description}
            onTimeClick={(seconds) =>
              playerVideoPlayerRef.current?.setProgress(seconds)
            }
          />
        </Tabs.Content>
        <Tabs.Content value="course-playlist" className="px-2">
          <PlayerPlaylist
            playingClassId={classItem.id}
            playingCourseId={classItem.id}
            classGroups={course.classGroups}
          />
        </Tabs.Content>
        <Tabs.Content value="class-comments" className="px-2">
          <Comments
            comments={[
              {
                likesCount: 15,
                replies: undefined,
                content: "My comment",
                publishDate: "2024-09-09T20:16:37Z",
                author: {
                  userName: "@LucasSouzaDev",
                  image: "https://avatars.githubusercontent.com/u/67488687?v=4",
                },
              },
              {
                likesCount: 15,
                content: "My comment",
                publishDate: "2024-09-09T20:16:37Z",
                author: {
                  userName: "@LucasSouzaDev",
                  image: "https://avatars.githubusercontent.com/u/67488687?v=4",
                },
                replies: [
                  {
                    likesCount: 15,
                    replies: undefined,
                    content: "My reply",
                    publishDate: "2024-09-09T20:16:37Z",
                    author: {
                      userName: "@LucasSouzaDev",
                      image:
                        "https://avatars.githubusercontent.com/u/67488687?v=4",
                    },
                  },
                  {
                    likesCount: 15,
                    replies: undefined,
                    content: "My reply",
                    publishDate: "2024-09-09T20:16:37Z",
                    author: {
                      userName: "@LucasSouzaDev",
                      image:
                        "https://avatars.githubusercontent.com/u/67488687?v=4",
                    },
                  },
                ],
              },
              {
                likesCount: 15,
                content: "My comment",
                publishDate: "2024-09-09T20:16:37Z",
                author: {
                  userName: "@LucasSouzaDev",
                  image: "https://avatars.githubusercontent.com/u/67488687?v=4",
                },
                replies: [
                  {
                    likesCount: 15,
                    replies: undefined,
                    content: "My reply",
                    publishDate: "2024-09-09T20:16:37Z",
                    author: {
                      userName: "@LucasSouzaDev",
                      image:
                        "https://avatars.githubusercontent.com/u/67488687?v=4",
                    },
                  },
                  {
                    likesCount: 15,
                    replies: undefined,
                    content: "My reply",
                    publishDate: "2024-09-09T20:16:37Z",
                    author: {
                      userName: "@LucasSouzaDev",
                      image:
                        "https://avatars.githubusercontent.com/u/67488687?v=4",
                    },
                  },
                ],
              },
            ]}
          />
        </Tabs.Content>
        <Tabs.Content value="course-details" className="px-2">
          <CourseHeader
            title={course.title}
            description={course.description}
            numberOfClasses={course.numberOfClasses}
          />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};
