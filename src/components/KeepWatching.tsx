import Link from "next/link";
import { MdPlayCircle } from "react-icons/md";

export const KeepWatching = () => {
  return (
    <Link
      href={`/player/{courseId}/{classId}`}
      className="p-4 mx-4 flex gap-2 bg-teal-600 rounded-lg hover:no-underline"
    >
      <div className="flex flex-col gap-2 flex-1">
        <h1 className="font-bold line-clamp-1">
          🔔 NextJS, TailwindCSS e Typescript: #28 - Criando componente de
          Conteúdo de curso
        </h1>
        <p className="line-clamp-1">Curso de Figma para DEVs</p>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <span className="hidden md:block">Continuar assistindo</span>

        <MdPlayCircle size={28} />
      </div>
    </Link>
  );
};
