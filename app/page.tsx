"use client"

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useCookies } from 'next-client-cookies';
import { DEFAULT_DESIGN_SELECTION } from './infoStore/designInfo';

export default function Home() {
  useEffect(()=>{
    document.documentElement.style.overflow = "hidden"
  });
  const designSelectedVal = parseInt(useCookies().get('designSelected')!) || DEFAULT_DESIGN_SELECTION;
  const WholeComp = dynamic(() => import(`./mainStyles/design${designSelectedVal}Main`));
  return <WholeComp/>;
}
