"use client"
import { useState, useEffect } from 'react';
import designSelected from '../../../../infoStore/designSelected';
import { cursiveMain } from "@/app/infoStore/fonts";

export default function getHeader(text: string){
    const [animationState, setAS] = useState("");
    
    useEffect(()=>{
        setAS("animate-[becomeBlack_0.5s_ease-out_1s_forwards]");
    },[])

    switch(designSelected){
        case 1:
            return <header className='border-t-4 w-full border-gray-600 bg-gray-100 border-b-4 mb-8 min-h-[84px] flex items-center justify-center'><h1 className={`${cursiveMain.className} text-center text-4xl leading-[50px] px-8 text-gray-100 ${animationState}`} dangerouslySetInnerHTML={{__html: text.replaceAll("&amp;","&")}}>
            </h1></header>
    }
}