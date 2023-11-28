// @ts-nocheck
"use client";

import React, { useState, useReducer, Suspense, useRef, useEffect } from 'react';
import styles from "./design1.module.scss";
import { chalkWriting, cursiveMain } from '../infoStore/fonts';
import Link from 'next/link';
import { allTopics } from '../infoStore/topicsInfo';
import { ImageWrapper } from "../components/ImageWrapper";
import { IconContext } from "react-icons";
import { FaPaintbrush } from "react-icons/fa6";
import StyleSelectionBox from '../components/StyleSelectionBox';
import { useRouter } from 'next/navigation';
import designSelected from '../infoStore/designSelected';

const design1States = [
    {showDialogBox: false}
]

const reducer = (state:object, action: {type:string}) => {
    switch (action.type) {
        case "SHOW_DIALOG_BOX":
            return {...state, showDialogBox: true};
        case "HIDE_DIALOG_BOX":
            return {...state, showDialogBox: false};
        default:
            return state;
    }
}

export default class Design1 extends React.Component<any, {ds: boolean, bodyComp: React.JSX.Element}>{

    constructor(props: any){
        super(props);
        this.state = {ds: true, bodyComp: <></>};
    }

    render() {return <>
        <HomeLoading disabledState={this.state.ds}/>
        {this.state.bodyComp}
    </>};

    componentDidMount() {
        this.setState({bodyComp: <MainBody/>});
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{ ds: boolean; bodyComp: React.JSX.Element; }>, snapshot?: any): void {
        if(prevState.ds) this.setState({ds: false});
    }
}

const HomeLoading = (props: {disabledState: boolean}) => {
  const [wrapperH, setWH] = useState("h-screen");

  useEffect(()=>{
    document.documentElement.style.overflowY = "hidden";
  },[])
  function buttonClick(){
    document.documentElement.style.overflowY = "scroll";
    setWH("h-0 opacity-0");
  }


  return (
    <div
      className={'fixed flex justify-center w-full bg-gray-100 border-b-black border-b-2 overflow-hidden z-10 ' + wrapperH} style={{transition:"height 1s, opacity 1s linear 1s"}}
    >
      <div className='grid grid-cols-2 grid-rows-2 self-center' style={{gridTemplateColumns:"auto 30px auto"}}>
        <ImageWrapper className='row-span-2 justify-self-center' alt="" src={`/link_logo_trans${designSelected}.png`} width={180} height={"auto"}/>
        <div className='row-span-2 h-full mx-3.5 bg-gradient-to-b from-transparent via-black to-transparent'></div>
        <p className={cursiveMain.className + " py-2 text-2xl leading-7"}>Imagine some useful<br/>info here</p>
        <button disabled={props.disabledState} onClick={buttonClick} id={styles.continue} className={chalkWriting.className}>
          {props.disabledState?"loading":"continue"}
        </button>
      </div>
    </div>
  )
}

const MainBody = () =>{
    return <>
        <Header/>
        <Main/>
    </>;
}

const Header = () =>{
    const [d1s, dispatch] = useReducer(reducer, design1States);

    function iconClicked(){
        dispatch({type: "SHOW_DIALOG_BOX"});
    }
    
    return <header className={cursiveMain.className + " px-6 after:clear-both after:block"}>
        <h1 className=' float-left text-3xl py-2'>Deriveit.net</h1>
        <IconContext.Provider value={{style:{float:"right",cursor:"pointer",height:"52px",width:"20px",paddingTop:"14px",paddingBottom:"18px"}}}><FaPaintbrush onClick={iconClicked} /></IconContext.Provider>
        {/* @ts-ignore */}
        <Suspense><StyleSelectionBox showDB={d1s.showDialogBox} reducerDis={dispatch} curFont1={cursiveMain.className} curFont2={chalkWriting.className}/></Suspense>
    </header>
}

const Main = () => {

    return( <main style={{marginBottom:"20px"}}>
        <Blackboard/>
        <section>
            <h2 className={cursiveMain.className + " w-full text-center text-5xl my-10"}>Topics</h2>
            <div className=" after:clear-both after:block after:w-full after:content-[' '] border-gray-600 border-b-4 border-t-4 text-3xl text-center after:text-gray-800 w-full" style={{transition: "top 0.5s ease-out"}}>
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
            <div className=" after:clear-both after:block after:w-full after:content-[' '] border-gray-600 border-b-4 border-t-4 bg-gray-100 h-28 ">
            </div>
        </section>
        <section>
            <h2 className={cursiveMain.className + " w-full text-center text-5xl my-10"}>Image Some Ad Here</h2>
        </section>
    </main> );
}

function Blackboard(){
  return <div id={styles.blackboard} className={chalkWriting.className}>
    <p>Text 1<br/>Text 2</p>
  </div>;
}

function TopicLink(props: {refTo: string, floatD: string}){
    const clickFlag = useRef(true);
    const router = useRouter();
    
    function divClicked(e: object){
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
                    document.querySelectorAll(".notSelectedForShrink").forEach(el => el.style.height = '0px');
                    setTimeout(()=>{
                        e.target.classList.add("border-b-4");
                        e.target.classList.add("border-gray-600");
                        e.target.parentElement.parentElement.parentElement.classList.remove("border-b-4");
                        e.target.parentElement.style.height = "1000px";
                        setTimeout(()=>{
                            document.documentElement.style.overflowY = "scroll";
                            router.push("/"+props.refTo);
                        }, 500);
                    }, 500);
                }, 500);
            },200);
        }
    }

    function linkClicked(e: object){
        // @ts-ignore
        e.preventDefault();
    }

    return <div onClick={divClicked} className={`bg-gray-50 overflow-hidden float-${props.floatD} notSelectedForShrink`} style={{width:"50%",height:"60px",transition:"width 0.2s ease-out, opacity 0.2s ease-out, height 0.5s ease-out "}} ><Link
        href={"/"+props.refTo}
        className={"bg-gray-100 block hover:text-4xl h-[60px] leading-[60px] hover:leading-[60px] hover:no-underline " + cursiveMain.className}
        style={{transition:"font-size 0.2s ease-out, height 0.5s ease-out"}}
        onClick={linkClicked}
    >{props.refTo}</Link></div>
}