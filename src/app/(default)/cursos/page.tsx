import { Section } from "@/components/section/Section";
import { Metadata } from "next";
import { APIYouTube } from "@/shared/services/api-youtube";
export const metadata: Metadata = {
  title: "CodarSe - Todos os cursos",
};

export default async function PageCursos() {
  const courses = await APIYouTube.course.getAll();
  return (
    <main className="mt-8 flex justify-center">
      <div className="min-[880px]:max-w-[880px]">
        <Section
          variant="grid"
          title="Todos os cursos"
          items={courses.map((course) => ({
            title: course.title,
            image: course.image,
            href: `/cursos/${course.id}`,
            description: course.description,
          }))}
        />
      </div>
    </main>
  );
}
