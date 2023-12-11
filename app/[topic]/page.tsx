"use client"

import React from 'react';
import designSelected from '../infoStore/designSelected';
import dynamic from 'next/dynamic';
import TopicHeader from './designs/TopicHeader';

export default function Page({ params }: { params: { topic: string } }){

  const MainComp = dynamic(() => import(`./designs/Design${designSelected}`));
  const decodedTopic = decodeURIComponent(params.topic);
  return (<>
    <TopicHeader text={decodedTopic}/>
    <MainComp topic={decodedTopic}/>
  </>)

}