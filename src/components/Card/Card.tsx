import Image from "next/image";
import Link from "next/link";

export const Card = () => {
  return (
    <Link href="/curosos/32532543" className="">
      <article className="flex flex-col gap-2 p-2 rounded hover:no-underline sm:hover:bg-teal-600">
        <Image
          src={"https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"}
          width={1000}
          height={0}
          alt=""
          draggable={false}
          className="aspect-video object-cover rounded-2xl"
        />
        <h4 className="font-extrabold text-lg">
          Curso de API rest, node e Typescript
        </h4>
        <p className="line-clamp-3">
          A medida que um sistema começa a ganhar forma, para garantirmos que
          apenas pessoas autorizadas possam acessar os recursos da aplicação
          precisamos de alguma forma garantir a autenticidade do usuário que
          está utilizando o sistema. Nessa vamos começar o desenvolvimento do
          controle de usuário para o nosso sistema, vamos desenvolver as
          migration para a entidade que deve armazenar os usuário que podem
          acessar o sistema. Links mencionados no vídeo: 📖 Repositório do
          projeto - https://github.com/lvsouza/youtube-cu... 🗨️ Discord - /
          discord Outros cursos no canal: 🎩 Figma para DEVs - • Figma para
          DEVs: #00 - Apresentação d... ☪️ Curso de estilização no React - •
          Estilização no React: Aula 00 - Curso... ⭐️ Curso de React com
          typescript - • Curso de react: Aula 01 - Começando c... 👑 React,
          Material UI 5 e Typescript - • React, Material UI 5 e Typescript:
          #0... 🏆 Curso de API Rest, Node e Typescript - • API Rest, Node e
          Typescript: #00 - Ap... Livros recomendados: 📘 Código limpo -
          https://s.shopee.com.br/1LKnAYYXtW 📘 Arquitetura limpa -
          https://s.shopee.com.br/4fbF8sGs4H 📘 Migrando sistemas monolíticos -
          https://s.shopee.com.br/606cjP12q9 Conteúdo: 0:00 | Introdução 0:21 |
          O que faremos nessa aula 5:47 | Revisando modelagem para controle de
          usuários 8:00 | Criando model para controle de usuários 9:48 | Criando
          migration para tabela de usuários 15:05 | Rodando migration para
          localhost 16:40 | Alterando migration e dica importante 19:20 |
          Considerações finais CODARSE - Criando o controle de usuários
          #typescript #cursotypescript #javascript #cursodejavascript
          #reactetypescript #learningtypescript #learningjavascript #apirest
          #apinode
        </p>
      </article>
    </Link>
  );
};
