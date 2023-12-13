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
    showDialogBox: false,
    startSlideShow: false
}

const reducer = (state:object, action: {type:string, payload?:string}) => {
    switch (action.type) {
        case "ALLOW_CONTINUE":
            return {...state, continueDisabled: false};
        case "SHOW_DIALOG_BOX":
            return {...state, showDialogBox: true};
        case "HIDE_DIALOG_BOX":
            return {...state, showDialogBox: false};
        case "START_SLIDESHOW":
            return {...state, startSlideShow: true};
        default:
            return state;
    }
}

export default function Design1(){
    const [d1s, dispatch] = useReducer(reducer, design1States);

    return <>
        {/*@ts-ignore */}
        <HomeLoading disabledState={d1s.continueDisabled} hlDis={dispatch}/>
        <Suspense fallback={<></>}>
            <HomeBody design1States={d1s} disFunc={dispatch} />
        </Suspense>
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

function HomeBody(props:{design1States:object,disFunc:React.Dispatch<{type:string;payload?: string|undefined}>}){
    useEffect(()=>{
        props.disFunc({type: "ALLOW_CONTINUE"});
    }, [])

    return <>
        {/*@ts-ignore */}
        <HeaderEl showDiabox={props.design1States.showDialogBox} headerElDis={props.disFunc}/>
        <main style={{marginBottom:"20px"}}>
            {/*@ts-ignore */}
            <Blackboard disFunc={props.disFunc} startSS={props.design1States.startSlideShow}/>
            <section>
                <h2 className={cursiveMain.className + " w-full text-center text-5xl my-10"}>Topics</h2>
                <div className=" after:clear-both after:block after:w-full after:content-[' '] border-gray-600 border-b-4 border-t-4 text-3xl text-center after:text-gray-800 w-full" style={{transition: "top 0.3s ease-out"}}>
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
            <section>
                <h2 className={cursiveMain.className + " w-full text-center text-5xl my-10"}>Recently Added</h2>
                <div className=" after:clear-both after:block after:w-full after:content-[' '] border-gray-600 border-b-4 border-t-4">
                    {getRecentlyAdded().map((item,i)=>{ return  <div key={i} className={`bg-gray-50 overflow-hidden h-12`} ><Link
                        href={"/"+item.substring(item.indexOf("%")+1)}
                        className={"bg-gray-100 block h-12 leading-[48px] hover:no-underline text-2xl px-5 group " + cursiveMain.className}
                    >
                        <span className=' opacity-0 group-hover:opacity-100'>&#128609;</span>
                        <span className=' px-3'>{item.substring(0,item.indexOf("%")).replaceAll("_"," ")}</span>
                    </Link></div> })}
                </div>
            </section>
            <section>
                <h2 className={cursiveMain.className + " w-full text-center text-5xl my-10"}>Recently Edited</h2>
                <div className=" after:clear-both after:block after:w-full after:content-[' '] border-gray-600 border-b-4 border-t-4">
                    {getRecentlyEdited().map((item,i)=>{ return  <div key={i} className={`bg-gray-50 overflow-hidden`} ><Link
                        href={"/"+item.substring(item.indexOf("%")+1)}
                        className={"bg-gray-100 block h-12 leading-[48px] hover:no-underline text-2xl px-5 group " + cursiveMain.className}
                    >
                    <span className=' opacity-0 group-hover:opacity-100'>&#128609;</span>
                        <span className=' px-3'>{item.substring(0,item.indexOf("%")).replaceAll("_"," ")}</span>
                    </Link></div> })}
                </div>
            </section>
            <section>
                <h2 className={cursiveMain.className + " w-full text-center text-5xl my-10"}>Imagine Some Ad Here</h2>
            </section>
        </main>
    </>;
}

const HeaderEl = (props: {showDiabox:boolean,headerElDis: React.Dispatch<{ type: string;payload?: string | undefined;}>}) => {
    function iconClicked(){
        props.headerElDis({type: "SHOW_DIALOG_BOX"});
    }
    return <header className={cursiveMain.className + " px-6 after:clear-both after:block"}>
        <h1 className=' float-left text-3xl py-2'>Deriveit.net</h1>
        <IconContext.Provider value={{style:{float:"right",cursor:"pointer",height:"52px",width:"20px",paddingTop:"14px",paddingBottom:"18px"}}}><FaPaintbrush onClick={iconClicked} /></IconContext.Provider>
        <Suspense><StyleSelectionBox showDB={props.showDiabox} reducerDis={props.headerElDis}/></Suspense>
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
                    e.target.classList.remove("h-[60px]");
                    e.target.classList.remove("leading-[60px]");
                    e.target.classList.remove("hover:text-4xl");
                    e.target.classList.remove("hover:leading-[60px]");
                    e.target.classList.add("text-4xl");
                    e.target.classList.add("h-20");
                    e.target.classList.add("leading-[74px]");
                    e.target.classList.add("cursor-default");
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

    return <div onClick={divClicked} className={`bg-gray-50 overflow-hidden float-${props.floatD} notSelectedForShrink`} style={{width:"50%",height:"60px",transition:"width 0.2s ease-out, opacity 0.2s ease-out, height 0.3s ease-out "}} ><Link
        href={"/"+props.refTo.toLowerCase()}
        className={"bg-gray-100 block hover:text-4xl h-[60px] leading-[60px] hover:leading-[60px] hover:no-underline " + cursiveMain.className}
        style={{transition:"font-size 0.2s ease-out, height 0.3s ease-out"}}
        onClick={linkClicked}
    >{props.refTo}</Link></div>
}