import React from "react";
import ArticleHeader from "./Header";
import Main from "./Main";

export default function Comp(props: {topic:string, subTopic:string, content: any}){
  return <>
    <ArticleHeader text={props.content[0][1]}/>
    <Main topic={props.topic} subTopic={props.subTopic} contentArray={props.content}/>
  </>

}