"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOpenInNew } from "react-icons/md";

export const Header = () => {
  const currentPath = usePathname();

  return (
    <nav className="flex items-center justify-center bg-teal-600 py-4">
      <ul className="flex items-center gap-4 ">
        <li className="my-2 ">
          <Link href="/" className="border-2 rounded-md py-2 px-2 font-bold ">
            CODARSE
          </Link>
        </li>
        <li>
          <Link
            href="/"
            data-active={currentPath === "/"}
            className="data-[active=true]:underline"
          >
            Pagina inicial
          </Link>
        </li>
        <li> 
          <Link href="/cursos" data-active={currentPath === '/cursos'} className='data-[active=true]:underline' >Cursos</Link>
        </li>
        <li>
          <Link
            href="https://blog.codarse.com"
            target="_blank"
            className="flex items-center gap-1"
          >
            Blog
            <MdOpenInNew />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
