import React from 'react';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import ClientPart from './clientPart';
import { LinksWithTopicName, getTopicColorInfo, colorInfoType } from '../../infoStore/topicsInfo';

var domainName: string;
if((!process.env.NODE_ENV || process.env.NODE_ENV === 'development'))
  domainName = "http://localhost:3001";
else domainName = "https://www.deriveit.net";

const NOT_FOUND_VAL = "404";

export default async function Page({ params }: { params: { topic: string, subTopic: string } }){
  const designSelectedVal = parseInt(cookies().get("designSelected")?.value!) || DEFAULT_DESIGN_SELECTION;
  const decodedTopic = decodeURIComponent(params.topic);
  const decodedSubTopic = decodeURIComponent(params.subTopic);

  const topicLinks = await fetch(domainName + "/infoStore/getTopicLinks", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({topic: decodedTopic, subTopic: decodedSubTopic}),
  })
  .then(res => (res.status===404) ? NOT_FOUND_VAL : res.json());

  if (topicLinks === NOT_FOUND_VAL) return notFound();

  let styleObject: colorInfoType | null;
  if (designSelectedVal==1) styleObject = null;
  else if (designSelectedVal==2) styleObject = getTopicColorInfo(decodedTopic);
  else return null;
  
  return <ClientPart
    topic={decodedTopic}
    subTopic={decodedSubTopic}
    topicInfo={topicLinks}
    design={designSelectedVal}
    name={LinksWithTopicName[decodedTopic]}
    styleObject={styleObject}
  />;
}