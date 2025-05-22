import Image from "next/image";
import { MdArrowDropDown, MdThumbUp } from "react-icons/md";

interface ICommentProps {}
export const Comment = ({}: ICommentProps) => {
  return (
    <div className="flex gap-2">
      <div>
        <Image
          src={
            "https://avatars.githubusercontent.com/u/67488687?v=4"
          }
          className="rounded-full items-start"
          draggable={false}
          alt="Imagem de perfil"
          width={40}
          height={40}
        />
      </div>{" "}
      <div className="bg-neutral-800 flex-1 flex flex-col gap-4 p-2 rounded">
        <div className="flex gap-2 items-center">
          <span className="font-bold">user name</span>{" "}
          <span className="font-extrabold text-xs opacity-50">
            25/09/2043 ás 15:24
          </span>
        </div>
        <p>Coment</p>
        <div className="flex gap-4">
          <div className="flex gap-1 items-center">
            <MdThumbUp /> <span>5</span>
          </div>
          <button className="flex gap-1 items-center text-teal-600">
            <MdArrowDropDown size={24} /> <span>Ver respostas (5)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
