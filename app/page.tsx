import React from 'react';
import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';
import { DEFAULT_DESIGN_SELECTION } from './infoStore/designInfo';

export default async function Home() {
  const cookieStore = await cookies();
  const designSelectedVal = parseInt(cookieStore.get("designSelected")?.value!)|| DEFAULT_DESIGN_SELECTION;
  const WholeComp = dynamic(() => import(`./mainStyles/design${designSelectedVal}Main`));
  return <WholeComp/>;
}
