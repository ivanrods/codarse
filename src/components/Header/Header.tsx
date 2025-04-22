"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdMenu, MdOpenInNew } from "react-icons/md";

export const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const [title, setTitle] = useState("CodarSe");
  const currentPath = usePathname();

  useEffect(() => {
    setTitle(document.title);
    setDrawer(false)
  }, [currentPath]);

  return (
    <nav className="flex items-center gap-6 justify-start md:justify-center bg-teal-600 py-2 sm:py-4 px-6">
      <button className="sm:hidden" onClick={() => setDrawer(true)}>
        <MdMenu size={24} />
      </button>
      <ul className="flex items-center gap-4 " tabIndex={drawer ? -1 : undefined}>
        <li className="my-2 ">
          <Link href="/" className="border-2 rounded-md py-2 px-2 font-bold ">
            CODARSE
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href="/"
            data-active={currentPath === "/"}
            className="data-[active=true]:underline"
          >
            Pagina inicial
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href="/cursos"
            data-active={currentPath === "/cursos"}
            className="data-[active=true]:underline"
          >
            Cursos
          </Link>
        </li>
        <li className="hidden sm:block">
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
      <div
        data-open={drawer}
        onClick={() => setDrawer(false)}
        tabIndex={drawer ? undefined : -1}
        className="bg-gradient-to-r from-black fixed top-0 left-0 bottom-0 right-0 transition-transform data-[open=false]:-translate-x-full"
      >
        <ul onClick={e => e.stopPropagation()} className="h-full flex flex-col p-4 w-60 gap-4   bg-black">
          <li className="">
            <Link
              href="/"
              data-active={currentPath === "/"}
              className="data-[active=true]:underline"
            >
              Pagina inicial
            </Link>
          </li>
          <li className="">
            <Link
              href="/cursos"
              data-active={currentPath === "/cursos"}
              className="data-[active=true]:underline"
            >
              Cursos
            </Link>
          </li>
          <li className="">
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
      </div>

      <h1 className="sm:hidden">{title}</h1>
    </nav>
  );
};
