import { UrlMatcher } from "interweave-autolink";
import dynamic from "next/dynamic";
import { useMemo } from "react";

const Interweave = dynamic(
  () => import("interweave").then((result) => result.Interweave),
  { ssr: false }
);

interface IPlayerClassHeaderProps {
  title: string;
  description: string;
}
export const PlayerClassHeader = ({
  description,
  title,
}: IPlayerClassHeaderProps) => {
  const urlMatcher = useMemo(() => {
    return new UrlMatcher("urlMatcher", { validateTLD: false }, ({ url }) => (
      <a href={url} target="_blank" className="text-teal-600">
        {url}
      </a>
    ));
  }, []);
  return (
    <div className="flex gap-2 flex-col mt-2">
      <h3 className="font-extrabold text-xl">{title}</h3>
      <Interweave content={description} matchers={[urlMatcher]} />
    </div>
  );
};
