import { PlayerHeader } from "@/components/Player";

interface Props {
  params: {
    classId: string;
    courseId: string;
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
    </>
  );
}
