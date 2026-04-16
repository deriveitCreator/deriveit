"use client"

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import styles from "./style2.module.scss";
import { mainTextFont } from "@/app/infoStore/fonts";
//import { pipeline, cos_sim, FeatureExtractionPipeline } from '@huggingface/transformers';

export default function Style2SearchInput(props: {borderColor: string, inputBgColor: string, topicFeatureVector: string, topicsInfo:[string, string[]][], changeTIS: Dispatch<SetStateAction<[string, string[]][]>>}) {
  const [inputDisabled, changeID] = useState(false);
  //const [modelSet, setModel] = useState(false);
  //const extractor = useRef<FeatureExtractionPipeline | null>(null);
  const inputVal = useRef("");
  const featureVecParsed = useRef(JSON.parse(props.topicFeatureVector)).current;
/* 
  useEffect(()=>{
    if (!extractor.current)
    pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2')
    .then((model)=>{if (model) {
      extractor.current = model;
      setModel(true);
    }})
    .catch((err)=>{console.error("Pipeline failed to load:", err)});
  },[]);

  useEffect(()=>{
    if (inputDisabled) {
      changeID(false);
      return;
    }
    let val = inputVal.current;
    if ((val.length < 3) || !(extractor.current)) {
      props.changeTIS(props.topicsInfo);
      return;
    }
    try{
      extractor.current(val, { pooling: 'mean', normalize: true }).then((res)=>{
        const newTopicsList: [string, string[]][] = [];
        const searchList = res.tolist()[0];
        for(let i = 0; i < featureVecParsed.length; i++){
          const newSubtopicList: [string, string[]] = [featureVecParsed[i][0],[]];
          for (let k = 0; k < featureVecParsed[i][1].length; k++){
            const score = cos_sim(searchList, featureVecParsed[i][1][k]);
            if (score > 0.3) newSubtopicList[1].push(props.topicsInfo[i][1][k]);
          }
          if (newSubtopicList[1].length) newTopicsList.push(newSubtopicList);
        }
        props.changeTIS(newTopicsList);
      });
    }
    catch(e){
      console.error("Critical error:", e);
      changeID(false);
    }
  }, [inputDisabled]); */

  return <div id={styles.searchBarDiv} style={{backgroundColor: props.borderColor}}>
    <style jsx>{`
      input::placeholder{
        color: ${props.borderColor};
      }
    `}</style>
    <input disabled={inputDisabled} name="searchBar" placeholder="Search..." type="text" className={`${mainTextFont.className}`} style={{backgroundColor: props.inputBgColor, color: props.borderColor, opacity: inputDisabled ? 0.5 : 1, transition:"opacity 0.2s linear"}} onKeyUp={(e) => {
      if (e.key === "Enter") {
        inputVal.current = e.currentTarget.value;
        changeID(true);
      }
    }}/>
  </div>;
}