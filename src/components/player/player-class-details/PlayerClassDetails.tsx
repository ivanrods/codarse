"use client";
import { useMemo, useRef } from "react";
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

interface IPlayerClassDetailsProps {
  course: {
    title: string;
    description: string;
    numberOfClasses: number;
  };
  classItem: {
    title: string;
    description: string;
  };
  playingClassId: string;
  playingCourseId: string;
  classGroups: Pick<PlayerGrupClassProps, "classes" | "title">[];
}
export const PlayerClassDetails = ({
  playingCourseId,
  playingClassId,
  classGroups,
  course,
  classItem,
}: IPlayerClassDetailsProps) => {
  const router = useRouter();

  const playerVideoPlayerRef = useRef<IPlayerVideoPlayerRef>(null);

  const nextClassId = useMemo(() => {
    const classes = classGroups.flatMap((classGroup) => classGroup.classes);

    const currentClassIndex = classes.findIndex(
      (classItem) => classItem.classId === playingClassId
    );

    const nextClassIndex = currentClassIndex + 1;

    if (nextClassIndex === classes.length) {
      return undefined;
    }

    return classes[nextClassIndex].classId;
  }, [classGroups, playingClassId]);

  return (
    <div className="flex-1 overflow-auto pb-10">
      <div className="aspect-video">
        <PlayerVideoPlayer
          videoId="bP47qRVRq_Qs"
          ref={playerVideoPlayerRef}
          onPlayNext={() =>
            nextClassId
              ? router.push(`/player/${playingCourseId}/${nextClassId}`)
              : {}
          }
        />
      </div>

      <Tabs.Root defaultValue="class-details">
        <Tabs.List className="flex gap-4">
          <Tabs.Trigger
            value="class-details"
            className="p-2 flex items-center justify-center border-b-4 border-transparent data-[state=active]:border-primary"
          >
            Visão geral
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
        <Tabs.Content value="class-comments" className="px-2"><Comments /></Tabs.Content>
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
