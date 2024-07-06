"use client"

import React, { useEffect, useState } from 'react';
import { cursiveMain, textMain } from "@/app/infoStore/fonts";
import Link from "next/link";

export default function Design1(props: {topic: string, subTopic: [string, string[]]}){  
    const [curOp,setOp] = useState(0);

    useEffect(()=>{
        window.setTimeout(()=>setOp(1),500);
        document.documentElement.style.overflowY = "scroll";
    },[]);

    let curTopic = props.subTopic;
    if(curTopic[0] === "error") return <section>
        <h2 className={`${cursiveMain.className} text-4xl px-8 capitalize mt-3`}>Error</h2>
        <p className={`${textMain.className} text-zinc-500 text-2xl px-16 mb-1 `}>There is no content on this page</p>
    </section>;
    else return <main style={{transition:"opacity 0.5s linear",marginBottom:"40px",opacity: curOp}}><section>
        <h2 className={`${cursiveMain.className} text-4xl px-8 capitalize mt-3`}>{curTopic[0].replaceAll("_"," ")}</h2>
        {(curTopic[1]).map((val:string,i: number)=> {
            if(val.includes("%")){ return <StyledP
                key={i}
                text={val.substring(0,val.lastIndexOf('%')).replaceAll("_"," ")}
                link={`${curTopic[0]}/${val.substring(val.lastIndexOf('%')+1,val.length)}`}
            />;
            }else return <StyledP
                key={i}
                text={val.replaceAll("_"," ")}
                link={`${curTopic[0]}/${val}`}
            />;
        })}
    </section></main>;
}

const StyledP = (props: {text: string, link: string}) =>{
    return <p className={`${textMain.className} text-zinc-500 text-2xl px-16 mb-1 `}>
        {(props.text.slice(-11,) !== "incomplete)") ? <Link href={`./${props.link}`} dangerouslySetInnerHTML={{ __html: props.text }}></Link> : <span dangerouslySetInnerHTML={{ __html: props.text }}></span>}
    </p>
}