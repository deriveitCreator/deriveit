"use client"

import dynamic from 'next/dynamic';
import { useCookies } from 'next-client-cookies';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import { useEffect } from 'react';

export default function Page({ params }: { params: { topic:string, subTopic: string, article: string } }) {
  useEffect(() => {window.scrollTo(0,0);});
  const designSelectedVal = parseInt(useCookies().get('designSelected')!) || DEFAULT_DESIGN_SELECTION;
  const MainComp = dynamic(() => import(`./designs/Design${designSelectedVal}`));
  //@ts-ignore
  return <MainComp topic={decodeURIComponent(params.topic.toLowerCase())} subTopic={decodeURIComponent(params.subTopic)} article={decodeURIComponent(params.article)} />
}