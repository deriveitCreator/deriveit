"use client"

import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import { allTopics } from '../infoStore/topicsInfo';
import TopicHeader from './designs/TopicHeader';

type ImportType = {
  topic: string,
  topicsInfoState: Array<[string,string[]]>,
  styleObject?: typeof allTopics[0]
}

export default function ClientPart(props: {
  topic:string,
  topicsInfoState: Array<[string,string[]]>,
  design: number
}){
  const [firstLoad, changeFL] = useState(true);
  const MainComp = dynamic<ImportType>(() => import(`@/app/[topic]/designs/Style${props.design}`), { ssr: false });

  useEffect(()=>{
    document.documentElement.style.overflowY = "auto";
    document.documentElement.classList.remove("scroll2");
    changeFL(false);
  },[]);

  if(firstLoad) return null;

  var recordInd = 0;
  while (
    (allTopics[recordInd].name.replaceAll(" ","_").toLowerCase() != props.topic) &&
    (recordInd < allTopics.length-1)
  ) recordInd += 1;

  if(props.design === 1){
    return <>
      <TopicHeader ds={1} styleObject={allTopics[recordInd]}/>
      <MainComp topic={props.topic} topicsInfoState={props.topicsInfoState}/>
    </>
  }
  else{
    let bgColor = allTopics[recordInd].bgColor;
    return (<div style={{backgroundColor: bgColor, minHeight:"100vh"}}>
      <TopicHeader ds={props.design} styleObject={allTopics[recordInd]}/>
      <MainComp topic={props.topic} topicsInfoState={props.topicsInfoState} styleObject={allTopics[recordInd]}/>
    </div>)
  }
}