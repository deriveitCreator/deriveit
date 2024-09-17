"use client"

import React, { useState, useRef, useEffect } from 'react';
import styles from "../mainStyles/design1.module.scss";
import { IconContext } from "react-icons";
import { chalkWriting } from '../infoStore/fonts';
import { FaSquare, FaRegSquare, FaRightLong, FaLeftLong } from "react-icons/fa6";
import ImageWrapper from './ImageWrapper';
import Link from 'next/link';

const blackboardContent = [
	<div key={0} style={{display:"grid", gridTemplateColumns:"auto 40%", height: "100%",alignItems:"center"}}>
		<p className=' -rotate-3 origin-center text-center mx-1'>
			Learn about the <u>geocentric model</u>,
			<br/>&emsp;what almost everyone believed in
			<br/>&emsp;&emsp;until the European Renaissance
		</p>
		<div className='flex flex-col justify-evenly h-full'>
			<ImageWrapper native w='w-1/2' src="/blackBoardImgs/1.PNG" bor="border-4 border-black" alt="" className="flex justify-center max-w-xs"/>
			<ImageWrapper native w='w-1/2' src="/blackBoardImgs/2.PNG" bor="border-4 border-black" alt="" className="flex justify-center max-w-xs"/>
		</div>
	</div>,
	<div key={1} style={{display:"grid", gridTemplateColumns:"auto 30%", height: "100%",alignItems:"center"}}>
		<p className=' -rotate-3 origin-center text-center mx-1'>
			Learn about Nicolaus Copernicus and his book,
			<br/>&emsp;<u>De revolutionibus orbium coelestium</u>.
		</p>
		<ImageWrapper src="/blackBoardImgs/d.PNG" bor="border-4 border-black" alt="" className="flex items-center w-4/5 "/>
	</div>,
	<div key={2} style={{display:"grid", gridTemplateColumns:"auto 33%", height: "100%",alignItems:"center"}}>
		<p className=' text-center mx-1'>Learn about <u>permutations</u><br/>(the number of different ways<br/>&emsp;we can make a group of k elements<br/>&emsp;&emsp;from a larger group of n elements).</p>
		<ImageWrapper src="/blackBoardImgs/formula.png" bor="border-4 border-black" alt="" className="flex items-center w-4/5 bg-white"/>
	</div>,
	<div key={3} style={{display:"grid", gridTemplateColumns:"auto 40%", height: "100%",alignItems:"center"}}>
		<p className=' -rotate-3 origin-center text-center mx-1'>
			Learn about the <u>phlogiston theory</u>,<br/>&emsp;a superseded scientific theory
		</p>
		<ImageWrapper src="/blackBoardImgs/metal.PNG" bor="border-4 border-black" alt="" className="flex items-center w-4/5 bg-white"/>
	</div>,
	<div key={4} style={{display:"grid", gridTemplateColumns:"auto 40%", height: "100%",alignItems:"center"}}>
		<p className=' -rotate-3 origin-center text-center mx-1'>
			The parabola has a <u>conic section definition</u>
			<br/>&emsp;and a <u>focus-directrix definition</u>...
			<br/>&emsp;&emsp;How are they equivalent?
		</p>
		<ImageWrapper src="/blackBoardImgs/parabola.png" alt="" className="flex items-center w-4/5 bg-white border-4 border-black"/>
	</div>
]

const blackBoardLinks = [
	"/astronomy/history/the_geocentric_view",
	"/astronomy/history/heliocentric",
	"/discrete_mathematics/factorials_permutations_and_combinations/factorials_and_permutations",
	"/chemistry/history/phlogiston_theory",
	"/geometry/Conic_Sections/the_equivalence_of_the_focus-directrix_definition_and_the_conic_section_definition_of_a_parabola",
]

export function Blackboard(props:{startSS:boolean,disFunc:React.Dispatch<{type:string;payload?: string|undefined}>}){
	const [selectedIcon, setSI] = useState(0);
	const [blackBoardOp, setBBOP] = useState("opacity-100");
	const timeRef: React.MutableRefObject<any|null> = useRef(null);

	useEffect(()=>{
		if(props.startSS){
			setBBOP("opacity-100");
			timeRef.current = window.setTimeout(()=>{
				setBBOP("opacity-0");
				let newI = (selectedIcon+1)%5;
				changeBB(newI);
			}, 4000);
		}
	},[selectedIcon,props.startSS]);

	function quickUpdate(newSI: number){
		setBBOP("opacity-0");
		window.clearTimeout(timeRef.current);
		if(newSI < 0) newSI = 4;
		changeBB(newSI);
	}

	function changeBB(newSI: number){
		window.setTimeout(()=>{
			setSI(newSI);
		},200);
	}

	return <div id={styles.blackboard} className={chalkWriting.className + " grid px-2"}>
		<div id={styles.content}>
			<div className=' cursor-pointer h-full flex items-center select-none' onClick={()=>quickUpdate(selectedIcon-1)}>
				<IconContext.Provider value={{style:{height:"20px"}}}><FaLeftLong /></IconContext.Provider>
			</div>
			<div className={' h-full '+ blackBoardOp} style={{transition:"opacity 0.2s linear"}}>
				<Link href={blackBoardLinks[selectedIcon]}>{blackboardContent[selectedIcon]}</Link>
			</div>
			<div className=' cursor-pointer h-full flex items-center select-none' onClick={()=>quickUpdate((selectedIcon+1)%5)}>
				<IconContext.Provider value={{style:{height:"20px"}}}><FaRightLong /></IconContext.Provider>
			</div>
		</div>
		<div className=' flex flex-row items-center justify-center'>{Array.from(Array(blackboardContent.length).keys()).map(i=>{
			if(i === selectedIcon) return <IconContext.Provider key={i} value={{style:{margin:"10px",height: "20px"}}}><FaRegSquare /></IconContext.Provider>
			return <IconContext.Provider key={i} value={{style:{margin:"10px",height: "20px"}}}><FaSquare /></IconContext.Provider>
		})}</div>
	</div>;
}