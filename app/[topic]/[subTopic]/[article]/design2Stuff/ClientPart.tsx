"use client"

import React, { Dispatch, SetStateAction, Suspense, useEffect, useRef, useState } from "react";
import styles from "./design2.module.scss";
import { mainTextFont, printFont2 } from "@/app/infoStore/fonts";
import { IconContext } from "react-icons";
import { FaChevronLeft, FaChevronRight, FaPaintbrush } from "react-icons/fa6";
import { topicsOrder } from "@/app/infoStore/topicsInfo";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import StyleSelectionBox from "@/app/components/StyleSelectionBox";
import Image from 'next/image';
import FormBox from "@/app/components/FormBox";
import { link } from "@/app/infoStore/paypalLink";
import { citationList } from '@/app/infoStore/sourcesForCitation';

interface infoBoxType {
  text: string;
  posX: number;
  posY: number;
  visibility: "hidden" | "visible";
};

export default function ClientPart(){
  const [ExtraInfoBoxStates, changeEIBS] = useState<infoBoxType>({text:"",posX:0,posY:0,visibility:"hidden"});
  const [asideW, setAW] = useState("0px");
  const [showDB, changeSDB] = useState(false);

  useEffect(()=>{
    //ad stuff
    var ads = document.getElementsByClassName('adsbygoogle').length;
    for (var i = 0; i < ads; i++) {
      try {
        //@ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    }
    
    if (screen.width > parseInt(styles.maxMobileWidth)){
      document.querySelectorAll("[data-title]").forEach((el)=>{
        el.addEventListener("mouseenter",()=>{
          changeEIBS({
            text: el.getAttribute("data-title")!,
            posX: el.getBoundingClientRect().x - 20,
            posY: el.getBoundingClientRect().y + 50,
            visibility:"visible"
          });
        });
        el.addEventListener("mouseleave",()=>{changeEIBS({text: "",posX: 0,posY: 0,visibility:"hidden"})});
      });
    }
    window.setTimeout(setMathTypeSet,100);
    document.querySelectorAll("cite").forEach(el =>{
      el.innerHTML = el.getAttribute("title") ? citationList[el.getAttribute("title")!] : "Error, please report this!";
    });

    //incase exiting via side bar links
    return ()=>{
      document.documentElement.classList.remove("scroll2");
      document.documentElement.style.overflowY = "auto";
    }
  },[]);

  return <>
    <ExtraInfoBox 
      text = {ExtraInfoBoxStates.text}
      posX = {ExtraInfoBoxStates.posX}
      posY = {ExtraInfoBoxStates.posY}
      visibility = {ExtraInfoBoxStates.visibility}
    />
    <SideOption asideW={asideW} setAW={setAW}/>
    <StyleSelectionBox showDB={showDB} changeSDB={changeSDB}/>
    <FooterEl/>
  </>
}

function setMathTypeSet(){
  //@ts-ignore
  try{window.MathJax.typeset()}
  catch{
    window.setTimeout(setMathTypeSet,100);
  }
}

function ExtraInfoBox(props:infoBoxType){
  return <div className={mainTextFont.className + " bg-zinc-400 border-2 border-dashed border-black fixed text-xl font-bold p-1 max-w-sm"} style={{top:props.posY,left:props.posX, visibility: props.visibility}} dangerouslySetInnerHTML={{__html: props.text}}></div>
}

function SideOption(props: {asideW: string, setAW: Dispatch<SetStateAction<string>>}){
  const grayAreaOp = useRef("opacity-0");
  const iconRef = useRef(<FaChevronLeft/>);
  const iconRightRef = useRef("0");
  const [gridH, changeGH] = useState("h-0");

  useEffect(()=>{
    if (props.asideW==="0px") window.setTimeout(()=>{
      document.documentElement.style.overflowY = "auto";
      document.documentElement.classList.remove("scroll2");
      changeGH("h-0");
    }, 400);
    else {
      document.documentElement.style.overflowY = "hidden";
      document.documentElement.classList.add("scroll2");
      changeGH("h-full");
    };

  }, [props.asideW]); // eslint-disable-line no-use-before-define

  let turnOffAside = () => props.setAW("0px");
  let turnOnAside = () => props.setAW("240px");

  if(props.asideW === "0px"){
    iconRef.current = <FaChevronLeft/>;
    iconRightRef.current = "0";
    grayAreaOp.current = "opacity-0";
  }
  else{
    iconRef.current = <FaChevronRight/>;
    iconRightRef.current = "240px";
    grayAreaOp.current = "opacity-50";
  }

  return <>
    <div id={styles.sideButton} onClick={()=>{props.asideW==="0px"?turnOnAside():turnOffAside()}} style={{right:iconRightRef.current}}>
      <IconContext.Provider value={{style:{height:"45px",margin:"0px 10px",fontWeight:"bold"}}}>
        {iconRef.current}
      </IconContext.Provider>
    </div>
    <div className={`fixed w-full grid top-0 right-0 z-10 ${gridH}`} style={{gridTemplateColumns:`auto ${props.asideW}`,transition:"grid-template-columns 0.4s"}}>
      <div className={`bg-zinc-700 ${grayAreaOp.current} transition-all`} onClick={turnOffAside}></div>
      <AsideEl/>
    </div>
  </>
}

function AsideEl(){
  return <aside className={"overflow-y-scroll"} style={{
    backgroundColor: "#BB5500",
    borderLeftColor: "#663300",
    borderLeftWidth: "5px",
    borderLeftStyle: "solid",
    position:"relative"
  }}>
    <div style={{
      borderRightColor: "#663300",
      borderRightWidth: "5px",
      borderRightStyle: "solid",
      padding:"1px 0px"
    }}>
      <div className="flex flex-row justify-evenly mt-4">
        <Link href={"/"}><IconContext.Provider value={{style:{color:"#FFDD77",border:"solid 4px #663300",borderRadius:"8px",height:"50px",width:"50px",padding:"4px",backgroundColor:"#c60"}}}><FaHome/></IconContext.Provider></Link>
        <BrushButton/>
      </div>
      {topicsOrder.map((topic, i)=>{
        if(topic === "error") return null;
        return <Link key={i} href={`/${topic}`} className="relative flex mx-6 h-28">
          <Image className="hover:transform hover:scale-105" src={`/topicsPics/${topic}.png`} alt="" fill objectFit='contain'/>
        </Link>
      })}
    </div>
  </aside>

}

function BrushButton(){
  const [showDB, changeSDB] = useState(false);

  function iconClicked(){
    changeSDB(true);
  }
  
  return <>
    <button onClick={iconClicked}><IconContext.Provider value={{style:{color:"#FFDD77",border:"solid 4px #663300",borderRadius:"8px",height:"50px",width:"50px",padding:"4px",backgroundColor:"#c60"}}}><FaPaintbrush/></IconContext.Provider></button>
    <Suspense><StyleSelectionBox showDB={showDB} changeSDB={changeSDB}/></Suspense>
  </>
}

function FooterEl(){
	const [formType, changeType] = useState(-1);

  return <footer className={printFont2.className + ' font-bold'}>
    <hr style={{backgroundColor:"black", height:"4px", border:"none"}}/>
    <div style={{display:"grid" ,margin:"0px 15px 0px 20px"}} id={styles.mainFooter}>
      <Link href="/" className={'mx-4 my-4 relative h-[121px]'} id={styles.homeLink}>
        <Image src="/link_logo_trans2.png" alt="" fill objectFit='contain'/>
      </Link>
      <div style={{paddingLeft:"10px", marginTop:"10px"}} id={styles.feedback}>
        <p>If you find a bug in this website or want to report an error, <ClickButton type={0} func={changeType} /></p>
        <p>If there are any equations for which you want proof for, <ClickButton type={1} func={changeType} /></p>
        <p>For any suggestion and ideas, <ClickButton type={2} func={changeType} /></p>
      </div>
      <Link href={link} style={{display:"flex",flexDirection:"column",justifyContent:"center",padding:"0px 25px", marginTop:"10px"}} target="_blank" id={styles.donate}>
        <p className={"text-center font-bold text-sm"}>Want To Donate?</p>
        <div className={'flex justify-center h-6 relative'}>
          <Image src="/payPal.png" alt="" fill objectFit='contain'/>
        </div>
      </Link>
    </div>
    <Suspense fallback={<></>}><FormBox type={formType}/></Suspense>
  </footer>;
}

function ClickButton(props: {type: number, func: React.Dispatch<React.SetStateAction<number>>}){
  return <button onClick={()=>{props.func(props.type)}} className=' hover:underline outline-none'>click here</button>;
}