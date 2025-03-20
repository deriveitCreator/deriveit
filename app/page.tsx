import React from 'react';
import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';
import { DEFAULT_DESIGN_SELECTION } from './infoStore/designInfo';

export default async function Home() {
  const cookieStore = await cookies();
  const designSelectedVal = parseInt(cookieStore.get("designSelected")?.value!)|| DEFAULT_DESIGN_SELECTION;
  if (designSelectedVal == 1){
    const WholeComp = dynamic(() => import(`./mainStyles/design1Whole`));
    return <WholeComp/>;
  }
  else if (designSelectedVal == 2){
    const {default: MainComp} = await import(`./mainStyles/design2MainComp`);
    const WholeComp = dynamic(() => import(`./mainStyles/design2Whole`));
    return <WholeComp mainComp={MainComp}/>;
  }
  else{
    throw new Error("Wrong design value");
  }
}
