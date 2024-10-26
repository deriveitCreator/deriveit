import React from "react";
import ArticleHeader from "./Header";
import ClientPart from "./ClientPart";
import styles from "./design2.module.scss";
import Image from 'next/image';
import { mainTextFont, headingFont, printFont2 } from "@/app/infoStore/fonts";

export default function Comp(props: {topic:string, subTopic:string, content: any}){
  return <>
    <ArticleHeader text={props.content[0][1]}/>
    <main id={styles.main} className={`mb-10`}>{
      getBodyContent(props.topic, props.subTopic, props.content)
    }</main>
    <section>
      {/*@ts-ignore*/}
      <div id={styles.idDiv} align="center">
        <ins
          className="adsbygoogle"
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-4860967711062471"
          data-ad-slot="6823528647"
        ></ins>
      </div>
    </section>
    <ClientPart />
  </>
}

function getBodyContent(topic:string, subTopic:string, j: [[string, any]]){
  var bodyChildren = [];
  var imageParentStyle: any = {position:"relative",display:"flex",justifyContent:"center",alignContent:"center",marginTop:"16px",marginBottom:"16px"};
  for(let i = 1; i<j.length; i++){
    switch(j[i][0]){
      case "h2":
        bodyChildren.push(<H2Main key={i}>{j[i][1]}</H2Main>);
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
        bodyChildren.push(
          <figure key={i} className={mainTextFont.className} style={{height:"240px", fontWeight:"bold" , ...imageParentStyle, flexDirection:"column"}}>
            <Image
              alt=""
              src={`/${topic}/${subTopic}/${j[i][1][0]}`}
              fill
              style={{objectFit:"contain"}}
            />
            <figcaption>{j[i][1][1]}</figcaption>
          </figure>
        );
        break;
      case "displayimg":
        bodyChildren.push(<div key={i} style={{height:"200px", ...imageParentStyle}}><Image
          alt=""
          src={`/${topic}/${subTopic}/${j[i][1]}`}
          fill
          style={{objectFit:"contain"}}
        /></div>);
        break;
      case "displayimg2":
        bodyChildren.push(<div key={i} style={{height:"220px", ...imageParentStyle}}><Image
          alt=""
          src={`/${topic}/${subTopic}/${j[i][1]}`}
          fill
          style={{objectFit:"contain"}}
        /></div>);
        break;
      case "displayFormula":
        bodyChildren.push(<div
          key={i}
          className={' text-xl grid items-center justify-items-center min-h-[150px] '}
        >
          <div className={' bg-white px-1 overflow-x-auto h-min w-11/12 '} style={{overflow:"visible"}}>{j[i][1]}</div>
        </div>);
        break;
      case "ol":
        bodyChildren.push(<ListComp numbered={true} key={i} content={j[i][1]}/>);
        break;
      case "ul":
        bodyChildren.push(<ListComp numbered={false} key={i} content={j[i][1]}/>);
        break;
      case "source_format":
        bodyChildren.push(<SourcesSectionInner key={i} content={j[i][1]}/>);
        break;
      default:
        bodyChildren.push(<p className={'bg-red-950 text-xl w-full text-center text-red-600'} key={i}>There was a problem rendering this.<br/>Please screenshot and report this.</p>);
    }
  }
  return bodyChildren;
}

function H2Main({children}: {children: string}){
  return <h2 className={styles.subHeading + ' underline font-bold mb-4 ' + headingFont.className} dangerouslySetInnerHTML={{__html: children}}></h2>
}

function PMain({children, mode}: {children: string, mode:number}){

  if(mode === 1) return <p className={`${styles.pmain} ${mainTextFont.className} mb-4 leading-8 [&>.overLine]:border-t-2 [&>span>.katex]:text-2xl [&>.overLine]:border-black [&>.overLine]:inline-block [&>.overLine]:leading-7 [&>a]:text-[#24e] [&>a]:underline [&>sup]:text-[60%] [&>sup]:font-bold oldstyle-nums `} dangerouslySetInnerHTML={{__html: children}}></p>
  else if(mode === 2) return <p className={`${styles.pmain2} ${mainTextFont.className} mb-4 leading-8 [&>.overLine]:border-t-2 [&>span>.katex]:text-2xl [&>.overLine]:border-black [&>.overLine]:inline-block [&>.overLine]:leading-7 [&>a]:text-[#24e] [&>a]:underline [&>sup]:text-[60%] [&>sup]:font-bold oldstyle-nums `} dangerouslySetInnerHTML={{__html: children}}></p>
  else if(mode === 3) return <p className={`${styles.subText} ${mainTextFont.className} mb-4 leading-7 [&>.overLine]:border-t-2 [&>span>.katex]:text-2xl [&>.overLine]:border-black [&>.overLine]:inline-block [&>.overLine]:leading-6 [&>a]:text-[#24e] [&>a]:underline [&>sup]:text-[60%] text-zinc-700 oldstyle-nums `} dangerouslySetInnerHTML={{__html: children}}></p>
  else {
    alert(`There is an error, please leave this page and report this:\n"PMain (Design 2) mode ${mode} reached!"`);
    return null;
  }
}

function ListComp(props:{numbered: boolean, content:string}){
  if(props.numbered) return <ol className={`${styles.listStuff} ${mainTextFont.className} list-decimal mb-4 leading-8`} dangerouslySetInnerHTML={{__html: props.content}}></ol>
  else return <ul className={`${styles.listStuff} ${mainTextFont.className} list-disc mb-4 leading-8`} dangerouslySetInnerHTML={{__html: props.content}}></ul>
}

function SourcesSectionInner(props: {content: string[]}){
  return <section>
    <hr className=' mt-8 border-black border' style={{transform:"skewX(40deg)"}}/>
    <h3 className={' text-4xl underline font-bold '+headingFont.className}>Sources:</h3>
    <div style={{overflowX:"auto"}}>
      <ol id='source_format' className={`${printFont2.className} list-decimal text-xl mx-8`}>{(props.content).map((stuff:any, i:number)=>{
        return <LiForSources key={i}>{stuff}</LiForSources>;
      })}</ol>
    </div>
  </section>
}

function LiForSources(props: {children: string}){
  return <li dangerouslySetInnerHTML={{__html: props.children}}></li>;
}
