import { cursiveMain, mainForText } from "@/app/infoStore/fonts";
import Link from "next/link";

export const StyledH2 = (props: {text: string}) =>{
    return <h2 className={`${cursiveMain.className} text-4xl px-8 capitalize mt-3`}>{props.text}</h2>
}

export const StyledP = (props: {text: string, topic:String, link: string}) =>{
    
    return <p className={`${mainForText.className} text-zinc-500 text-[22px] px-16 mb-1 `}>
        <Link href={`./${props.topic}/${props.link}`} dangerouslySetInnerHTML={{ __html: props.text }}></Link>
    </p>
}