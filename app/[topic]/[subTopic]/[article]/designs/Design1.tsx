"use client"

import { chalkWriting, textMain } from "@/app/infoStore/fonts";
import { IconContext } from "react-icons";
import { FaPaintbrush } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { annotate } from 'rough-notation';
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const asideStyle = {
  width: "180px",
  backgroundColor: "#333",
  border: "#bda27e solid 5px",
  boxShadow:"0px 0px 0px 2px #c2a782, 0px 0px 0px 4px #a58e6f, 3px 4px 8px 5px rgba(0, 0, 0, 0.5), 1px 1px 8px 1px rgb(15, 13, 13) inset",
  color: "#bbb",
  display: "flex",
  flexFlow: "column",
  padding:"10px 0px"
}

function MainPart({content}: {content: React.ReactNode}){
  const [op,setOp] = useState(0);

  useEffect(()=>{
    setOp(1);
    window.setTimeout(()=>{window.MathJax.typeset();}, 600);
  },[])

  return <main className={`px-7 grow `} style={{opacity:op,transition:"opacity 0.5s ease-out 0.1s"}}>{content}</main>

}

export default function Design1({children, isStory}: {children: React.ReactNode, isStory:boolean}){
  const [op,setOp] = useState(0);
  const homeIcon = useRef(null);
  const brushIcon = useRef(null);
  const topicLink = useRef(null);
  const adEl = useRef(null);

  useEffect(()=>{
    setOp(1);
    window.setTimeout(()=>{ if(homeIcon.current&&brushIcon.current&&topicLink.current&&adEl.current){
      annotate(homeIcon.current! , { type: "box", color: "#bbb", animationDuration:500, padding:2}).show();
      annotate(brushIcon.current! , { type: "box", color: "#bbb", animationDuration:500, padding:2}).show();
      annotate(topicLink.current! ,{type:"underline",color: "#bbb",animationDuration:500,padding:32}).show();
      annotate(adEl.current! , { type: "underline", color: "#bbb", animationDuration:500, padding:28 }).show();
    } }, 600)
  });

  return (<div style={{display:"flex",width:"100%" , marginBottom:"40px",minHeight:"100vh",opacity:op, transition:"opacity 0.5s ease-out 0.1s"}}>
    <MainPart content={children}/>
    <aside style={asideStyle} className={chalkWriting.className + " w-52 mx-3 grow-0 " }>
      <div className="relative mb-2">
        <div 
          style={{display:"inline-grid",gridTemplateColumns:"50% 50%",justifyItems: "center",alignItems:"center",width:"100%",marginTop:"10px"}}
        >
          <Link ref={homeIcon} className=" cursor-pointer hover:no-underline" href="/">
            <IconContext.Provider value={{style:{height:"32px",width:"100%",padding:"2px"}}}>
              <TiHome/>
            </IconContext.Provider>
          </Link>
          <Link ref={brushIcon} className=" cursor-pointer hover:no-underline" href="/Algebra">
            <IconContext.Provider value={{style:{height:"32px",width:"100%",padding:"4px"}}}>
              <FaPaintbrush/>
            </IconContext.Provider>
          </Link>
        </div>
        <div className=" w-10/12 mx-auto h-0 mt-1" ref={topicLink}>&nbsp;</div>
        <Link className=" text-center text-xl pb-4 pt-1 cursor-pointer block hover:no-underline " href="./../">
          <IconContext.Provider value={{style:{display:"inline",height:"25px"}}}>
            <FaLongArrowAltLeft/>
          </IconContext.Provider>
          &nbsp;Topic Page
        </Link>
        <p className=" w-11/12 mx-auto h-0" ref={adEl}>&nbsp;</p>
        <p className=" text-center text-xl">Advertisement:</p>
      </div>
      <div className=" border-2 border-dashed border-zinc-300 m-2 flex-auto">
        <p className=" text-lg rotate-45 mt-20 overflow-hidden w-44 -mx-3 ">
          <span className=" text-left ">Ad Missing...</span>
            <br/>
          <span className=" text-right inline float-right" >hmm... adblock?</span>
        </p>
      </div>
    </aside>
  </div>)
}

export function PMain({children, mode}: {children: string, mode:number}){
  if(mode === 1) return <p className={`pmain ${textMain.className} mb-3 text-[26px] leading-8 [&>.overLine]:border-t-2 [&>span>.katex]:text-2xl [&>.overLine]:border-black [&>.overLine]:inline-block [&>.overLine]:leading-7 mx-1`} dangerouslySetInnerHTML={{__html: children}}></p>
  if(mode === 2) return <p className={`pmain2 ${textMain.className} mb-3 text-[26px] leading-8 [&>.overLine]:border-t-2 [&>span>.katex]:text-2xl [&>.overLine]:border-black [&>.overLine]:inline-block [&>.overLine]:leading-7 mx-2`} dangerouslySetInnerHTML={{__html: children}}></p>
  if(mode === 3) return <p className={`subText ${textMain.className} mb-3 text-2xl text-zinc-600 [&>.overLine]:border-t-2 [&>span>.katex]:text-2xl [&>.overLine]:border-black [&>.overLine]:inline-block [&>.overLine]:leading-7 mx-9`} dangerouslySetInnerHTML={{__html: children}}></p>
}