"use client"

import React, { useEffect } from 'react';
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
  useEffect(() => {window.scrollTo(0,0);});
  const designSelectedVal = parseInt(useCookies().get('designSelected')!) || DEFAULT_DESIGN_SELECTION;
  const MainComp = dynamic<ImportType>(() => import(`@/app/[topic]/designs/Style${designSelectedVal}`), { ssr: false });
  const decodedTopic = decodeURIComponent(params.topic);
  if(designSelectedVal === 1){
    return <>
      <TopicHeader text={decodedTopic} ds={designSelectedVal}/>
      <MainComp topic={decodedTopic}/>
    </>
  }
  else{
    let bgColor;
    let record;
    for(record of allTopics){
        if(record.name.replaceAll(" ","_").toLowerCase() === decodedTopic){
          bgColor = record.bgColor;
          break;
        }
    }
    return (<div style={{backgroundColor: bgColor, minHeight:"100vh"}}>
      <TopicHeader text={decodedTopic} ds={designSelectedVal} styleObject={record}/>
      <MainComp topic={decodedTopic} styleObject={record}/>
    </div>)
  }

}