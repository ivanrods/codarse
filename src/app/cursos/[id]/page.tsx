import { CourseHeader } from "@/components/course-header/CourseHeader";
import { StartCourse } from "@/components/StartCourse";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: "CodarSe - Curso API Rest, Node e Typescript",
  };
}
export default function PageCurseDetail({ params }: Props) {
  return (
    <main className="mt-8 flex justify-center">
      <div className="w-full min-[880px]:max-w-[880px] px-2 flex flex-col gap-4">
        <StartCourse
          idClass="1"
          idCourse="1"
          imageUrl="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
        />
        <CourseHeader />
      </div>
    </main>
  );
}
