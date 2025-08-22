"use client"

import Link from 'next/link';
import ImageWrapper from './ImageWrapper';
import { printFont, cursiveMain } from '../infoStore/fonts';
import FormBox from './FormBox';
import { Suspense, useEffect, useState } from 'react';
import styles from "../mainStyles/design1.module.scss";
import { link } from '../infoStore/donationLink';

const footerPStyle = {
	fontSize: "26px",
	color: "#ddd",
	lineHeight: "30px"
}

const footerIdStyle = {
	width:"100%",
	display:"grid",
	borderTop: "#bda27e solid 10px",
	boxShadow: "0px 0px 0px 2px #c2a782, 0px 0px 0px 4px #a58e6f, 0px 1px 8px -1px black inset",
	backgroundColor:"#333",
	paddingBottom:"30px"
}

export default function FooterComp(){
	const [formType, changeFT] = useState(-1);
	const [firstRender, changeFR] = useState(true);

	useEffect(()=>{
		changeFR(false);
	},[]);
	
	if (firstRender) return null;
	else if (screen.width > parseInt(styles.minDeviceWidth)) 
		return <footer style={{gridTemplateColumns:"15% 65% 20%", paddingTop:"25px", ...footerIdStyle}}>
			<Link href={"/"} aria-label='Go to home page'>
				<ImageWrapper mw="max-w-[80%]" h="h-full" w="w-3/4" src="/logoPics/link_logo_short_1.png" alt="" className="flex justify-center items-center "/>
			</Link>
			<p className={cursiveMain.className} style={{padding: "0px", ...footerPStyle}}>
				If you find a bug in this website or want to report an error, <ClickButton type={0} func={changeFT} /><br/>
				If there are any equations for which you want proof for, <ClickButton type={1} func={changeFT} /><br/>
				For any suggestion and ideas, <ClickButton type={2} func={changeFT} />
			</p>
			<Link href={link} target="_blank" className='flex flex-col justify-center items-center bg-gray-50 mx-10 border-black border-2 outline-1 outline-white outline h-min py-3 hover:no-underline' aria-label='Want to donate?'>
				<p className={" text-center text-lg pb-2 font-bold "+printFont.className}>Want To Donate?</p>
				<ImageWrapper mw="max-w-[70%]" h="h-6" src="/kofi_logo.png" alt="" />
			</Link>
			{/*@ts-ignore */}
			<Suspense fallback={<></>}><FormBox type={formType} styleNum={1}/></Suspense>
		</footer>;
	else
		return <footer style={{gridTemplateColumns:"50% 50%", ...footerIdStyle}}>
			<p className={cursiveMain.className} style={{...footerPStyle, gridColumnStart: "span 2", padding:"20px"}}>
				If you find a bug in this website or want to report an error, <ClickButton type={0} func={changeFT} /><br/>
				If there are any equations for which you want proof for, <ClickButton type={1} func={changeFT} /><br/>
				For any suggestion and ideas, <ClickButton type={2} func={changeFT} />
			</p>
			<Link href={"/"}>
				<ImageWrapper mw="max-w-[100px]" h="h-full" w="w-1/2" src="/logoPics/link_logo_short_1.png" alt=""  className="flex justify-center items-center "/>
			</Link>
			<Link href={link} target="_blank" className='flex flex-col justify-center items-center bg-gray-50 mx-10 border-black border-2 outline-1 outline-white outline h-min py-2 hover:no-underline'>
				<p className={" text-center text-lg pb-2 font-bold "+printFont.className}>Want To Donate?</p>
				<ImageWrapper mw="max-w-[70%]" h="h-6" src="/kofi_logo.png" alt="" />
			</Link>
			{/*@ts-ignore */}
			<Suspense fallback={<></>}><FormBox type={formType} styleNum={1}/></Suspense>
		</footer>;
}

function ClickButton(props: {type: number, func: (arg0: number) => void}){
	return <button onClick={()=>{props.func(props.type)}} className=' hover:underline outline-none'>click here</button>
}