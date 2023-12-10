"use client"

import React, { useEffect, useState } from 'react';
import { cursiveMain, textMain } from "@/app/infoStore/fonts";
import { getTopicLinks } from '../../../infoStore/topicsInfo';
import Link from "next/link";

export default function Design1(props: {topic: string, subTopic:string}){  
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
    
    let curTopic: [string, string[]] = ["",[""]];
    for(let i in topicsInfoState){
        if(topicsInfoState[i][0] === props.subTopic){
            curTopic = topicsInfoState[i];
            break;
        }
    }

    return <main style={{transition:"opacity 0.5s linear",marginBottom:"40px",opacity: curOp}}><section>
        <h2 className={`${cursiveMain.className} text-4xl px-8 capitalize mt-3`}>{curTopic[0].replaceAll("_"," ")}</h2>
        {(curTopic[1]).map((val:string,i: number)=> {
            if(val.charAt(val.length-1) === "%"){ return <StyledP
                key={i}
                text={val.substring(0,val.lastIndexOf('%',val.length-2)).replaceAll("_"," ")}
                link={`${curTopic[0].replaceAll(" ","_")}/${val.substring(val.lastIndexOf('%',val.length-2)+1,val.length-1)}`}
            />;
            }else return <StyledP
                key={i}
                text={val.replaceAll("_"," ")}
                link={`${curTopic[0].replaceAll(" ","_")}/${val.replaceAll(" ","_")}`}
            />;
        })}
    </section></main>;
}

const StyledP = (props: {text: string, link: string}) =>{
    return <p className={`${textMain.className} text-zinc-500 text-2xl px-16 mb-1 `}>
        {(props.text.slice(-11,) !== "incomplete)") ? <Link href={`./${props.link}`} dangerouslySetInnerHTML={{ __html: props.text }}></Link> : <span dangerouslySetInnerHTML={{ __html: props.text }}></span>}
    </p>
}