import React from 'react';
import { cursiveMain, textMainServer } from "@/app/infoStore/fonts";
import Link from "next/link";
import style from "./design1.module.scss";
import { MainType } from '../page';

export default function Design1(props: MainType){  
	let curTopic = props.subTopic;
	return <main className={style.main}>
		<section>
			<h2 className={`${cursiveMain.className} ${style.heading}`}>{curTopic[0].replaceAll("_"," ")}</h2>
			{(curTopic[1]).map((val:string,i: number)=> {
				if(val.includes("%")) return <StyledP
					key={i}
					text={val.substring(0,val.lastIndexOf('%')).replaceAll("_"," ")}
					link={`${curTopic[0]}/${val.substring(val.lastIndexOf('%')+1,val.length)}`.replaceAll("'","")}
				/>;
				else return <StyledP
					key={i}
					text={val.replaceAll("_"," ")}
					link={`${curTopic[0]}/${val}`.replaceAll(" ","_").replaceAll("'","")}
				/>;
			})}
		</section>
	</main>;
}

const StyledP = (props: {text: string, link: string}) =>{
	var pChild;
	if(props.text.slice(-11,) !== "incomplete)")
		pChild = <Link href={`./${props.link}`} dangerouslySetInnerHTML={{ __html: props.text }} aria-label={`${props.text}`}></Link>;
	else pChild = <span dangerouslySetInnerHTML={{ __html: props.text }}></span>;
	
	return <p className={`${textMainServer.className} text-zinc-500 mb-1 ${style.articleLinks}`}>{pChild}</p>;
}