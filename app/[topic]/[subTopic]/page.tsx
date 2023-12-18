"use client"

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import SubTopicHeader from './designs/SubTopicHeader';
import { useCookies } from 'next-client-cookies';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import { allTopics } from '@/app/infoStore/topicsInfo';

type ImportType = {
  topic: string,
  subTopic: string
  styleObject?: typeof allTopics[0]
}

export default function Page({ params }: { params: { topic: string, subTopic: string } }){
  useEffect(() => {window.scrollTo(0,0);});
  const designSelectedVal = parseInt(useCookies().get('designSelected')!) || DEFAULT_DESIGN_SELECTION;
  const MainComp = dynamic<ImportType>(() => import(`./designs/Design${designSelectedVal}`), { ssr: false });
  const decodedTopic = decodeURIComponent(params.topic);
  const decodedSubTopic = decodeURIComponent(params.subTopic);
  if(designSelectedVal === 1){
    return <>
      <SubTopicHeader text={decodedTopic} ds={1}/>
      <MainComp topic={decodedTopic} subTopic={decodedSubTopic}/>
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
    return <div style={{backgroundColor: bgColor, minHeight:"100vh"}}>
      <SubTopicHeader text={decodedSubTopic} ds={2} styleObject={record}/>
      <MainComp topic={decodedTopic} subTopic={decodedSubTopic} styleObject={record}/>
    </div>
  }
}