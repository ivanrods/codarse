
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
          classItem={{title: 'NextJS, TailwindCSS e Typescript: #43 - Configurando tab de detalhes da aula', description: 'Crie sua plataforma de cursos online com integração ao YouTube!\n\nCansado de usar o YouTube para aulas e perder tempo procurando por vídeos? Nesse curso, te ensino a criar sua própria plataforma de cursos online que se conecta ao YouTube para carregar e organizar suas aulas!\n\nAprenda a criar a plataforma do zero, com muito pouco conhecimento técnico, importar aulas do YouTube, organizar em módulos e seções e muito mais! A plataforma é personalizável e você adicionar mais recursos para vender cursos, ou permitir adicionar exercícios.\n\nDurante o desenvolvimento do curso vamos utilizar o NextJS, TailwindCSS e Typescript, além se conectar com as APIs do YouTube para trazer os detalhes das aulas e dos cursos.\n\nBônus: Acesso vitalício às atualizações, grupo exclusivo de alunos e muito mais!\n\n\nPrecisa de ajuda? Solicite uma ajuda particular: https://forms.gle/Pu1aT2LsbU1nuTTDA\n\n\nLinks mencionados no vídeo:\n🅵 Protótipo - https://www.figma.com/community/file/1349332873161679016/plataforma-de-cursos\n🗨️ Discord - https://discord.gg/ZC7JrPZn7P\n\nOutros cursos no canal:\n🔔 NextJS, TailwindCSS e Typescript - https://youtu.be/bP47qRVRqQs\n🎩 Figma para DEVs - https://youtu.be/4rSPV1NbM10\n☪️ Curso de estilização no React - https://youtu.be/oUbPkR799fc\n⭐️ Curso de React com typescript - https://youtu.be/1bEbBkWc4-I\n👑 React, Material UI 5 e Typescript - https://youtu.be/wLH1Vv86I44\n🏆 Curso de API Rest, Node e Typescript - https://youtu.be/SVepTuBK4V0\n\nLivros recomendados:\n📘 Código limpo - https://s.shopee.com.br/1LKnAYYXtW\n📘 Arquitetura limpa - https://s.shopee.com.br/4fbF8sGs4H\n📘 Migrando sistemas monolíticos - https://s.shopee.com.br/606cjP12q9\n\nConteúdo:\n0:00 | Introdução\n0:29 | O que veremos nessa aula\n1:10 | Cronograma no notion\n2:00 | Versão do NodeJS\n3:00 | Abrindo e analizando o site publicado\n4:00 | Entendendo a dinâmica da plataforma de cursos online\n6:00 | SSR\n8:40 | Porque criar uma plataforma de cursos\n10:00 | Tela de player\n16:00 | Continuar assistindo\n17:15 | Aplicação responsiva\n22:40 | Finalização e agradecimentos\n\nCODARSE - Introdução e apresentação do projeto\n\n#DesenvolvimentoWeb #Programação #DesenvolvimentoDeSoftware #AprenderProgramação #CursosOnline #TechTutoriais #YouTubeEducação #CodeNewbies #DesenvolvimentoFrontend #CodeWithMe #TecnologiaEducacional #WebDesign #DesenvolvimentoDeAplicativos #AprendaACodificar #TecnologiaDeFrontend #EducaçãoDigital #DesenvolvimentoDeApps #TutoriaisDeProgramação #CódigoCriativo #ProgramaçãoParaIniciantes'}}
        />
      </div>
    </main>
  );
}
