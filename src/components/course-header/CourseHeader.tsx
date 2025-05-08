'use client'
import { MdShare } from "react-icons/md";
import { CollapsinbleText } from "./components/CollapsinbleText";
import { ContentCopy } from "./components/CopyContext";


interface ICourseHeaderProps {
  title: string;
  description: string;
  numberOfClasses: number;
} 
export const CourseHeader = ({title, description, numberOfClasses}:ICourseHeaderProps) => {
  return (
    <div className="flex flex-col gap-2 ">
      <h1 className="font-extrabold text-xl">{title}</h1>
      <CollapsinbleText numberOfLinesWhenClosed={3}>
        {description}
      </CollapsinbleText>
      <div className="flex gap-2 items-center">
        <ContentCopy title="Copie o conteúdo a baixo" content={window.location.href}>
          <button className="flex gap-2 items-center py-2 px-4 bg-stone-800 rounded-full">
            <MdShare />
            Compartilhar
          </button>
        </ContentCopy>
        <span>{numberOfClasses} aulas</span>
      </div>
    </div>
  );
};
