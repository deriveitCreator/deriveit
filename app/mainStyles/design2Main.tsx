"use client";

import React, { Suspense, useState, useEffect, useRef, MutableRefObject, createRef, RefObject } from 'react';
import ImageWrapper from '../components/ImageWrapper';
import styles from "./design2.module.scss";
import { logoFont2, printFont2, headingFont, mainTextFont } from '../infoStore/fonts';
import { IconContext } from "react-icons";
import { FaPaintbrush, FaAngleRight, FaAngleLeft, FaCaretDown } from "react-icons/fa6";
import StyleSelectionBox from '../components/StyleSelectionBox';
import Link from 'next/link';
import Design2Footer from '../footerStyles/design2Footer';
import { allTopics, getRecentlyAdded, getRecentlyEdited, getTopicLinks } from '../infoStore/topicsInfo';
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';

export default function Design2(){
    const [continueEnabled, setCE] = useState(false);
    const [startBodyLoading, changeSBL] = useState(false);
    const [continueButtonClicked, changeCBC] = useState(false);

    return <>
        <HomeLoading disabledState={!continueEnabled} changeSBL={changeSBL} changeCBC={changeCBC}/>
        {startBodyLoading ? <MainPartMemo setCE={setCE} continueButtonClicked={continueButtonClicked}/> : null}
    </>;
}

const HomeLoading=(props:{disabledState:boolean, changeSBL: React.Dispatch<React.SetStateAction<boolean>>, changeCBC: React.Dispatch<React.SetStateAction<boolean>>})=>{
    const wrapperH = useRef("h-screen");

    useEffect(()=>{
        var lastSavedColor: string = document.documentElement.style.backgroundColor;
        document.documentElement.style.overflowY = "hidden";
        document.documentElement.style.backgroundColor = "rgb(150,60,00)";
        document.documentElement.classList.add("scroll2");
        props.changeSBL(true);
        return ()=>{
            document.documentElement.style.backgroundColor = lastSavedColor;
            document.documentElement.classList.remove("scroll2");
        }
    },[])
  
    function buttonClick(){
      document.documentElement.style.overflowY = "scroll";
      wrapperH.current = "h-0";
      window.scrollTo(0,-50);
      props.changeCBC(true);
    }
  
    return (
      <div id={styles.loading} className={'fixed top-0 flex justify-center w-full overflow-hidden z-10 bg-[#FFAA33] ' + wrapperH.current} style={{transition:"height 1s"}}>
        <div className=' grid grid-cols-2 grid-rows-2 self-center' style={{gridTemplateColumns:"auto 30px auto"}}>
          <ImageWrapper className='row-span-2 justify-self-center' alt="" src={`/link_logo_trans2.png`} w= 'w-32'/>
          <div id={styles.lineDiv} className={`row-span-2 h-full mx-3.5`}></div>
          <p className={printFont2.className + " py-2 text-lg font-bold"}>Imagine some useful<br/>info here</p>
          <button disabled={props.disabledState} onClick={buttonClick} id={styles.continue} className={headingFont.className}>{props.disabledState?"loading":"continue"}</button>
        </div>
      </div>
    )
}

const MainPartMemo = React.memo(function MainPart(props:{
    setCE: React.Dispatch<React.SetStateAction<boolean>>,
    continueButtonClicked:boolean
}){
    return <ParallaxProvider><div style={{backgroundColor:"#FFD966",position:"relative", visibility: props.continueButtonClicked?"visible":"hidden"}}>
        <BackgroundImage continueClicked={props.continueButtonClicked}/>
        <HomeBody setConFunc={props.setCE} continueButtonClicked={props.continueButtonClicked}/>
        <Design2Footer id={styles.footerId}/>
    </div></ParallaxProvider>;
});

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
            <BelowTables recentlyAdded={true}/>
            <BelowTables recentlyAdded={false}/>
        </main>
    </>;
}

function MainTable(){
	return <section><table id={styles.mainTable} className={logoFont2.className}>
		{screen.width > parseInt(styles.minDeviceWidth) ? <thead><tr><th>Choose Your Topic:</th></tr></thead> : null}
		{/*When making images in powerpoint, the width should be 646px and height should be 334px*/}
		<tbody>
			{allTopics.map((elem,i)=>{
				if(i%2 === 0){
					const name1 = allTopics[i].name.toLowerCase().replaceAll(" ","_");
					const name2 = allTopics[i+1].name.toLowerCase().replaceAll(" ","_");
					return <tr key={i}><td>
						<div className=' w-1/2 inline-block'><Link href={`/${name1}`}>
							<ImageWrapper alt={name1} src={`/topicsPics/${name1}.png`}/>
						</Link></div>
						{   
							name2==="error"?
							<div className=' w-1/2 inline-block'>
								<ImageWrapper className='inline-block' alt={name2} bor={styles.uc} src={`/topicsPics/uncategorized.png`}/>
							</div>:
							<div className=' w-1/2 inline-block '><Link href={`/${name2}`}>
								<ImageWrapper alt={name2} src={`/topicsPics/${name2}.png`}/>
							</Link></div>
						}
					</td></tr>;
				}
				else return null;
			})}
		</tbody>
	</table></section>
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
            <IconContext.Provider value={{style:{cursor:"pointer", color: styles.brown1, ...iconResponsiveStyle}}}><FaPaintbrush onClick={iconClicked} /></IconContext.Provider>
            <Suspense><StyleSelectionBox showDB={showDB} changeSDB={changeSDB}/></Suspense>
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
    }, [props.continueButtonClicked]);

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

function SearchEl(){
    const [display, changeDisplay] = useState({searchOpDis:"none", optionsDis:"none"});
    const searchButtonText = useRef("Search Topic");
    const timerRef: MutableRefObject<null|number> = useRef(null);
    const optionsArr = useRef([{text:"", link:""}]);

    return <div id={styles.searchDiv} className={printFont2.className} onMouseLeave={()=>{
        timerRef.current = window.setTimeout(()=>{
            searchButtonText.current = "Search Topic";
            changeDisplay({searchOpDis:"none", optionsDis:"none"});
        }, 1000);
    }} onMouseEnter={()=>{if(timerRef.current) window.clearTimeout(timerRef.current);}}>
        <div id={styles.searchSelection}>
            <div id={styles.topicSelect} onClick={()=>{display.searchOpDis==="none"?changeDisplay({searchOpDis:"block", optionsDis:"none"}):changeDisplay({searchOpDis:"none", optionsDis:"none"});}}>
                {
                    screen.width > parseInt(styles.minDeviceWidth)?
                    <IconContext.Provider value={{style:{display:"inline",margin:"0px 12px",height:"18px"}}}>
                        <FaCaretDown />
                    </IconContext.Provider>
                    :null
                }
                <span style={{textOverflow:"ellipsis", overflow:"hidden"}} title={searchButtonText.current}>{searchButtonText.current}</span>
            </div>
            <div id={styles.searchOptions} style={{display: display.searchOpDis}}>{allTopics.map((record, i)=>{
                if (i !== allTopics.length-1) return <div onClick={()=>{
                    searchButtonText.current = record.name;
                    let combinedLinks: ({text: string, link: string})[] = [];
                    let title = record.name.toLowerCase().replaceAll(" ","_");
                    for (let [subTitle, links] of getTopicLinks(title)){
                        for(let elem of links){
                            let perPos = elem.indexOf("%");
                            if(perPos > 0) combinedLinks.push({text: elem.substring(0, perPos).replaceAll("_"," "), link: `/${title}/${subTitle.replaceAll(" ","_")}/${elem.substring(perPos)+1}`});
                            else combinedLinks.push({text: elem.replaceAll("_"," "), link: `/${title}/${subTitle.replaceAll(" ","_")}/${elem}`});
                        }
                    }
                    optionsArr.current = combinedLinks;
                    changeDisplay({searchOpDis:"none", optionsDis:"block"});
                }} key={i} style={{color: record.borderColor, backgroundColor: record.bgColor}}>{record.name}</div>
                else return null;
            })}</div>
        </div>
        <SearchOptions display={display.optionsDis} optionsArr={optionsArr.current} searchButtonText={searchButtonText.current}/>
    </div>
}

function SearchOptions(props:{display:string, optionsArr:{ text: string; link: string; }[], searchButtonText:string}){
    const [searchVal, changeSV] = useState("");
    const inputRef: RefObject<HTMLInputElement> = createRef<HTMLInputElement>();

    return <div id={styles.typingArea}>
        <input onKeyUp={()=>{changeSV(inputRef.current?.value!)}} ref={inputRef} autoComplete="off" disabled={props.searchButtonText === "Search Topic"} id={styles.searchBox} type="text" placeholder={props.searchButtonText !== "Search Topic" ?`Search ${props.searchButtonText}`:""}/>
        <div id={styles.pageOptions} style={{display: props.display}}>
            {props.optionsArr.map((elem, i)=>{
                let newSV = searchVal.replaceAll(" ","").toLowerCase();
                if(elem.text.replaceAll(" ","").toLowerCase().includes(newSV) || elem.link.replaceAll("_","").toLowerCase().includes(newSV)) return <div key={i} className={styles.poptions}><Link href={elem.link} className='hover:no-underline' dangerouslySetInnerHTML={{__html: elem.text}}></Link></div>;
            })}
        </div>
    </div>;
    
}

function BelowTables(props: {recentlyAdded: boolean}){
	
	if(screen.width > parseInt(styles.minDeviceWidth)){
		return <section><table id={styles.tableForRecent}>
			<tbody>{(props.recentlyAdded ?  getRecentlyAdded():getRecentlyEdited()).map((elem, i)=>{
				let perPos = elem.indexOf("%");
				let bgColor: string;
				let borderColor: string;
				for(let record of allTopics){
					if(record.name.replaceAll(" ","_").toLowerCase() === elem.substring(perPos+1, elem.indexOf("/"))){
						bgColor = record.bgColor;
						borderColor = record.borderColor;
						break;
					}
				}

				if(i===0) return <tr key={0}>
					<th scope='col' rowSpan={4} className={`border-4 ${logoFont2.className}`}>
						<span className=' float-left'>Recently</span>
						<span className=' float-right'>{props.recentlyAdded?"Added":"Edited"}</span>
					</th>
					<td style={{ backgroundColor: bgColor!, color: borderColor!, borderLeft: `solid 3px ${borderColor!}`, fontWeight:"bold"}} className={mainTextFont.className}>
						<Link href={elem.substring(perPos+1)}>{elem.substring(0,perPos).replaceAll("_"," ")}</Link>
					</td>
				</tr>;
				else return <tr key={i}><td style={{ backgroundColor: bgColor!, color: borderColor!, borderLeft: `solid 3px ${borderColor!}`, fontWeight:"bold"}} className={mainTextFont.className}>
					<Link href={elem.substring(perPos+1)}>{elem.substring(0,perPos).replaceAll("_"," ")}</Link>
				</td></tr>;
			})}</tbody>
		</table></section>
	}
	else{
		return <section><table id={styles.tableForRecent}>
			<thead className={logoFont2.className}><tr>
				<th style={{textAlign:"center"}}>Recently {props.recentlyAdded?"Added":"Edited"}</th>
			</tr></thead>
			<tbody>{(props.recentlyAdded ?  getRecentlyAdded():getRecentlyEdited()).map((elem, i)=>{
				let perPos = elem.indexOf("%");
				let bgColor: string;
				let borderColor: string;
				for(let record of allTopics){
					if(record.name.replaceAll(" ","_").toLowerCase() === elem.substring(perPos+1, elem.indexOf("/"))){
						bgColor = record.bgColor;
						borderColor = record.borderColor;
						break;
					}
				}
				
				return <tr key={0}><td style={{ backgroundColor: bgColor!, color: borderColor!, fontWeight:"bold"}} className={mainTextFont.className}>
					<Link href={elem.substring(perPos+1)}>{elem.substring(0,perPos).replaceAll("_"," ")}</Link>
				</td></tr>;
			})}</tbody>
		</table></section>
	}
}

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