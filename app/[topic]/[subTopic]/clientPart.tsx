"use client"

import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import { allTopics } from '../../infoStore/topicsInfo';
import SubTopicHeader from './designs/SubTopicHeader';

type ImportType = {
  topic: string,
  subTopic:[string,string[]],
  styleObject?: typeof allTopics[0]
}

export default function ClientPart(props: {
  topic:string,
  subTopic:string,
  topicsInfoState: Array<[string,string[]]>,
  design: number
}){
  const [firstLoad, changeFL] = useState(true);
  const MainComp = dynamic<ImportType>(() => import(`./designs/Design${props.design}`), { ssr: false });

  useEffect(()=>{
    document.documentElement.style.overflowY = "auto";
    document.documentElement.classList.remove("scroll2");
    changeFL(false);
  },[]);

  if(firstLoad) return null;

  var curSubTopic: [string, string[]] = ["error",[""]];
  for(let i in props.topicsInfoState){
    if(props.topicsInfoState[i][0].replaceAll(" ","_").toLowerCase() === props.subTopic){
      curSubTopic = props.topicsInfoState[i];
      break;
    }
  };
  
  var recordInd = 0;
  if(curSubTopic[0] === "error") recordInd = allTopics.length-1;
  else while (
    (allTopics[recordInd].name.replaceAll(" ","_").toLowerCase() != props.topic) &&
    (recordInd < allTopics.length-1)
  ) recordInd += 1;

  if(props.design === 1) return <>
    <SubTopicHeader ds={1} styleObject={allTopics[recordInd]}/>
    <MainComp topic={props.topic} subTopic={curSubTopic}/>
  </>
  else{
    let bgColor = allTopics[recordInd].bgColor;
    return <div style={{backgroundColor: bgColor, minHeight:"100vh"}}>
      <SubTopicHeader ds={props.design} styleObject={allTopics[recordInd]}/>
      <MainComp topic={props.topic} subTopic={curSubTopic} styleObject={allTopics[recordInd]}/>
    </div>
  }
}