"use client";
import { useState } from "react";
import {
  PlayerGrupClass,
  PlayerGrupClassProps,
} from "./components/PlayerGrupClass";
import { useRouter } from "next/navigation";

interface IPlayerPlaylistProps {
  playingClassId: string;
  playingCourseId: string;
  classGroups: Pick<PlayerGrupClassProps, "classes" | "title">[];
}
export const PlayerPlaylist = ({
  classGroups,
  playingClassId,
  playingCourseId,
}: IPlayerPlaylistProps) => {
  const [openedIndex, setOpenedIndex] = useState<number | undefined>(
    classGroups.findIndex((classGroup) =>
      classGroup.classes.some(
        (classItem) => classItem.classId === playingClassId
      )
    )
  );

  const router = useRouter();
  
  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex flex-col p-4 bg-neutral-600">
        <h3 className="text-lg font-bold">Conteúdo do curso </h3>
      </div>

      <ol className="overflow-auto ">
        {classGroups.map((classGroup, index) => (
          <li key={classGroup.title}>
            <PlayerGrupClass
              {...classGroup}
              playingClassId={playingClassId}
              position={index + 1}
              open={openedIndex === index}
              onCheck={(classId) => console.log("check", classId)}
              onPlay={(classId) =>
                router.push(`/player/${playingCourseId}/${classId}`)
              }
              onToggle={() =>
                setOpenedIndex(openedIndex === index ? undefined : index)
              }
            />
          </li>
        ))}
      </ol>
    </div>
  );
};
