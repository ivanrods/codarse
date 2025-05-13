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
  const [openedIndex, setOpenedIndex] = useState<number | undefined>(undefined);

  const router = useRouter();
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col p-4 bg-neutral-600">
        <h3 className="text-lg font-bold">Conteúdo do curso </h3>
      </div>

      <ol>
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
