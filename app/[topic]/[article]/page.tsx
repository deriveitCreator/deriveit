"use client"
import { useEffect, useState } from 'react';
import { cursiveMain } from '../../infoStore/fonts';

export default function Page({ params }: { params: { article: string, topic:string } }) {
  const [titleColor,setTC] = useState("text-gray-100");
  useEffect(()=>{
    document.documentElement.style.overflowY = "scroll";
    setTC("text-black");
  },[])

  return <>
  <header className='border-t-4 border-gray-600 bg-gray-100'><h1 className={`${cursiveMain.className} border-b-4 border-gray-600 text-center text-4xl capitalize leading-[74px] h-20 w-full mb-8 ${titleColor}`} style={{transition:"color 0.5s linear"}}>{
    params.article.replaceAll("_"," ")
  }</h1></header>
  <main style={{marginBottom:"20px",minHeight:"100vh"}}><div>This page: {params.article}</div></main>
</>

}
