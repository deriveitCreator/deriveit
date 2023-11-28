// @ts-nocheck
  "use client"

import React, { useEffect, useRef, useState} from 'react';
import designSelected from '../infoStore/designSelected';
import { cursiveMain } from '../infoStore/fonts';
import { getTopicLinks } from '../infoStore/topicsInfo';

export default function Page({ params }: { params: { topic: string } }){

  return <>
    <header className='border-t-4 border-gray-600'><h1 className={`${cursiveMain.className} bg-gray-100 border-b-4 border-gray-600 text-center text-4xl  leading-[74px] h-20 w-full mb-8`}>{
      params.topic.replace(/%20/g," ")  
    }</h1></header>
    {getPageContent(params.topic)}
  </>
}

function getPageContent(topic){
  const [DesignState,setDS] = useState(null);
  const topicsInfoState = useRef(null);
  import(`./designs/design${designSelected}`).then((res) => {
    topicsInfoState.current = getTopicLinks(topic);
    setDS(res);
  });

  if(DesignState !== null){
    return <Container>{
      topicsInfoState.current.map((subArr,i)=>{
        return <section key={i}>
          <DesignState.StyledH2 text={subArr[0]}/>
          {(subArr[1]).map((val:string,i)=> {
            if(val.charAt(val.length-1) === "%"){ return <DesignState.StyledP
              key={i}
              text={val.substring(0,val.lastIndexOf('%',val.length-2)).replaceAll("_"," ")}
              link={val.substring(val.lastIndexOf('%',val.length-2)+1,val.length-1)}
              topic={topic}
              data-id={i}
            />;
            }else return <DesignState.StyledP
              key={i}
              text={val.replaceAll("_"," ")}
              link={val.replaceAll(" ","_")}
              topic={topic}
              data-id={i}
            />;
          })}
        </section>
      })
    }</Container>
  }
  else return null;
}

function Container(props){
  "use client"
  const [curStyle,setStyle] = useState({opacity: 0, transition:"opacity 0.5s linear",marginBottom:"20px",minHeight:"100vh"});
  
  useEffect(()=>{
    window.setTimeout(()=>setStyle({...curStyle, opacity: 1}),500);
  },[]);

  return <main style={curStyle}>{props.children}</main>
}
