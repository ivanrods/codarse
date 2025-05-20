"use client";
import { useRouter } from "next/navigation";

import { PlayerGrupClassProps } from "../playlist/components/PlayerGrupClass";
import { PlayerVideoPlayer } from "./components/PlayerVideoPlayer";
import { useMemo } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { CourseHeader } from "@/components/course-header/CourseHeader";
import { PlayerClassHeader } from "./components/PlayerClassHeader";

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
  classItem
}: IPlayerClassDetailsProps) => {
  const router = useRouter();

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
          videoId="bP47qRVRqQs"
          onPlayNext={() =>
            nextClassId
              ? router.push(`/player/${playingCourseId}/${nextClassId}`)
              : {}
          }
        />
      </div>

      <Tabs.Root defaultValue="class-details">
        <Tabs.TabsList className="flex gap-4 ">
          <Tabs.Trigger
            value="class-details"
            className="p-2 flex items-center justify-center border-transparent data-[state=active]:border-b-teal-600 border-b-4"
          >
            Visão geral
          </Tabs.Trigger>

          <Tabs.Trigger
            value="class-comments"
            className="p-2 flex items-center justify-center border-transparent data-[state=active]:border-b-teal-600 border-b-4"
          >
            Comentários
          </Tabs.Trigger>

          <Tabs.Trigger
            value="course-details"
            className="p-2 flex items-center justify-center border-transparent data-[state=active]:border-b-teal-600 border-b-4"
          >
            Visão geral do curso
          </Tabs.Trigger>
        </Tabs.TabsList>
        <hr className="border- border-neutral-500 mb-2" />
        <Tabs.Content value="class-details">
          <PlayerClassHeader
            title={classItem.title}
            description={classItem.description}
          />
        </Tabs.Content>
        <Tabs.Content value="class-comments">Comentarios da aula</Tabs.Content>
        <Tabs.Content value="course-details">
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
