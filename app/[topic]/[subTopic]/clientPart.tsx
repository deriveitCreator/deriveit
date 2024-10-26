"use client"

import dynamic from 'next/dynamic';
import { useEffect } from "react";
import SubTopicHeader from './designs/SubTopicHeader';
import React from 'react';

export type styleObjectType = {
  headerBgColor: string;
  bgColor: string;
  footerColor: string;
  borderColor: string;
}

type ImportType = {
  topic: string,
  subTopic:[string,string[]],
  styleObject?: styleObjectType
}

export default function ClientPart(props: {
  topic:string,
  subTopic:string,
  topicInfo: Array<[string,string[]]>,
  design: number,
  name: string,
  styleObject: styleObjectType | null
}){
  const MainComp = dynamic<ImportType>(() => import(`./designs/Design${props.design}`), { ssr: false });

  useEffect(()=>{
    document.documentElement.style.overflowY = "auto";
    document.documentElement.classList.remove("scroll2");
    if(props.design === 1) document.documentElement.style.backgroundColor = "rgb(249 250 251)";
  },[]);

  var curSubTopic: [string, string[]] = ["",[""]];
  for(let i in props.topicInfo){
    if(props.topicInfo[i][0] === props.subTopic){
      curSubTopic = props.topicInfo[i];
      break;
    }
  };

  if(props.design === 1) return <>
    <SubTopicHeader styleNumber={1} name={props.name}/>
    <MainComp topic={props.topic} subTopic={curSubTopic}/>
  </>
  else if(props.design === 2) {
    let bgColor = props.styleObject!.bgColor;
    return <div style={{backgroundColor: bgColor, minHeight:"100vh"}}>
      <SubTopicHeader styleNumber={props.design} styleObject={props.styleObject!} name={props.name}/>
      <MainComp topic={props.topic} subTopic={curSubTopic} styleObject={props.styleObject!}/>
    </div>
  }
  else throw new Error("Wrong design number value");
}