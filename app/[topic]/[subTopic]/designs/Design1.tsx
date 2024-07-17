"use client"

import React, { useEffect, useState } from 'react';
import { cursiveMain, textMain } from "@/app/infoStore/fonts";
import Link from "next/link";
import styles from "./variables.module.scss";

export default function Design1(props: {topic: string, subTopic: [string, string[]]}){  
	const [curOp,setOp] = useState(0);
	const responsiveH2Style = (screen.width > parseInt(styles.minDeviceWidth)) ?
	"text-4xl px-8 capitalize mt-3" :
	"text-3xl px-3 capitalize mt-3" ;
	const responsivePStyle = (screen.width > parseInt(styles.minDeviceWidth)) ?
	"text-zinc-500 text-2xl px-16 mb-1" :
	"text-zinc-500 text-xl px-7 mb-1" ;

	useEffect(()=>{
		window.setTimeout(()=>setOp(1),500);
		document.documentElement.style.overflowY = "scroll";
	},[]);

	let curTopic = props.subTopic;
	if(curTopic[0] === "error") return <section>
		<h2 className={`${cursiveMain.className} ${responsiveH2Style}`}>Error</h2>
		<p className={`${textMain.className} ${responsivePStyle}`}>There is no content on this page</p>
	</section>
	else return <main style={{transition:"opacity 0.5s linear",marginBottom:"40px",opacity: curOp}}>
		<section>
			<h2 className={`${cursiveMain.className} ${responsiveH2Style}`}>
				{curTopic[0].replaceAll("_"," ")}
			</h2>
			{(curTopic[1]).map((val:string,i: number)=> {
				if(val.includes("%")) return <StyledP
					key={i}
					text={val.substring(0,val.lastIndexOf('%')).replaceAll("_"," ")}
					link={`${curTopic[0]}/${val.substring(val.lastIndexOf('%')+1,val.length)}`}
					styles={responsivePStyle}
				/>;
				else return <StyledP
					key={i}
					text={val.replaceAll("_"," ")}
					link={`${curTopic[0]}/${val}`}
					styles={responsivePStyle}
				/>;
			})}
		</section>
	</main>;
}

const StyledP = (props: {text: string, link: string, styles: string}) =>{
	return <p className={`${textMain.className} ${props.styles}`}>
		{
			(props.text.slice(-11,) !== "incomplete)") ?
			<Link href={`./${props.link}`} dangerouslySetInnerHTML={{ __html: props.text }}></Link> :
			<span dangerouslySetInnerHTML={{ __html: props.text }}></span>
		}
	</p>
}