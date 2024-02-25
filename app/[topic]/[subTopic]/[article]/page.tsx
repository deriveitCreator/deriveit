"use client"

import dynamic from 'next/dynamic';
import { useCookies } from 'next-client-cookies';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import { useEffect, useState, memo } from 'react';

type ImportType = {
  topic: string,
  subTopic: string,
  article: string
}

export default function Page({ params }: { params: { topic:string, subTopic: string, article: string } }) {
  const topic2 = decodeURIComponent(params.topic.toLowerCase());
  const subTopic2 = decodeURIComponent(params.subTopic);
  const article2 = decodeURIComponent(params.article);
  const [contentArray, setContentArray] = useState([['h1',''],['pmain','Fetching data from the backend...']]);

  useEffect(() => {
    document.documentElement.style.overflowY = "auto";
    document.documentElement.classList.remove("scroll2");
    fetch("../../../infoStore/getArticleContent", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({topic: topic2, subTopic: subTopic2, article: article2})
    }).then( res =>{ res.json().then(j=>{
      document.getElementsByTagName("title")[0].innerText = j[0];
      setContentArray(j[1]);
    })});
  },[]);

  const designSelectedVal = parseInt(useCookies().get('designSelected')!) || DEFAULT_DESIGN_SELECTION;
  const MainComp = dynamic<ImportType>(() => import(`./designs/Design${designSelectedVal}`));
  //@ts-ignore
  return <MainComp topic={topic2} subTopic={subTopic2} contentArray={contentArray}/>;
}