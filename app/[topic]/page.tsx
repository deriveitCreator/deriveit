"use client"

import React from 'react';
import dynamic from 'next/dynamic';
import TopicHeader from './designs/TopicHeader';
import { useCookies } from 'next-client-cookies';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import { allTopics } from '../infoStore/topicsInfo';

type ImportType = {
  topic: string
  styleObject?: typeof allTopics[0]
}

export default function Page({ params }: { params: { topic: string } }){
  const designSelectedVal = parseInt(useCookies().get('designSelected')!) || DEFAULT_DESIGN_SELECTION;
  const MainComp = dynamic<ImportType>(() => import(`@/app/[topic]/designs/Style${designSelectedVal}`), { ssr: false });
  const decodedTopic = decodeURIComponent(params.topic);
  var recordInd = 0;
  while (
    (allTopics[recordInd].name.replaceAll(" ","_").toLowerCase() != decodedTopic) &&
    (recordInd < allTopics.length-1)
  ) recordInd += 1;
  if(designSelectedVal === 1){
    return <>
      <TopicHeader ds={1} styleObject={allTopics[recordInd]}/>
      <MainComp topic={decodedTopic}/>
    </>
  }
  else{
    let bgColor = allTopics[recordInd].bgColor;
    return (<div style={{backgroundColor: bgColor, minHeight:"100vh"}}>
      <TopicHeader ds={designSelectedVal} styleObject={allTopics[recordInd]}/>
      <MainComp topic={decodedTopic} styleObject={allTopics[recordInd]}/>
    </div>)
  }

}