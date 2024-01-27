"use client"

import React from 'react';
import dynamic from 'next/dynamic';
import SubTopicHeader from './designs/SubTopicHeader';
import { useCookies } from 'next-client-cookies';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import { getTopicLinks } from '../../infoStore/topicsInfo';
import { allTopics } from '@/app/infoStore/topicsInfo';

type ImportType = {
  topic: string,
  subTopic: [string,string[]]
  styleObject?: typeof allTopics[0]
}

export default function Page({ params }: { params: { topic: string, subTopic: string } }){
  const designSelectedVal = parseInt(useCookies().get('designSelected')!) || DEFAULT_DESIGN_SELECTION;
  const MainComp = dynamic<ImportType>(() => import(`./designs/Design${designSelectedVal}`), { ssr: false });
  const decodedTopic = decodeURIComponent(params.topic);
  const decodedSubTopic = decodeURIComponent(params.subTopic).replaceAll(" ","_").toLowerCase();
  const topicsInfoState: Array<[string,string[]]> = getTopicLinks(params.topic);

  var curSubTopic: [string, string[]] = ["error",[""]];
  for(let i in topicsInfoState){
      if(topicsInfoState[i][0].replaceAll(" ","_").toLowerCase() === decodedSubTopic){
        curSubTopic = topicsInfoState[i];
        break;
      }
  };

  var recordInd = 0;
  if(curSubTopic[0] === "error") recordInd = allTopics.length-1;
  else while (
    (allTopics[recordInd].name.replaceAll(" ","_").toLowerCase() != decodedTopic) &&
    (recordInd < allTopics.length-1)
  ) recordInd += 1;
  
  if(designSelectedVal === 1){
    return <>
      <SubTopicHeader ds={1} styleObject={allTopics[recordInd]}/>
      <MainComp topic={decodedTopic} subTopic={curSubTopic}/>
    </>
  }
  else{
    let bgColor = allTopics[recordInd].bgColor;
    return <div style={{backgroundColor: bgColor, minHeight:"100vh"}}>
      <SubTopicHeader ds={designSelectedVal} styleObject={allTopics[recordInd]}/>
      <MainComp topic={decodedTopic} subTopic={curSubTopic} styleObject={allTopics[recordInd]}/>
    </div>
  }
}