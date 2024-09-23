"use client"

import dynamic from 'next/dynamic';
import { useEffect } from "react";

type ImportType = {
  topic: string,
  subTopic: string,
  contentArray: string[][],
}

type ClientPartType =  ImportType & {design: number};

export default function ClientPart(props: ClientPartType){

  useEffect(()=>{
    document.documentElement.style.overflowY = "auto";
    document.documentElement.classList.remove("scroll2");
  },[]);

  const MainComp = dynamic<ImportType>(() => import(`./design${props.design}Stuff/Main`));
  return <MainComp topic={props.topic} subTopic={props.subTopic} contentArray={props.contentArray}/>;
}