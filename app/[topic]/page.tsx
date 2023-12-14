"use client"

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import TopicHeader from './designs/TopicHeader';
import { useCookies } from 'next-client-cookies';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';

type ImportType = {
  topic: string
}


export default function Page({ params }: { params: { topic: string } }){
  useEffect(() => {window.scrollTo(0,0);});
  const designSelectedVal = parseInt(useCookies().get('designSelected')!) || DEFAULT_DESIGN_SELECTION;
  const MainComp = dynamic<ImportType>(() => import(`@/app/[topic]/designs/Design${designSelectedVal}`), { ssr: false });
  const decodedTopic = decodeURIComponent(params.topic);
  return (<>
    <TopicHeader text={decodedTopic} ds={designSelectedVal}/>
    <MainComp topic={decodedTopic}/>
  </>)

}