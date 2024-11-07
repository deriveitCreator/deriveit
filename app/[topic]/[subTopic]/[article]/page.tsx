import { cookies } from 'next/headers';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import React from 'react';

var domainName: string;
var cacheType: "default" | "no-store";
if((!process.env.NODE_ENV || process.env.NODE_ENV === 'development')){
  domainName = "http://localhost:3001";
  cacheType = "no-store";
}
else{
  domainName = "https://www.deriveit.net";
  cacheType = "default";
}

type CompImportType = {
  topic: string,
  subTopic: string,
  content: string[][],
}

export async function generateMetadata({ params }: { params: { topic:string, subTopic: string, article: string } }){
  const topic2 = decodeURIComponent(params.topic.toLowerCase());
  const subTopic2 = decodeURIComponent(params.subTopic);
  const article2 = decodeURIComponent(params.article);
  
  const fetchRes = await fetch(domainName + "/infoStore/getArticleContent", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({topic: topic2, subTopic: subTopic2, article: article2}),
    cache: cacheType
  }).then((res) => res.json())
  .catch(()=> null);

  return {
    title:  fetchRes ? fetchRes[0] : "404 error",
    robots: fetchRes ? "index, follow" : "noindex"
  }
}

export default async function Page({ params }: { params: { topic:string, subTopic: string, article: string } }) {
  const topic2 = decodeURIComponent(params.topic.toLowerCase());
  const subTopic2 = decodeURIComponent(params.subTopic);
  const article2 = decodeURIComponent(params.article);
  
  const fetchRes = await fetch(domainName + "/infoStore/getArticleContent", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({topic: topic2, subTopic: subTopic2, article: article2}),
    cache: cacheType
  }).then((res) => res.json())
  .catch(()=> null);

  if (!fetchRes) return notFound();
  const designSelectedVal = parseInt(cookies().get("designSelected")?.value!)|| DEFAULT_DESIGN_SELECTION;
  const Comp = dynamic<CompImportType>(() => import(`./design${designSelectedVal}Stuff/Comp`));
  
  //@ts-ignore
  return <Comp topic={topic2} subTopic={subTopic2} content={fetchRes[1]}/>
}