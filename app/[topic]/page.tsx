"use client"

import React from 'react';
import dynamic from 'next/dynamic';
import TopicHeader from './designs/TopicHeader';
import { useCookies } from 'next-client-cookies';
import { DEFAULT_DESIGN_SELECTION } from '../infoStore/designInfo';

export default function Page({ params }: { params: { topic: string } }){
  const designSelectedVal = parseInt(useCookies().get('designSelected')!) || DEFAULT_DESIGN_SELECTION;
  const MainComp = dynamic(() => import(`./designs/Design${designSelectedVal}`));
  const decodedTopic = decodeURIComponent(params.topic);
  window.scrollTo(0,0);
  return (<>
    <TopicHeader text={decodedTopic} ds={designSelectedVal}/>
    <MainComp topic={decodedTopic}/>
  </>)

}