"use client";

import React, { useState, useRef, useReducer, Suspense, useEffect } from 'react';
import styles from "./design1.module.scss";
import { chalkWriting, cursiveMain } from '../infoStore/fonts';
import Link from 'next/link';
import { allTopics, getRecentlyAdded, getRecentlyEdited } from '../infoStore/topicsInfo';
import { ImageWrapper } from "../components/ImageWrapper";
import { useRouter } from 'next/navigation';
import { IconContext } from "react-icons";
import { FaPaintbrush } from "react-icons/fa6";
import StyleSelectionBox from '../components/StyleSelectionBox';
import { Blackboard } from '../components/BlackBoard';

const design1States = {
    continueDisabled: true,
    startSlideShow: false
}

const reducer = (state:object, action: {type:string, payload?:string}) => {
    switch (action.type) {
        case "ALLOW_CONTINUE":
            return {...state, continueDisabled: false};
        case "START_SLIDESHOW":
            return {...state, startSlideShow: true};
        default:
            return state;
    }
}

export default function Design1(){
    const [d1s, dispatch] = useReducer(reducer, design1States);
    const [firstRender, changeFR] = useState(true);
    useEffect(()=>{
      changeFR(false);
    },[]);

    return <>
      {/*@ts-ignore */}
      <HomeLoading disabledState={d1s.continueDisabled} hlDis={dispatch}/>
      {firstRender? null : <HomeBody design1States={d1s} disFunc={dispatch} />}
    </>;

}

const HomeLoading=(props:{disabledState:boolean,hlDis:React.Dispatch<{type:string;payload?: string|undefined}>})=>{
  const [wrapperH, setWH] = useState("h-screen");

  function buttonClick(){
    document.documentElement.style.overflowY = "scroll";
    setWH("h-0 opacity-0");
    props.hlDis({type: "START_SLIDESHOW"});
  }

  return (
    <div
      className={'fixed top-0 flex justify-center w-full bg-gray-100 border-b-black border-b-2 overflow-hidden z-10 ' + wrapperH} style={{transition:"height 1s, opacity 1s linear 1s"}}
    >
      <div className='grid grid-cols-2 grid-rows-2 self-center' style={{gridTemplateColumns:"auto 30px auto"}}>
        <ImageWrapper className='row-span-2 justify-self-center' alt="" src={`/link_logo_trans1.png`} w= 'w-36'/>
        <div className='row-span-2 h-full mx-3.5 bg-gradient-to-b from-transparent via-black to-transparent'></div>
        <p className={cursiveMain.className + " py-2 text-2xl leading-7"}>Imagine some useful<br/>info here</p>
        <button disabled={props.disabledState} onClick={buttonClick} id={styles.continue} className={chalkWriting.className}>
          {props.disabledState?"loading":"continue"}
        </button>
      </div>
    </div>
  )
}

function HomeBody(props:{design1States:any, disFunc:React.Dispatch<{type:string;payload?: string|undefined}>}){
  useEffect(()=>{
    if(props.design1States.continueDisabled) props.disFunc({type: "ALLOW_CONTINUE"});
    else{
      window.scrollTo(0,0);
      var ads = document.getElementsByClassName('adsbygoogle').length;
      for (var i = 0; i < ads; i++) {
        try {
          //@ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {}
      }
    } 
  }) // eslint-disable-line no-use-before-define

  return <>
    {/*@ts-ignore */}
    <HeaderEl/>
    <main style={{marginBottom:"20px"}}>
      {/*@ts-ignore */}
      <Blackboard disFunc={props.disFunc} startSS={props.design1States.startSlideShow}/>
      <section>
        <h2 className={`${cursiveMain.className} ${styles.h2Class}`}>Topics</h2>
        <div className={`after:clear-both after:block after:w-full after:content-[' '] border-gray-600 border-b-4 border-t-4 text-center after:text-gray-800 w-full`} style={{transition: "top 0.3s ease-out"}}>
          {allTopics.map((topic, i) => {
            if(i%2) return null;
            else{
            let nextTopic = allTopics[i+1];
            return <div key={i}>
              <TopicLink refTo={topic.name} floatD={"left"}/>
              <TopicLink refTo={nextTopic.name} floatD={"right"}/>
            </div>
            }
          })}
        </div>
      </section>
      {RecentlySection("Added")}
      {RecentlySection("Edited")}
      <section>
        {/*@ts-ignore*/}
        <div align="center" style={{marginTop:"20px", marginBottom:"20px"}}><ins
          className="adsbygoogle"
          style={{maxWidth:"1000px",overflowX:"auto",display:"block"}}
          data-ad-client="ca-pub-4860967711062471"
          data-ad-slot="1515076236"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins></div>
      </section>
    </main>
  </>;
}

const HeaderEl = () => {
    const [showDB, changeSDB] = useState(false);
    
    return <header className={cursiveMain.className + " px-6 after:clear-both after:block"}>
        <h1 className=' float-left text-3xl py-2'>Deriveit.net</h1>
        <IconContext.Provider value={{style:{float:"right",cursor:"pointer",height:"52px",width:"20px",paddingTop:"14px",paddingBottom:"18px"}}}><FaPaintbrush onClick={()=>{changeSDB(true)}} /></IconContext.Provider>
        <Suspense><StyleSelectionBox showDB={showDB} changeSDB={changeSDB}/></Suspense>
    </header>;
}

function TopicLink(props: {refTo: string, floatD: string}){
    const clickFlag = useRef(true);
    const router = useRouter();
    
    function divClicked(e: {target: any}){
        if(clickFlag.current){
            clickFlag.current = false;
            document.documentElement.style.overflowY = "hidden";
            e.target.parentElement.style.width = "100%";
            if(props.floatD === "left") {
                e.target.parentElement.nextElementSibling.style.width = "0%";
                e.target.parentElement.nextElementSibling.style.opacity = "0";
            }
            else {
                e.target.parentElement.previousElementSibling.style.width = "0%";
                e.target.parentElement.previousElementSibling.style.opacity = "0";
            }
            e.target.parentElement.parentElement.parentElement.style.top = e.target.parentElement.parentElement.parentElement.getBoundingClientRect().top  + window.scrollY + "px";
            setTimeout(()=>{
                e.target.parentElement.parentElement.parentElement.style.position = "absolute";
                e.target.parentElement.parentElement.parentElement.style.top = "0px";
                e.target.parentElement.classList.remove("notSelectedForShrink");
                window.scroll(0,0);
                setTimeout(()=>{
                  e.target.style.fontSize = "36px";
                  e.target.style.lineHeight = "74px";
                  e.target.style.height = "80px"; 
                  //@ts-ignore 
                  document.querySelectorAll(".notSelectedForShrink").forEach(el => el.style.height = '0px');
                  setTimeout(()=>{
                      e.target.classList.add("border-b-4");
                      e.target.classList.add("border-gray-600");
                      e.target.parentElement.parentElement.parentElement.classList.remove("border-b-4");
                      e.target.parentElement.style.height = "1000px";
                      setTimeout(()=>{
                          router.push("/"+props.refTo.toLowerCase().replaceAll(" ","_"));
                      }, 1);
                  }, 300);
                }, 300);
            },200);
        }
    }

    function linkClicked(e: object){
        //@ts-ignore
        e.preventDefault();
    }

    if(props.refTo == "Error") return <div id={styles.errorDiv} className={`bg-gray-100 overflow-hidden float-${props.floatD} notSelectedForShrink block ${cursiveMain.className} ${styles.topicClass}`} style={{width:"50%",height:"60px",transition:"width 0.2s ease-out, opacity 0.2s ease-out, height 0.3s ease-out "}}>Under Construction</div>
    else return <div onClick={divClicked} className={`bg-gray-50 overflow-hidden float-${props.floatD} notSelectedForShrink `} style={{width:"50%",height:"60px",transition:"width 0.2s ease-out, opacity 0.2s ease-out, height 0.3s ease-out "}} ><Link
      href={"/"+props.refTo.toLowerCase()}
      className={`bg-gray-100 block hover:no-underline ${cursiveMain.className} ${styles.topicClass}`}
      style={{transition:"font-size 0.2s ease-out, height 0.3s ease-out"}}
      onClick={linkClicked}
    >{props.refTo}</Link></div>
}

function RecentlySection(type:string){
  let content = (type == "Edited") ? getRecentlyEdited() : getRecentlyAdded();
  return <section>
    <h2 className={`${cursiveMain.className} ${styles.h2Class}`}>Recently {type}</h2>
    <div className={` border-gray-600 border-b-4 border-t-4`}>
      {content.map((item,i)=>{
        return <div key={i} className={`bg-gray-50`} ><Link
          href={"/"+item.substring(item.indexOf("%")+1)}
          className={`bg-gray-100 block hover:no-underline group ${cursiveMain.className} ${styles.recentTableText}`}
        >
          <span className=' opacity-0 group-hover:opacity-100 absolute left-2'>&#128609;</span>
          <span>{item.substring(0,item.indexOf("%")).replaceAll("_"," ")}</span>
        </Link></div>
      })}
    </div>
  </section>;
}