import { Card } from "../Card/Card";
interface ISectionProps {
  title: string;
  variant: "grid" | "h-list";
}
export const Section = ({ title, variant = "grid" }: ISectionProps) => {
  return (
    <section className="flex flex-col gap-4 px-4">
      <h2 className="font-bold text-xl ">{title}</h2>
      <ul
        data-variant={variant}
        className='grid gap-2 grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto'
      >
        <li data-variant={variant} className='w-full data-[variant=h-list]:sm:w-72'>
          <Card
            href="/cursos/123"
            image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
            title="Curso de API rest, node e Typescript"
            description={`A medida que um sistema começa a ganhar forma, para garantirmos que
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
          #apinode`}
          />
        </li>
        <li data-variant={variant} className='w-full data-[variant=h-list]:sm:w-72'>
          <Card
            href="/cursos/123"
            image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
            title="Curso de API rest, node e Typescript"
            description={`A medida que um sistema começa a ganhar forma, para garantirmos que
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
          #apinode`}
          />
        </li>
        <li data-variant={variant} className='w-full data-[variant=h-list]:sm:w-72'>
          <Card
            href="/cursos/123"
            image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
            title="Curso de API rest, node e Typescript"
            description={`A medida que um sistema começa a ganhar forma, para garantirmos que
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
          #apinode`}
          />
        </li>
      </ul>
    </section>
  );
};
