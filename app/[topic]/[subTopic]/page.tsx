"use client"

import React from 'react';
import designSelected from '../../infoStore/designSelected';
import dynamic from 'next/dynamic';
import SubTopicHeader from './designs/SubTopicHeader';

export default function Page({ params }: { params: { topic: string, subTopic: string } }){

  const MainComp = dynamic(() => import(`./designs/Design${designSelected}`));
  const decodedTopic = decodeURIComponent(params.topic);
  return (<>
    <SubTopicHeader text={decodedTopic}/>
    <MainComp topic={decodedTopic} subTopic={decodeURIComponent(params.subTopic)}/>
  </>)

}