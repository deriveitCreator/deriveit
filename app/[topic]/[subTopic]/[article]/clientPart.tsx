"use client"

import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";

type ImportType = {
  topic: string,
  subTopic: string,
  contentArray: [[string, any]],
}

type ClientPartType =  ImportType & {design: number};

export default function ClientPart(props: ClientPartType){
  const [firstLoad, changeFL] = useState(true);

  useEffect(()=>{
    document.documentElement.style.overflowY = "auto";
    document.documentElement.classList.remove("scroll2");
    changeFL(false);
  },[]);

  if(firstLoad) return null;
  
  const MainComp = dynamic<ImportType>(() => import(`./designs/Design${props.design}`));
  return <MainComp topic={props.topic} subTopic={props.subTopic} contentArray={props.contentArray}/>;
}