"use client"

import React, { useEffect } from 'react';
import { headingFont, mainTextFont } from "@/app/infoStore/fonts";
import Link from "next/link";
import styles from "./variables.module.scss";
import { styleObjectType } from '../clientPart';
import FooterEl from "./Style2Footer";

export default function Style2(props: {
	topic: string,
	topicsInfoState: Array<[string,string[]]>,
	styleObject: styleObjectType
}){

	useEffect(()=>{
		document.documentElement.style.overflowY = "auto";
		document.documentElement.style.backgroundColor = props.styleObject.headerBgColor;

		return () => {
			document.documentElement.style.backgroundColor = "white";
		}
	},[]); // eslint-disable-line


	const responsiveH2Style = (screen.width > parseInt(styles.minDeviceWidth)) ?
	"font-bold text-4xl mx-12 capitalize pt-10" :
	"font-bold text-4xl mx-4 capitalize pt-10" ;

	let headerBgColor = props.styleObject.headerBgColor;
	let footerColor = props.styleObject.footerColor;
	let borderColor = props.styleObject.borderColor;
	return <div>
		<main style={{transition:"opacity 0.5s linear",paddingBottom:"40px"}}> {
			props.topicsInfoState.map((subArr: [string, string[]], i:number) => {
				return <section key={i}>
					<h2 className={`${headingFont.className} ${responsiveH2Style}`} style={{color: borderColor}}>
						{subArr[0].replaceAll("_"," ")}
					</h2>
					{(subArr[1]).map((val:string,i: number)=> {
						if(val.includes("%")) return <StyledP
							key={i}
							textColor={headerBgColor}
							text={val.substring(0,val.lastIndexOf('%')).replaceAll("_"," ")}
							link={`${props.topic}/${subArr[0]}/${(val.substring(val.lastIndexOf('%')+1,val.length))}`}
						/>;
						else return <StyledP
							key={i}
							textColor={headerBgColor}
							text={val.replaceAll("_"," ")}
							link={`${props.topic}/${subArr[0]}/${val.replaceAll(" ","_")}`}
						/>;
					})}
				</section>
			})
		} </main>
		<FooterEl borderColor={borderColor!} textColor={footerColor!} headerBgColor={headerBgColor!}/>
	</div>;
}

const StyledP = (props: {text: string, link: string, textColor: string}) =>{
	const responsivePStyle = (screen.width > parseInt(styles.minDeviceWidth)) ?
	"text-[28px] leading-[32px] mx-20 mt-5" :
	"text-2xl leading-[26px] mx-6 mt-5" ;

	var pContent;
	if (props.text.slice(-11,) === "incomplete)")
		pContent = <span dangerouslySetInnerHTML={{ __html: props.text }}></span>;
	else pContent = <Link href={`./${props.link}`} dangerouslySetInnerHTML={{ __html: props.text }}></Link>;

	return <p className={`${mainTextFont.className} ${responsivePStyle} `} style={{color: props.textColor, letterSpacing:"1px"}}>
		{pContent}
	</p>;
}