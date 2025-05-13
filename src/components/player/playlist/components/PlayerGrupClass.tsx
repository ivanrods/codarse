import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { IPlayerClassProps, PlayerClass } from "./PlayerClass";
export interface PlayerGrupClassProps {
  title: string;
  open: boolean;
  position: number;
  playingClassId: string
  classes: (Pick<IPlayerClassProps, "done" | "title"> & {classId: string})[];
  onPlay: (classId: string) => void;
  onToggle: () => void;
  onCheck: (classId: string) => void;
}
export const PlayerGrupClass = ({
  classes,
  position,
  playingClassId,
  title,
  open,
  onPlay,
  onToggle,
  onCheck,
}: PlayerGrupClassProps) => {
  return (
    <div className="flex flex-col">
      <button
        className="flex gap-2 p-4 bg-neutral-600 items-center active:opacity-80"
        onClick={onToggle}
      >
        <div className="bg-black h-12 w-12 rounded-full flex items-center justify-center">
          {position}
        </div>

        <div className="flex flex-col flex-1 items-start">
          <span className="font-bold text-start line-clamp-1">{title}</span>
          <span className="text-sm font-light text-start line-clamp-1">
            {classes.filter((classItem) => classItem.done).length}/
            {classes.length} aulas
          </span>
        </div>

        {open ? (
          <MdKeyboardArrowDown size={28} />
        ) : (
          <MdKeyboardArrowRight size={28} />
        )}
      </button>

      <ol data-open={open} className="flex flex-col data-[open=false]:hidden">
        {classes.map((classItem) => (
          <li key={classItem.title}>
            <PlayerClass
              {...classItem}
              playing={classItem.classId === playingClassId}
              onPlay={() => onPlay(classItem.classId)}
              onCheck={() => onCheck(classItem.classId)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};
