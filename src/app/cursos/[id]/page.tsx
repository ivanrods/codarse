import { CourseContent } from "@/components/course-content/CourseContent";
import { CourseHeader } from "@/components/course-header/CourseHeader";
import { StartCourse } from "@/components/StartCourse";
import { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: params.id,
    description: params.id,
  };
}
export default function PageCurseDetail({ params }: Props) {
  return (
    <main className="mt-8 flex justify-center">
      <div className="w-full min-[880px]:max-w-[880px] lg:px-0 px-2 flex flex-col md:flex-row-reverse gap-4 not-first:">
        <div className="flex-1">
          <StartCourse
            title="Curso de figam para devs"
            idClass="1"
            idCourse="1"
            imageUrl="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
          />
        </div>
        <div className="flex-2 flex flex-col gap-4">
          <CourseHeader />
          <CourseContent
            classGrups={[
              {
                courseId: "123",
                title: "Intrudução",
                classes: [
                  {
                    id: "123",
                    title:
                      "NextJS, TailwindCSS e Typescript: #28 - Criando componente de Conteúdo de curso",
                  },
                  {
                    id: "123",
                    title:
                      "NextJS, TailwindCSS e Typescript: #28 - Criando componente de Conteúdo de curso",
                  },
                ],
              },
              {
                courseId: "123",
                title: "Primeiras configurações",
                classes: [
                  {
                    id: "123",
                    title:
                      "NextJS, TailwindCSS e Typescript: #28 - Criando componente de Conteúdo de curso",
                  },
                  {
                    id: "123",
                    title:
                      "NextJS, TailwindCSS e Typescript: #28 - Criando componente de Conteúdo de curso",
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
