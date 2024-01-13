"use client"

import dynamic from 'next/dynamic';
import { useCookies } from 'next-client-cookies';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import { useEffect } from 'react';

type ImportType = {
  topic: string,
  subTopic: string,
  article: string
}

export default function Page({ params }: { params: { topic:string, subTopic: string, article: string } }) {
  useEffect(() => {
    document.documentElement.style.overflowY = "auto";
    document.documentElement.classList.remove("scroll2");
  });
  const designSelectedVal = parseInt(useCookies().get('designSelected')!) || DEFAULT_DESIGN_SELECTION;
  const MainComp = dynamic<ImportType>(() => import(`./designs/Design${designSelectedVal}`));
  return <MainComp topic={decodeURIComponent(params.topic.toLowerCase())} subTopic={decodeURIComponent(params.subTopic)} article={decodeURIComponent(params.article)} />
}