"use client"

import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import TopicHeader from './designs/TopicHeader';

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
  const MainComp = dynamic<ImportType>(() => import(`@/app/[topic]/designs/Style${props.design}`), { ssr: false });

  useEffect(()=>{
    document.documentElement.style.overflowY = "auto";
    document.documentElement.classList.remove("scroll2");
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