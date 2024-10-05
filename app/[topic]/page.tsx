import React from 'react';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import ClientPart from './clientPart';
import { getTopicColorInfo, colorInfoType } from '../infoStore/topicsInfo';

var domainName: string;
if((!process.env.NODE_ENV || process.env.NODE_ENV === 'development'))
  domainName = "http://localhost:3001";
else domainName = "https://www.deriveit.net";

export default async function Page({ params }: { params: { topic: string } }){
  const designSelectedVal = parseInt(cookies().get("designSelected")?.value!) || DEFAULT_DESIGN_SELECTION;
  const decodedTopic = decodeURIComponent(params.topic);
  
  const topicLinks = await fetch(domainName + "/infoStore/getTopicLinks", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({topic: decodedTopic}),
  })
  .then(res => res.json())
  .catch(() => null);

  if (!topicLinks) return notFound();

  let styleObject: colorInfoType | null;
  if (designSelectedVal==1) styleObject = null;
  else if (designSelectedVal==2) styleObject = getTopicColorInfo(decodedTopic);
  else return <p>The design value is wrong, please report this.</p>;

  return <ClientPart
    topic={decodedTopic}
    topicsInfoState={topicLinks}
    design={designSelectedVal}
    name={decodedTopic.replaceAll("_", " ")}
    styleObject={styleObject}
  />;

}