"use client"

import React, { Suspense, useEffect, useReducer, useRef, useState } from 'react';
import { headingFont, mainTextFont, printFont2 } from "@/app/infoStore/fonts";
import { getTopicLinks } from '../../infoStore/topicsInfo';
import Link from "next/link";
import FormBox from '@/app/components/formBox';
import ImageWrapper from '@/app/components/ImageWrapper';

export default function Style2(props: {topic: string, styleObject:{
    name: string;
    headerBgColor: string;
    bgColor: string;
    textColor: string;
    borderColor: string;
    text: string;
}}){ 
    const topicsInfoState: Array<[string,string[]]> = getTopicLinks(props.topic);

    useEffect(()=>{
        document.documentElement.style.overflowY = "auto";
        document.documentElement.classList.remove("scroll2");
    },[]);

    let headerBgColor = props.styleObject.headerBgColor;
    let textColor = props.styleObject.textColor;
    let borderColor = props.styleObject.borderColor;

    if(topicsInfoState[0][0] === "error"){ return <div>
        <main style={{transition:"opacity 0.5s linear",paddingBottom:"40px"}}>
            <h2 className={`${headingFont.className} font-bold text-4xl mx-12 capitalize pt-10`} style={{color: borderColor!}}>Error</h2>
            <p className={`${mainTextFont.className} text-[28px] leading-[32px] mx-20 mt-5 `} style={{color: textColor!, letterSpacing:"1px"}}>There is no content on this page</p>
        </main>
        <FooterEl borderColor={borderColor!} textColor={textColor!} headerBgColor={headerBgColor!}/>
    </div>}
    return <div>
        <main style={{transition:"opacity 0.5s linear",paddingBottom:"40px"}}>
            {topicsInfoState.map((subArr: [string, string[]], i:number)=>{
                return <section key={i}>
                    <h2 className={`${headingFont.className} text-4xl mx-12 capitalize pt-10 font-bold`} style={{color: borderColor}}>
                        {subArr[0].replaceAll("_"," ")}
                    </h2>
                    {(subArr[1]).map((val:string,i: number)=> {
                        if(val.includes("%")){ return <StyledP
                            key={i}
                            textColor={headerBgColor}
                            text={val.substring(0,val.lastIndexOf('%')).replaceAll("_"," ")}
                            link={`${props.topic}/${subArr[0]}/${val.substring(val.lastIndexOf('%')+1,val.length)}`.replaceAll(",","").replaceAll(" ","_")}
                        />;
                        }else return <StyledP
                            key={i}
                            textColor={headerBgColor}
                            text={val.replaceAll("_"," ")}
                            link={`${props.topic}/${subArr[0]}/${val}`.replaceAll(" ","_").replaceAll(",","")}
                        />;
                    })}
                </section>
            })}
        </main>
        <FooterEl borderColor={borderColor!} textColor={textColor!} headerBgColor={headerBgColor!}/>
    </div>
}

const StyledP = (props: {text: string, link: string, textColor: string}) =>{
    return <p className={`${mainTextFont.className} text-[28px] leading-[32px] mx-20 mt-5 `} style={{color: props.textColor, letterSpacing:"1px"}}>
        {(props.text.slice(-11,) !== "incomplete)") ? <Link href={`./${props.link}`} dangerouslySetInnerHTML={{ __html: props.text }}></Link> : <span dangerouslySetInnerHTML={{ __html: props.text }}></span>}
    </p>
}

const footerIdStyle = {
	display:"grid",
	gridTemplateColumns:"120px auto",
    margin:"0px 15px 0px 0px",
}


function FooterEl(props:{borderColor:string, textColor: string, headerBgColor: string}){
    const [footerState, changeFS] = useState(false);
    const phpLocation = useRef("");
    const formType = useRef(0);
     
    function dispatch(arg0: {type: string}){
        arg0.type==="SHOW_FORM_BOX"? changeFS(true):changeFS(false);
    }

    function showForm(type: number){
        phpLocation.current = window.location.origin+"/infoStore/sendEmail";
        formType.current = type;
        dispatch({type: "SHOW_FORM_BOX"});
    }

    return <div className={printFont2.className+' pb-5 font-bold'} style={{color:props.textColor}}>
        <hr style={{backgroundColor:props.borderColor, height:"4px", border:"none"}}/>
        <footer>
            <div style={footerIdStyle}>
                <Link href="/" >
                    <ImageWrapper className=' mx-4 my-4 ' src="/link_logo_trans2.png" alt="" />
                </Link>
                <div style={{border:`solid ${props.borderColor} 3px`, marginTop:"10px", backgroundColor: props.headerBgColor, display:"flex",flexDirection:"row",justifyContent:"space-between", height:"min-content"}}>
                    <p style={{paddingLeft:"10px"}}>
                        If you find a bug in this website or want to report an error, <ClickButton type={0} func={showForm} /><br/>
                        If there are any equations for which you want proof for, <ClickButton type={1} func={showForm} /><br/>
                        For any suggestion and ideas, <ClickButton type={2} func={showForm} />
                    </p>
                    <Link href="https://www.paypal.com/donate/?business=8UEU66XK9RMKG&no_recurring=1&currency_code=CAD" style={{display:"flex",flexDirection:"column",justifyContent:"center",padding:"0px 25px"}} target="_blank">
                        <p className={" text-center font-bold text-sm "}>Want To Donate?</p>
                        <ImageWrapper className='flex justify-center ' mw="max-w-[70%]" h="h-6" src="/payPal.png" alt="" />
                    </Link>
                </div>
                <Suspense fallback={<></>}><FormBox showFB={footerState} reducerDis={dispatch} type={formType.current} actionLoc={phpLocation.current}/></Suspense>
            </div>
        </footer>
    </div>
}

function ClickButton(props: {type: number, func: (arg0: number) => void}){
    return <button onClick={()=>{props.func(props.type)}} className=' hover:underline outline-none'>click here</button>
}