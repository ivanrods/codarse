import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";

interface IClessProps{
    title:string;
    playerUrl:string;

}

export const Cless = ({playerUrl, title}:IClessProps) => {
    return(
    <Link href={playerUrl} className="flex items-center gap-6 p-4 hover:no-underline">
        <MdPlayCircleOutline size={24}/>
        {title}
    </Link>
    )
}