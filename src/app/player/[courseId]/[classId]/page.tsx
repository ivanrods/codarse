"use client";
import { PlayerHeader, PlayerGrupClass } from "@/components/Player";

interface Props {
  params: {
    classId: string;
    courseId: string;
    done: boolean;
  };
}

export default function PagePlayer({ params: { classId, courseId } }: Props) {
  return (
    <main className="flex flex-col gap-20">
      <PlayerHeader
        title="NextJS, TailwindCSS e Typescript: #32 - Criando componente de header
          para a tela de player"
        subtitle="🔔 NextJS, TailwindCSS e Typescript"
      />
      <>
        {classId} {courseId}
      </>
      <PlayerGrupClass 
       open={true}
       position={1}
       title='Introdução e apresentação do projeto'
       onToggle={() => console.log('toggle')}
       classes={[
         {
           done: true,
           playing: false,
           title: 'API Rest, Node e Typescript: #00 - Apresentação do curso, tecnologias usadas e muito mais'
         },
         {
           done: false,
           playing: true,
           title: 'API Rest, Node e Typescript: #02 - Apresentação do curso, tecnologias usadas e muito mais'
         },
         {
           done: false,
           playing: false,
           title: 'API Rest, Node e Typescript: #03 - Apresentação do curso, tecnologias usadas e muito mais'
         },
         {
           done: false,
           playing: false,
           title: 'API Rest, Node e Typescript: #04 - Apresentação do curso, tecnologias usadas e muito mais'
         },
       ]}
      />
    </main>
  );
}
