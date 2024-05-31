
import React from 'react';
import { cookies } from 'next/headers';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import ClientPart from './clientPart';

var domainName: string;
if((!process.env.NODE_ENV || process.env.NODE_ENV === 'development'))
  domainName = "http://localhost:3001";
else domainName = "https://www.deriveit.net";

export default async function Page({ params }: { params: { topic: string, subTopic: string } }){
  const designSelectedVal = parseInt(cookies().get("designSelected")?.value!) || DEFAULT_DESIGN_SELECTION;
  const decodedTopic = decodeURIComponent(params.topic);
  const decodedSubTopic = decodeURIComponent(params.subTopic).replaceAll(" ","_").toLowerCase();

  const topicLinks = await fetch(domainName + "/infoStore/getTopicLinks", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({topic: decodedTopic}),
  }).then((res) => res.json());
  
  return <ClientPart
    topic={decodedTopic}
    subTopic={decodedSubTopic}
    topicsInfoState={topicLinks}
    design={designSelectedVal}
  />;
}