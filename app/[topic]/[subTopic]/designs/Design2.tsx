"use client"

import React, { Suspense, useEffect, useRef, useState } from 'react';
import { headingFont, mainTextFont, printFont2 } from "@/app/infoStore/fonts";
import { link } from '@/app/infoStore/paypalLink';
import Link from "next/link";
import FormBox from '@/app/components/FormBox';
import ImageWrapper from '@/app/components/ImageWrapper';
import styles from "./variables.module.scss";

export default function Style2(props: {topic: string, subTopic: [string,string[]], styleObject:{
    name: string;
    headerBgColor: string;
    bgColor: string;
    footerColor: string;
    borderColor: string;
}}){ 
	const responsiveH2Style = (screen.width > parseInt(styles.minDeviceWidth)) ?
	"font-bold text-4xl mx-12 capitalize pt-10" :
	"font-bold text-4xl mx-4 capitalize pt-10" ;

	useEffect(()=>{
			document.documentElement.style.overflowY = "auto";
			document.documentElement.style.backgroundColor = props.styleObject.headerBgColor;
	},[]);

	let headerBgColor = props.styleObject.headerBgColor;
	let footerColor = props.styleObject.footerColor;
	let borderColor = props.styleObject.borderColor;
	let curTopic = props.subTopic;

	if(curTopic[0] === "error") return <div>
			<main style={{transition:"opacity 0.5s linear",paddingBottom:"40px"}}>
					<h2 className={`${headingFont.className} ${responsiveH2Style}`} style={{color: borderColor!}}>Error</h2>
					<p className={`${mainTextFont.className} text-[28px] leading-[32px] mx-20 mt-5 `} style={{color: headerBgColor!, letterSpacing:"1px"}}>There is no content on this page</p>
			</main>
			<FooterEl borderColor={borderColor!} textColor={footerColor!} headerBgColor={headerBgColor!}/>
	</div>
	else return <div>
			<main style={{transition:"opacity 0.5s linear",paddingBottom:"40px"}}>
				<h2 className={`${headingFont.className} ${responsiveH2Style}`} style={{color: borderColor}}>{curTopic[0].replaceAll("_"," ")}</h2>
				{(curTopic[1]).map((val:string,i: number)=> {
					if(val.includes("%")){ return <StyledP
						key={i}
						textColor={headerBgColor}
						text={val.substring(0,val.lastIndexOf('%')).replaceAll("_"," ")}
						link={`${curTopic[0]}/${val.substring(val.lastIndexOf('%')+1,val.length)}`.replaceAll(" ","_")}
					/>;
					}else return <StyledP
						key={i}
						textColor={headerBgColor}
						text={val.replaceAll("_"," ")}
						link={`${curTopic[0]}/${val}`.replaceAll(" ","_")}
					/>;
				})}
			</main>
			<FooterEl borderColor={borderColor!} textColor={footerColor!} headerBgColor={headerBgColor!}/>
	</div>
}

const StyledP = (props: {text: string, link: string, textColor: string}) =>{
	const responsivePStyle = (screen.width > parseInt(styles.minDeviceWidth)) ?
	"text-[28px] leading-[32px] mx-20 mt-5" :
	"text-2xl leading-[26px] mx-6 mt-5" ;

	return <p className={`${mainTextFont.className} ${responsivePStyle} `} style={{color: props.textColor, letterSpacing:"1px"}}>
		{(props.text.slice(-11,) !== "incomplete)") ? <Link href={`./${props.link}`} dangerouslySetInnerHTML={{ __html: props.text }}></Link> : <span dangerouslySetInnerHTML={{ __html: props.text }}></span>}
	</p>;
}

function FooterEl(props:{borderColor:string, textColor: string, headerBgColor: string}){
	const [footerState, changeFS] = useState(false);
	const formType = useRef(0);
		
	function dispatch(arg0: {type: string}){
			arg0.type==="SHOW_FORM_BOX"? changeFS(true):changeFS(false);
	}

	function showForm(type: number){
			formType.current = type;
			dispatch({type: "SHOW_FORM_BOX"});
	}

	return <div className={printFont2.className+' font-bold'} style={{color:props.textColor}}>
		<footer>
		{screen.width > parseInt(styles.minDeviceWidth) ?
			<>
				<hr style={{backgroundColor:props.borderColor, height:"4px", border:"none"}}/>
				<div style={{display:"grid",gridTemplateColumns:"140px auto",margin:"0px 15px 0px 20px"}}>
					<Link href="/" >
							<ImageWrapper className=' mx-4 my-4 ' src="/link_logo_trans2.png" alt="" />
					</Link>
					<div style={{border:`solid ${props.borderColor} 3px`, marginTop:"10px", backgroundColor: props.headerBgColor, display:"flex",flexDirection:"row",justifyContent:"space-between", height:"min-content"}}>
						<p style={{paddingLeft:"10px"}}>
								If you find a bug in this website or want to report an error, <ClickButton type={0} func={showForm} /><br/>
								If there are any equations for which you want proof for, <ClickButton type={1} func={showForm} /><br/>
								For any suggestion and ideas, <ClickButton type={2} func={showForm} />
						</p>
						<Link href={link} style={{display:"flex",flexDirection:"column",justifyContent:"center",padding:"0px 25px"}} target="_blank">
								<p className={" text-center font-bold text-sm "}>Want To Donate?</p>
								<ImageWrapper className='flex justify-center ' mw="max-w-[70%]" h="h-6" src="/payPal.png" alt="" />
						</Link>
					</div>
					<Suspense fallback={<></>}><FormBox showFB={footerState} reducerDis={dispatch} type={formType.current}/></Suspense>
				</div>
			</>:
			<div style={{ borderTop:`solid ${props.borderColor} 3px`,marginTop:"10px",letterSpacing:"-1px"}}>
				<div style={{backgroundColor: props.headerBgColor, height:"min-content"}}>
					<p style={{paddingLeft:"10px", paddingBottom:"4px"}}>
							If you find a bug in this website or want to report an error, <ClickButton type={0} func={showForm} /><br/>
							If there are any equations for which you want proof for, <ClickButton type={1} func={showForm} /><br/>
							For any suggestion and ideas, <ClickButton type={2} func={showForm} />
					</p>
					<div style={{display:"grid",gridTemplateColumns:"100px 150px",justifyContent:"space-evenly", marginBottom:"50px"}}>
						<Link href="/" style={{backgroundColor:" #Fa3", border:"solid 3px #630"}}>
								<ImageWrapper className=' mx-1 my-1 ' src="/link_logo_trans2.png" alt="" />
						</Link>
						<Link href={link} style={{display:"flex",flexDirection:"column",justifyContent:"center"}} target="_blank">
							<p className={" text-center font-bold text-sm "}>Want To Donate?</p>
							<ImageWrapper className='flex justify-center ' mw="max-w-[70%]" h="h-6" src="/payPal.png" alt="" />
						</Link>
					</div>
				</div>
				<Suspense fallback={<></>}><FormBox showFB={footerState} reducerDis={dispatch} type={formType.current}/></Suspense>
			</div>
		}
		</footer>
	</div>
}

function ClickButton(props: {type: number, func: (arg0: number) => void}){
    return <button onClick={()=>{props.func(props.type)}} className=' hover:underline outline-none'>click here</button>
}