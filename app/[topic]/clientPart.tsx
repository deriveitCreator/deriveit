"use client"

import dynamic from 'next/dynamic';
import { useEffect } from "react";
import TopicHeader from './designs/TopicHeader';
import React from 'react';

export type styleObjectType = {
  headerBgColor: string;
  bgColor: string;
  footerColor: string;
  borderColor: string;
}

type ImportType = {
  topic: string,
  topicsInfoState: Array<[string,string[]]>,
  styleObject?: styleObjectType,
}

export default function ClientPart(props: {
  topic: string,
  topicsInfoState: Array<[string,string[]]>,
  design: number,
  name: string,
  styleObject: styleObjectType | null
}){
  const MainComp = dynamic<ImportType>(() => import(`@/app/[topic]/designs/Style${props.design}`));

  useEffect(()=>{
    document.documentElement.style.overflowY = "auto";
    document.documentElement.classList.remove("scroll2");
    if(props.design === 1) document.documentElement.style.backgroundColor = "rgb(249 250 251)";
  },[]);


  if(props.design === 1){
    return <>
      <TopicHeader styleNumber={1} name={props.name}/>
      <MainComp topic={props.topic} topicsInfoState={props.topicsInfoState}/>
    </>
  }
  else if(props.design === 2){
    let bgColor = props.styleObject!.bgColor;
    return (<div style={{backgroundColor: bgColor, minHeight:"100vh"}}>
      <TopicHeader styleNumber={2} name={props.name} styleObject={props.styleObject!}/>
      <MainComp topic={props.topic} topicsInfoState={props.topicsInfoState} styleObject={props.styleObject!}/>
    </div>)
  }
  else throw new Error("Wrong design number value");
}