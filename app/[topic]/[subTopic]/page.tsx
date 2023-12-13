"use client"

import React from 'react';
import dynamic from 'next/dynamic';
import SubTopicHeader from './designs/SubTopicHeader';
import { useCookies } from 'next-client-cookies';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';

export default function Page({ params }: { params: { topic: string, subTopic: string } }){
  const designSelectedVal = parseInt(useCookies().get('designSelected')!) || DEFAULT_DESIGN_SELECTION;
  const MainComp = dynamic(() => import(`./designs/Design${designSelectedVal}`));
  const decodedTopic = decodeURIComponent(params.topic);
  return (<>
    <SubTopicHeader text={decodedTopic} ds={designSelectedVal}/>
    <MainComp topic={decodedTopic} subTopic={decodeURIComponent(params.subTopic)}/>
  </>)

}