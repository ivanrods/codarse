import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";

interface IStartCourseProps {
  idClass: string;
  idCourse: string;
  imageUrl: string;
}

export const StartCourse = ({
  idClass,
  idCourse,
  imageUrl,
}: IStartCourseProps) => {
  return (
    <div className="p-2 bg-neutral-700 rounded-md flex flex-col gap-4">
      <Link
        href={`/player/${idCourse}/${idClass}`}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="w-full bg-cover bg-no-repeat aspect-video bg-center rounded"
      >
        <div className="w-full h-full flex items-center justify-center bg-black rounded opacity-0 hover:opacity-70 transition">
          <MdPlayCircleOutline size={58} />
        </div>
      </Link>
      <Link
        href={`/player/${idCourse}/${idClass}`}
        className="bg-teal-600 p-2 px-3 rounded text-center"
      >
        Começar curso
      </Link>
    </div>
  );
};
