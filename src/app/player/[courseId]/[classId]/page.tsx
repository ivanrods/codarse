
import {
  PlayerClassDetails,
  PlayerHeader,
  PlayerPlaylist,
} from "@/components/player";

interface Props {
  params: {
    classId: string;
    courseId: string;
    done: boolean;
  };
}

export default function PagePlayer({ params: { classId, courseId } }: Props) {

  const classGrupsData = [
              {
                title: "Introdução e apresentação do projeto",
                classes: [
                  {
                    done: true,
                    classId: "aula-00",
                    title:
                      "0 API Rest, Node e Typescript: #00 - Apresentação do curso, tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-01",
                    title:
                      "01 API Rest, Node e Typescript: #01 - Apresentação do curso, tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-02",
                    title:
                      "2 API Rest, Node e Typescript: #02 - Apresentação do curso, tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-03",
                    title:
                      "3 API Rest, Node e Typescript: #03 - Apresentação do curso, tecnologias usadas e muito mais",
                  },
                ],
              },
              {
                title: "Introdução e apresentação do projeto",
                classes: [
                  {
                    done: true,
                    classId: "aula-04",
                    title:
                      "4 API Rest, Node e Typescript: #04 - Apresentação do curso, tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-05",
                    title:
                      "5 API Rest, Node e Typescript: #05 - Apresentação do curso, tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-06",
                    title:
                      "6 API Rest, Node e Typescript: #06 - Apresentação do curso, tecnologias usadas e muito mais",
                  },
                  {
                    done: false,
                    classId: "aula-07",
                    title:
                      "7 API Rest, Node e Typescript: #07 - Apresentação do curso, tecnologias usadas e muito mais",
                  },
                ],
              },
            ]
  return (
    <main className="flex flex-col gap-2 h-screen">
      <PlayerHeader
        title="NextJS, TailwindCSS e Typescript: #32 - Criando componente de header
          para a tela de player"
        subtitle="🔔 NextJS, TailwindCSS e Typescript"
      />
      <div className="flex gap-2 h-[calc(100vh-72px)]">
        <div className="max-w-96 ">
          <PlayerPlaylist
            playingClassId={classId}
            playingCourseId={courseId}
            classGroups={classGrupsData}
          />
        </div>
        <PlayerClassDetails
          classGroups={classGrupsData}
          playingClassId={classId}
          playingCourseId={courseId}
          course={{
            title:'🔔 NextJS, TailwindCSS e Typescript',
            description: 'Este curso gratuito é um guia completo para desenvolvedores que desejam construir uma plataforma de cursos online moderna e integrada com a API do YouTube. ',
            numberOfClasses: 48
          }}
        />
      </div>
    </main>
  );
}
