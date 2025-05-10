'use client'
import { PlayerHeader, PlayerClass } from "@/components/Player";

interface Props {
  params: {
    classId: string;
    courseId: string;
    done: boolean;
  };
}

export default function PagePlayer({ params: { classId, courseId } }: Props) {
  return (
    <>
      <PlayerHeader
        title="NextJS, TailwindCSS e Typescript: #32 - Criando componente de header
          para a tela de player"
        subtitle="🔔 NextJS, TailwindCSS e Typescript"
      />
      <>
        {classId} {courseId}
      </>
      <PlayerClass
        playing
        done={false}
        onCheck={()=> console.log('check')}
        onPlay={()=> console.log('play')}
        title="NextJS, TailwindCSS e Typescript: #33 - Criando componente de aula
          para a playlist na tela de player"
      />
    </>
  );
}
