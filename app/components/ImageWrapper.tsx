/* eslint-disable */
import React from 'react';
import Image from 'next/image';

export const ImageWrapper = (props: {
    className?:string,
    alt:string,
    src:string,
    style:object,
    width?:string,
    height?:string
}) => {
    let divW = (props.width === undefined)? "100%":props.width;
    let divH = (props.height === undefined)? "100%":props.height;
    return <div className={props.className} style={{...props.style, height:divH, width: divW,position:"relative",overflow:"visible"}}>
        <Image alt={props.alt} src={props.src} fill sizes='(max-width: 1px) 100vw' style={{objectFit:"contain"}}/>
    </div>;
}

export default ImageWrapper