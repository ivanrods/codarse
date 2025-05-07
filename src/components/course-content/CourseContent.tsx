import { ClassGrup, IClassGrupProps } from "./components/ClassGrup";

interface ICourseContentProps {
  classGrups: IClassGrupProps[];
}

export const CourseContent = ({ classGrups }: ICourseContentProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-extrabold ">Conteúdo do curso</h2>
      <ol className="flex flex-col rounded-lg overflow-clip">
        {classGrups.map((classGrup) => (
          <li key={classGrup.title} className="flex flex-col">
            <ClassGrup {...classGrup} />
          </li>
        ))}
      </ol>
    </div>
  );
};
