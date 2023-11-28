"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import designSelected from './infoStore/designSelected';

export default function Home() {
  
  const WholeComp = dynamic(() => import(`./designs/Design${designSelected}`));

  return (<>
    <WholeComp/>
  </>)


}