"use client";

import React, { Suspense, useState, useEffect, useRef, createRef, RefObject } from 'react';
import ImageWrapper from '../global_components/ImageWrapper';
import styles from "./design2.module.scss";
import { logoFont2, printFont2, headingFont } from '../infoStore/fonts';
import { IconContext } from "react-icons";
import { FaPaintbrush, FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import StyleSelectionBox from '../global_components/StyleSelectionBox';
import Link from 'next/link';
import { link } from '../infoStore/paypalLink';
import Image from 'next/image';
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';
import FormBox from '../global_components/FormBox';
import { MainTable, BelowTables } from './design2Tables';

export default function Design2(){
	const [continueEnabled, setCE] = useState(false);
	const [startBodyLoading, changeSBL] = useState(false);
	const [continueButtonClicked, changeCBC] = useState(false);

	return <>
		<HomeLoading disabledState={!continueEnabled} changeSBL={changeSBL} changeCBC={changeCBC}/>
		{startBodyLoading ? <MainPartMemo setCE={setCE} continueButtonClicked={continueButtonClicked}/> : null}
	</>;
}

const HomeLoading=(props:{
	disabledState: boolean,
	changeSBL: React.Dispatch<React.SetStateAction<boolean>>,
	changeCBC: React.Dispatch<React.SetStateAction<boolean>>
})=>{
	const wrapperH = useRef("h-screen");

	useEffect(()=>{
		document.documentElement.style.overflowY = "hidden";
		document.documentElement.classList.add("scroll2");
		document.documentElement.style.backgroundColor = "rgb(150,60,0)";
		props.changeSBL(true);
		return ()=>{
			//incase continue button not pressed
			document.documentElement.style.overflowY = "scroll"; 
			document.documentElement.classList.remove("scroll2");
		}
	},[]); // eslint-disable-line
  
	function buttonClick(){
	  document.documentElement.style.overflowY = "scroll";
	  wrapperH.current = "h-0";
	  window.scrollTo(0,-50);
	  props.changeCBC(true);
	}
  
	return <div id={styles.loading} className={'fixed top-0 flex justify-center w-full overflow-hidden z-10 bg-[#FFAA33] ' + wrapperH.current} style={{transition:"height 1s"}}>
		<div className=' grid grid-cols-2 grid-rows-2 self-center' style={{gridTemplateColumns:"auto 30px auto"}}>
			<ImageWrapper className='row-span-2 justify-self-center' alt="" src={`/link_logo_trans2.png`} w= 'w-32'/>
			<div id={styles.lineDiv} className={`row-span-2 h-full mx-3.5`}></div>
			<p className={printFont2.className + " py-2 text-lg font-bold"}>Imagine some useful<br/>info here</p>
			<button disabled={props.disabledState} onClick={buttonClick} id={styles.continue} className={headingFont.className}>{props.disabledState?"loading":"continue"}</button>
		</div>
	</div>
}

const MainPartMemo = React.memo(function MainPart(props:{
	setCE: React.Dispatch<React.SetStateAction<boolean>>,
	continueButtonClicked:boolean
}){
	return <ParallaxProvider><div style={{backgroundColor:"#FFD966",position:"relative", visibility: props.continueButtonClicked?"visible":"hidden"}}>
		<BackgroundImage continueClicked={props.continueButtonClicked}/>
		<HomeBody setConFunc={props.setCE} continueButtonClicked={props.continueButtonClicked}/>
		<Design2Footer/>
	</div></ParallaxProvider>;
});

function BackgroundImage(props:{continueClicked: boolean}){
	const parallaxRef = useParallax<HTMLDivElement>({ speed: -50 });

	useEffect(()=>{
		if(props.continueClicked) setTimeout( function(){
			if(screen.width < parseInt(styles.minDeviceWidth)){
				parallaxRef.ref.current!.style.backgroundSize = "contain";
				parallaxRef.ref.current!.style.backgroundImage = `url(/cgolSmall.gif)`;
				parallaxRef.ref.current!.style.opacity = "0";
				window.setTimeout(()=>{
					parallaxRef.ref.current!.style.transition = "opacity 1.5s linear";
					parallaxRef.ref.current!.style.opacity = "1";
				},500)
			}
			else parallaxRef.ref.current!.style.backgroundImage = `url(/cgol${Math.floor(Math.random() * 3) + 1}.gif)`;
		}, 1000);
	});

	return <div id={styles.backgroundImage}>
		<div ref={parallaxRef.ref}></div>
	</div>;
}

function HomeBody(props:{setConFunc: React.Dispatch<React.SetStateAction<boolean>>, continueButtonClicked:boolean}){

	useEffect(()=>{
		var ads = document.getElementsByClassName('adsbygoogle').length;
		for (var i = 0; i < ads; i++) {
			try {
				//@ts-ignore
				(window.adsbygoogle = window.adsbygoogle || []).push({});
			} catch (e) {}
		}
		if (!props.continueButtonClicked) props.setConFunc(true);
	}) // eslint-disable-line no-use-before-define

	let belowTableType: "desktop" | "mobile" = screen.width > parseInt(styles.minDeviceWidth) ? "desktop" : "mobile";

	return <>
		<HeaderEl continueButtonClicked={props.continueButtonClicked}/>
		<SearchEl/>
		<main>
			<MainTable/>
			{/*@ts-ignore*/}
			<div align="center" style={{marginTop:"20px", marginBottom:"20px"}}><ins
				className="adsbygoogle"
				id={styles.adId}
				data-ad-client="ca-pub-4860967711062471"
				data-ad-slot="1515076236"
				data-ad-format="auto"
				data-full-width-responsive="true"
			></ins></div>
			<BelowTables type={belowTableType}/>
		</main>
	</>;
}

function HeaderEl(props:{continueButtonClicked:boolean}){
	const [showDB, changeSDB] = useState(false);
	const iconResponsiveStyle = screen.width > parseInt(styles.minDeviceWidth)?
	{height:"64px",width:"30px",paddingTop:"14px",paddingBottom:"18px"} :
	{height:"40px",width:"20px",paddingTop:"5px",paddingBottom:"5px"};
	
	function iconClicked(){
		changeSDB(true);
	}

	let h1El = screen.width > parseInt(styles.minDeviceWidth) ?
	<h1>Welcome To <span style={{color:"#0066FF"}}>Derive</span> It<span style={{color:"#0066FF"}}>!</span></h1> :
	<h1>deriveit.net</h1>;

	return <header id={styles.headerId} className={logoFont2.className}>
		<div id={styles.mainheading}>
			{h1El}
			<IconContext.Provider value={{style:{cursor:"pointer", color: styles.brown1, ...iconResponsiveStyle}}}>
				<FaPaintbrush onClick={iconClicked} />
			</IconContext.Provider>
			<Suspense><StyleSelectionBox showDB={showDB} changeSDB={changeSDB} styleNum={2}/></Suspense>
		</div>
		{screen.width > parseInt(styles.minDeviceWidth) ? <Slideshow continueButtonClicked={props.continueButtonClicked}/>:null}
	</header>;
}

function Slideshow(props:{continueButtonClicked:boolean}){
	const slideshowRef = createRef<HTMLDivElement>();
	const curIndex = useRef(1);
	const leftTurning = useRef<null | number>(null);
	const rightTurning = useRef<null | number>(null);
	const autoTimer = useRef<null | number>(null);

	useEffect(()=>{
		if(props.continueButtonClicked){
			slideshowRef.current!.scrollTo(slideshowRef.current!.clientWidth,0);
			autoTimer.current = window.setTimeout(changeRight, 3000);
		}
	}, [props.continueButtonClicked]);  // eslint-disable-line

	function changeLeft(){
		if(leftTurning.current === null){
			if(autoTimer.current) window.clearTimeout(autoTimer.current);
			curIndex.current -= 1;
			slideshowRef.current!.style.scrollBehavior = "smooth";
			slideshowRef.current!.scrollTo(curIndex.current * slideshowRef.current!.clientWidth, 0);
			if(curIndex.current === 0){
				leftTurning.current = window.setTimeout(()=>{
					curIndex.current = 5;
					slideshowRef.current!.style.scrollBehavior = "auto";
					slideshowRef.current!.scrollTo(curIndex.current * slideshowRef.current!.clientWidth, 0);
					autoTimer.current = window.setTimeout(changeRight, 3000);
					leftTurning.current = null;
				}, 800);
			} else leftTurning.current = window.setTimeout(()=>{
				autoTimer.current = window.setTimeout(changeRight, 3000);
				leftTurning.current = null;
			}, 800);
		}
	}

	function changeRight(){
		try{
			if(rightTurning.current === null){
				if(autoTimer.current) window.clearTimeout(autoTimer.current);
				curIndex.current = curIndex.current + 1;
				slideshowRef.current!.style.scrollBehavior = "smooth";
				slideshowRef.current!.scrollTo(curIndex.current * slideshowRef.current!.clientWidth, 0);
				if(curIndex.current === 6){
					rightTurning.current = window.setTimeout(()=>{
						curIndex.current = 1;
						slideshowRef.current!.style.scrollBehavior = "auto";
						slideshowRef.current!.scrollTo(slideshowRef.current!.clientWidth, 0);
						autoTimer.current = window.setTimeout(changeRight, 3000);
						rightTurning.current = null;
					}, 800);
				} else rightTurning.current = window.setTimeout(()=>{
					autoTimer.current = window.setTimeout(changeRight, 3000);
					rightTurning.current = null;
				}, 800);
			}
		}
		catch{}
	}

	return <>
		<div className={styles.changeSlide} id={styles.prevSlide} onClick={changeLeft}>
			<IconContext.Provider value={{style:{paddingLeft:"20px"}}}><FaAngleLeft/></IconContext.Provider>
		</div>
		<div id={styles.slideshow} ref={slideshowRef}>
			<Link href={"/geometry/Conic_Sections/the_equivalence_of_the_focus-directrix_definition_and_the_conic_section_definition_of_a_parabola"}><ImageWrapper w='w-full' src='/D2SlideshowPics/slideshow5.png'/></Link>
			<Link href={"/astronomy/history/the_geocentric_view"}><ImageWrapper w='w-full' src='/D2SlideshowPics/slideshow1.png'/></Link>
			<Link href={"/astronomy/history/heliocentric"}><ImageWrapper w='w-full' src='/D2SlideshowPics/slideshow2.png'/></Link>
			<Link href={"/discrete_mathematics/factorials_permutations_and_combinations/factorials_and_permutations"}><ImageWrapper w='w-full' src='/D2SlideshowPics/slideshow3.png'/></Link>
			<Link href={"/chemistry/history/phlogiston_theory"}><ImageWrapper w='w-full' src='/D2SlideshowPics/slideshow4.png'/></Link>
			<Link href={"/geometry/Conic_Sections/the_equivalence_of_the_focus-directrix_definition_and_the_conic_section_definition_of_a_parabola"}><ImageWrapper w='w-full' src='/D2SlideshowPics/slideshow5.png'/></Link>
			<Link href={"/astronomy/history/the_geocentric_view"}><ImageWrapper w='w-full' src='/D2SlideshowPics/slideshow1.png'/></Link>
		</div>
		<div className={styles.changeSlide} id={styles.nextSlide} onClick={changeRight}>
			<IconContext.Provider value={{style:{paddingRight:"20px"}}}><FaAngleRight/></IconContext.Provider>
		</div>
	</>;
}

//For future reading, more sure to add a feature where inputting the 5th letter stops the searchDatabase function when the 4th letter was pressed.
function SearchEl(){
	const [displayVal, changeDisplay] = useState("none");
	const timerRef: RefObject<null|number> = useRef(null);
	const inputRef: RefObject<HTMLInputElement | null> = createRef<HTMLInputElement>();
	const linksArr = useRef([""]);
	const topicsArr = useRef([""]);
	const minLetters = 4;

	async function searchDatabase(searchText: string){
		linksArr.current = [];
		topicsArr.current = [];
		changeDisplay("block");
	}

	return <div id={styles.searchDiv} className={printFont2.className}>
		<div id={styles.typingArea}>
			<input
				onKeyUp={()=>{
					let textVal = inputRef.current?.value!;
					if(textVal.length >= minLetters) searchDatabase(textVal);
					else if (displayVal == "block") changeDisplay("none");
				}}
				ref={inputRef}
				autoComplete="off"
				id={styles.searchBox}
				type="text"
				placeholder={"Search..."}
			/>
			<div id={styles.pageOptions} style={{display: displayVal}} onMouseLeave={()=>{
				timerRef.current = window.setTimeout(()=>{
					changeDisplay("none");
				}, 500);
			}} onMouseEnter={()=>{if(timerRef.current) window.clearTimeout(timerRef.current);}}>
				{
					linksArr.current.length ?
					linksArr.current.map((elem, i)=>{
						return <div key={i} className={styles.poptions}>
								<Link href={linksArr.current[i]} className='hover:no-underline' dangerouslySetInnerHTML={{__html: topicsArr.current[i]}}></Link> 
						</div>
					}) :
					<div className={styles.poptions} style={{cursor:"default"}}>Sorry, no article were found.</div>
				}
			</div>
		</div>
	</div>;
	
}

function Design2Footer() {
  const [formType, changeFT] = useState(-1);

  return <footer className={`w-full py-5 ${printFont2.className}`} id={styles.footerId}>
    <div id={styles.footerGrid}>
      <p id={styles.footerP}>
				If you find a bug in this website or want to report an error, <ClickButton type={0} func={changeFT} />.<br/>
				If there are any equations for which you want proof for, <ClickButton type={1} func={changeFT} />.<br/>
				For any suggestion and ideas, <ClickButton type={2} func={changeFT} />.
      </p>
      <Link id={styles.paypalLink} href={link} target="_blank">
				<p className={" text-center font-bold text-xs "}>Want To Donate?</p>
				<Image alt="" src={"/payPal.png"} width={124} height={33} id={styles.paypalImage}/>
      </Link>
      <Suspense fallback={<></>}><FormBox type={formType} styleNum={2}/></Suspense>
    </div>
  </footer>;
}

function ClickButton(props: {type: number, func: React.Dispatch<React.SetStateAction<number>>}){
  return <button onClick={()=>{props.func(props.type)}} className=' hover:underline outline-none' style={{color:"rgb(204, 51, 0)"}}>click here</button>
}