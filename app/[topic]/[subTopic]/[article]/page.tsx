"use client"

import React, { useEffect, useRef, useState } from 'react';
import ArticleHeader from './designs/ArticleHeader';
import dynamic from 'next/dynamic';
import designSelected from '@/app/infoStore/designSelected';
import ImageWrapper from '@/app/components/ImageWrapper';
import Latex from 'react-latex-next';
import 'katex/dist/katex.min.css';
import { cursiveMain, textMain } from '@/app/infoStore/fonts';
import { citationList } from '@/app/infoStore/sourcesForCitation';

export default function Page({ params }: { params: { topic:string, subTopic: string, article: string } }) {
  const [contentVals, setCV] = useState({headerVal: "", bodyVal: null, first: true});

  const MainComp = dynamic(() => import(`./designs/Design${designSelected}`));
  const PMain = dynamic(() => import(`./designs/Design${designSelected}`).then(res => res.PMain));

  useEffect(()=>{
    document.documentElement.style.overflowY = "scroll";
    fetch("../../../infoStore", {
      method:"POST",
      cache: "no-cache",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({topic: decodeURIComponent(params.topic.toLowerCase()), subTopic: decodeURIComponent(params.subTopic), article: decodeURIComponent(params.article)})
    }).then( res =>{ res.json().then(j=>{
      let bodyChildren = [];
      for(let i = 1; i<j.length; i++){
        switch(j[i][0]){
          case "h3":
            bodyChildren.push(<h3 className={' text-4xl underline '+cursiveMain.className} key={i} dangerouslySetInnerHTML={{__html: j[i][1]}}></h3>);
            break;
          case "pmain":
            bodyChildren.push(<PMain mode={1} key={i}>{j[i][1] }</PMain>);
            break;
          case "pmain2":
            bodyChildren.push(<PMain mode={2} key={i}>{j[i][1] }</PMain>);
            break;
          case "subText":
            bodyChildren.push(<PMain mode={3} key={i}>{j[i][1] }</PMain>);
            break;
          case "figure":
            bodyChildren.push(<ImageWrapper
              key={i}
              alt=""
              h =' h-[240px]'
              className={' flex flex-col items-center justify-center my-4 '+cursiveMain.className}
              bor="border-black border-2"
              animate={true}
              src={`/${decodeURIComponent(params.topic.toLowerCase())}/${decodeURIComponent(params.subTopic)}/${j[i][1][0]}`}
              figcaption ={j[i][1][1]}
            />);
            break;
          case ("displayimg"):
            bodyChildren.push(<ImageWrapper
              key={i}
              alt=""
              h =' h-[200px]'
              className=' flex items-center justify-center my-4 '
              bor="border-black border-2"
              animate={true}
              src={`/${decodeURIComponent(params.topic.toLowerCase())}/${decodeURIComponent(params.subTopic)}/${j[i][1]}`}
            />);
            break;
          case ("displayimg2"):
            bodyChildren.push(<ImageWrapper
              key={i}
              alt=""
              h =' h-[220px]'
              className=' flex items-center justify-center my-4 '
              bor="border-black border-2"
              animate={true}
              src={`/${decodeURIComponent(params.topic.toLowerCase())}/${decodeURIComponent(params.subTopic)}/${j[i][1]}`}
            />);
            break;
          case "displayFormula":
            bodyChildren.push(<div
              key={i}
              className={' text-xl grid h-[200px] items-center justify-items-center'}
              style={{gridTemplateColumns:"auto 80% auto"}}
            ><span></span><div className={' border-black border-2 bg-white px-1 overflow-x-auto h-min w-min'}>
              <Latex strict>{j[i][1]}</Latex>
            </div><span></span></div>);
            break;
          case "ol":
            bodyChildren.push(<ol className={`${textMain.className} list-decimal text-2xl mx-9 mb-3`} key={i} dangerouslySetInnerHTML={{__html: j[i][1]}}></ol>);
            break;
          case "ul":
            bodyChildren.push(<ul className={`${textMain.className} list-disc text-2xl mx-9 mb-3`} key={i} dangerouslySetInnerHTML={{__html: j[i][1]}}></ul>);
            break;
          case "source_format":
            bodyChildren.push(<section key={i}>
              <hr className=' mt-8 border-black border' style={{transform:"skewX(40deg)"}}/>
              <h3 className={' text-4xl underline '+cursiveMain.className} key={i}>Sources:</h3>
              <ol id='source_format' className={`${textMain.className} list-decimal text-xl mx-6`}>{(j[i][1]).map((stuff:any, i:number)=>{
                return <LiForSources key={i}>{stuff}</LiForSources>;
              })}</ol>
            </section>);
            break;
          default:
            bodyChildren.push(<p className={'bg-red-950 text-xl w-full text-center text-red-600'} key={i}>There was a problem rendering this.<br/>Please screenshot and report this.</p>);
        }
      }
      setCV({headerVal: j[0][1], bodyVal: bodyChildren})
    })})
  },[]);

  return <>
    <ArticleHeader text={contentVals.headerVal}/>
    <MainComp>{contentVals.bodyVal}</MainComp>
  </>

}


function LiForSources(props: {children: string}){
  const refConst = useRef(null);
  const [htmlVar, changeHTML] = useState(props.children);
  
  useEffect(()=>{
    let thisEl = refConst.current.children[0];
    if(thisEl.tagName ==="CITE") changeHTML(citationList[thisEl.attributes.classname.textContent]);
  },[]);
  
  return <li ref={refConst} dangerouslySetInnerHTML={{__html: htmlVar}}></li>;
}