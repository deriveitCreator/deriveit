"use client"

import React, { Suspense, useState, useEffect } from 'react';
import { headingFont, mainTextFont } from "@/app/infoStore/fonts";
import Link from "next/link";
import styles from "./variables.module.scss";
import { styleObjectType } from '../clientPart';
import FormBox from '@/app/components/FormBox';
import ImageWrapper from '@/app/components/ImageWrapper';
import { link } from "../../infoStore/paypalLink";
import { printFont2 } from "@/app/infoStore/fonts";

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

function FooterEl(props:{borderColor:string, textColor: string, headerBgColor: string}){
	const [formType, changeType] = useState(-1);
		
	return <div className={printFont2.className+' font-bold'} style={{color:props.textColor}}>
		<footer>
			<hr style={{backgroundColor:props.borderColor, height:"4px", border:"none"}}/>
			<div style={{display:"grid",gridTemplateColumns:"140px auto",margin:"0px 15px 0px 20px"}}>
				<Link href="/" >
						<ImageWrapper className=' mx-4 my-4 ' src="/link_logo_trans2.png" alt="" />
				</Link>
				<div style={{border:`solid ${props.borderColor} 3px`, marginTop:"10px", backgroundColor: props.headerBgColor, display:"flex",flexDirection:"row",justifyContent:"space-between", height:"min-content"}}>
					<p style={{paddingLeft:"10px"}}>
							If you find a bug in this website or want to report an error, <ClickButton type={0} func={changeType} /><br/>
							If there are any equations for which you want proof for, <ClickButton type={1} func={changeType} /><br/>
							For any suggestion and ideas, <ClickButton type={2} func={changeType} />
					</p>
					<Link href={link} style={{display:"flex",flexDirection:"column",justifyContent:"center",padding:"0px 25px"}} target="_blank">
							<p className={" text-center font-bold text-sm "}>Want To Donate?</p>
							<ImageWrapper className='flex justify-center ' mw="max-w-[70%]" h="h-6" src="/payPal.png" alt="" />
					</Link>
				</div>
				<Suspense fallback={<></>}><FormBox type={formType}/></Suspense>
			</div>
		</footer>
	</div>
}

function ClickButton(props: {type: number, func: React.Dispatch<React.SetStateAction<number>>}){
  return <button onClick={()=>{props.func(props.type)}} className=' hover:underline outline-none'>click here</button>
}