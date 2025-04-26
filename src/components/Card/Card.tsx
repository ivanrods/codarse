import Image from "next/image";
import Link from "next/link";

interface ICardProps {
  href: string;
  image: string;
  title: string;
  description: string;
}
export const Card = ({ href, image, title, description }: ICardProps) => {
  return (
    <Link href={href} className="">
      <article className="flex flex-col gap-2 p-2 rounded hover:no-underline sm:hover:bg-teal-600">
        <Image
          src={image}
          width={1000}
          height={0}
          alt={title}
          draggable={false}
          className="aspect-video object-cover rounded-2xl"
        />
        <h4 className="font-extrabold text-lg">{title}</h4>
        <p className="line-clamp-3">{description}</p>
      </article>
    </Link>
  );
};
