"use client"

import React, { useEffect, useState } from 'react';
import { cursiveMain, textMain } from "@/app/infoStore/fonts";
import { getTopicLinks } from '../../infoStore/topicsInfo';
import Link from "next/link";

export default function Test(props: {topic: string}){ 
    const topicsInfoState: Array<[string,string[]]> = getTopicLinks(props.topic);
    const [curOp,setOp] = useState(0);

    useEffect(()=>{
        window.setTimeout(()=>setOp(1),500);
        document.documentElement.style.overflowY = "scroll";
    },[]);

    if(topicsInfoState[0][0] === "error"){ return <section>
        <h2 className={`${cursiveMain.className} text-4xl px-8 capitalize mt-3`}>Error</h2>
        <p className={`${textMain.className} text-zinc-500 text-2xl px-16 mb-1 `}>There is no content on this page</p>
    </section>}
    return <main style={{transition:"opacity 0.5s linear",marginBottom:"40px",opacity: curOp}}>
        {topicsInfoState.map((subArr: [string, string[]], i:number)=>{
            return <section key={i}>
                <h2 className={`${cursiveMain.className} text-4xl px-8 capitalize mt-3`}>
                    {subArr[0].replaceAll("_"," ")}
                </h2>
                {(subArr[1]).map((val:string,i: number)=> {
                    if(val.includes("%")){ return <StyledP
                        key={i}
                        text={val.substring(0,val.lastIndexOf('%')).replaceAll("_"," ")}
                        link={`${props.topic}/${subArr[0]}/${val.substring(val.lastIndexOf('%')+1,val.length)}`.replaceAll(",","").replaceAll(" ","_")}
                    />;
                    }else return <StyledP
                        key={i}
                        text={val.replaceAll("_"," ")}
                        link={`${props.topic}/${subArr[0]}/${val}`.replaceAll(" ","_").replaceAll(",","")}
                    />;
                })}
            </section>
        })}
    </main>;
}

const StyledP = (props: {text: string, link: string}) =>{
    return <p className={`${textMain.className} text-zinc-500 text-2xl px-16 mb-1 `}>
        {(props.text.slice(-11,) !== "incomplete)") ? <Link href={`./${props.link}`} dangerouslySetInnerHTML={{ __html: props.text }}></Link> : <span dangerouslySetInnerHTML={{ __html: props.text }}></span>}
    </p>
}