/* eslint-disable */
"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export const ImageWrapper = (props: {
    alt?:string,
    src:string,
    h?:string,
    w?:string,
    mw?: string,
    className?: string
    bor?:string
    animate?:boolean
    native?:boolean
    figcaption?:string
}) => {

    const [divW,setDivW] = useState("w-0")
    useEffect(()=>{
        if(props.animate === true) setDivW("w-full");
    }, [])

    let imgW = (props.w === undefined)? "w-auto": props.w;
    let imgH = (props.h === undefined)? "h-auto": props.h;
    let altVal = (props.alt === undefined) ? "" : props.alt;
    let divBool = (props.animate === undefined)? false: props.animate;
    if(props.figcaption !== undefined) return <figure className={`${props.className} ${divW} h-auto m-auto overflow-hidden `} style={{transition:"width 0.5s linear 1s"}}>
        <Image alt={altVal} src={props.src} width={0} height={0} sizes="100vw" className={`w-auto ${imgH} ${props.bor} object-contain bg-white`}/>
        <figcaption className=' text-lg ' dangerouslySetInnerHTML={{__html: props.figcaption}}></figcaption>
    </figure>;
    else if(divBool) return <div className={`${props.className} ${divW} h-auto m-auto px-6 `} style={{transition:"width 0.5s linear 1s"}}>
        <Image alt={altVal} src={props.src} width={0} height={0} sizes="100vw" className={`w-auto ${imgH} ${props.bor} object-contain bg-white`}/>
    </div>;
    else if (props.native) return <div className={props.className}>
        <img alt={altVal} src={props.src} className={`${imgW} ${imgH} ${props.bor}`}/>
    </div>;
    else return <div className={props.className}>
        <Image alt={altVal} src={props.src} width={0} height={0} sizes="100vw" className={`${imgW} ${imgH} ${props.bor}`}/>
    </div>;
}

export default ImageWrapper