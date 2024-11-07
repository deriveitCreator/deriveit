import React from 'react';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import { getTopicColorInfo, colorInfoType } from '../../infoStore/topicsInfo';
import SubTopicHeader from './designs/SubTopicHeader';
import dynamic from 'next/dynamic';

var domainName: string;
if((!process.env.NODE_ENV || process.env.NODE_ENV === 'development'))
  domainName = "http://localhost:3001";
else domainName = "https://www.deriveit.net";

export type styleObjectType = {
  headerBgColor: string;
  bgColor: string;
  footerColor: string;
  borderColor: string;
}

export type ImportType = {
  topic: string,
  subTopic: [string,string[]],
  styleObject?: styleObjectType
}

export default async function Page({ params }: { params: { topic: string, subTopic: string } }){
  const designSelectedVal = parseInt(cookies().get("designSelected")?.value!) || DEFAULT_DESIGN_SELECTION;
  const decodedTopic = decodeURIComponent(params.topic);
  const decodedSubTopic = decodeURIComponent(params.subTopic);

  const topicLinks = await fetch(domainName + "/infoStore/getTopicLinks", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({topic: decodedTopic, subTopic: decodedSubTopic}),
  })
  .then(res => res.json())
  .catch(() => null);

  if (!topicLinks) return notFound();

  let styleObject: colorInfoType | null;
  if (designSelectedVal==1) styleObject = null;
  else if (designSelectedVal==2) styleObject = getTopicColorInfo(decodedTopic);
  else return <p>The design value is wrong, please report this.</p>;

  const MainComp = dynamic<ImportType>(() => import(`./designs/Design${designSelectedVal}`));

  var curSubTopic: [string, string[]] = ["",[""]];
  for(let i in topicLinks){
    if(topicLinks[i][0] === decodedSubTopic){
      curSubTopic = topicLinks[i];
      break;
    }
  };

  if(designSelectedVal === 1) return <>
    <SubTopicHeader styleNumber={designSelectedVal} name={decodedTopic.replaceAll("_"," ")}/>
    <MainComp topic={decodedTopic} subTopic={curSubTopic}/>
  </>
  else if(designSelectedVal === 2) {
    let bgColor = styleObject!.bgColor;
    return <div style={{backgroundColor: bgColor, minHeight:"100vh"}}>
      <SubTopicHeader styleNumber={designSelectedVal} styleObject={styleObject!} name={decodedTopic.replaceAll("_"," ")}/>
      <MainComp topic={decodedTopic} subTopic={curSubTopic} styleObject={styleObject!}/>
    </div>
  }
  else throw new Error("Wrong design number value");
}