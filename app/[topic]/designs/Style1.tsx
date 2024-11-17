import React from 'react';
import { cursiveMainServer, textMainServer } from "@/app/infoStore/fonts";
import Link from "next/link";
import styles2 from "./style1.module.scss";

export default function Style1(props: {topic: string, topicsInfoState: Array<[string,string[]]>}){ 
	return <main style={{paddingBottom:"40px", opacity:'0'}} className='animate-[becomeVisible_0.5s_ease-out_0.5s_forwards]'>
		{props.topicsInfoState.map((subArr: [string, string[]], i:number)=>{
			return <section key={i}>
				<h2 className={`${cursiveMainServer.className} capitalize mt-3 ${styles2.heading}`}>{subArr[0].replaceAll("_"," ")}</h2>
				{(subArr[1]).map((val:string,i: number)=> {
					if(val.includes("%")){ return <StyledP
						key={i}
						text={val.substring(0,val.lastIndexOf('%')).replaceAll("_"," ")}
						link={`${props.topic}/${subArr[0]}/${val.substring(val.lastIndexOf('%')+1,val.length)}`}
					/>;
					}else return <StyledP
						key={i}
						text={val.replaceAll("_"," ")}
						link={`${props.topic}/${subArr[0]}/${val}`.replaceAll(" ","_")}
					/>;
				})}
			</section>
		})}
	</main>;
}

const StyledP = (props: {text: string, link: string}) =>{
	var pChild;
	if(props.text.slice(-11,) !== "incomplete)")
		pChild = <Link href={`./${props.link}`} dangerouslySetInnerHTML={{ __html: props.text }}></Link>;
	else pChild = <span dangerouslySetInnerHTML={{ __html: props.text }}></span>;
	
	return <p className={`${textMainServer.className} text-zinc-500 mb-1 ${styles2.article}`}>{pChild}</p>;
}