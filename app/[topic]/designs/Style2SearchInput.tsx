"use client"

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import styles from "./style2.module.scss";
import { mainTextFont } from "@/app/infoStore/fonts";
import { FeatureExtractionPipeline } from "@xenova/transformers/types/pipelines";

async function loadXenova() {
  const { env, pipeline, cos_sim } = await import('@xenova/transformers');
  env.allowRemoteModels = true;
  env.allowLocalModels = false;
  return {pipeline: pipeline, cos_sim: cos_sim};
}

export default function Style2SearchInput(props: {borderColor: string, inputBgColor: string, topicFeatureVector: Array<[string, Array<Array<number>>]>, topicsInfo:[string, string[]][], changeTIS: Dispatch<SetStateAction<[string, string[]][]>>}) {
  const [inputDisabled, changeID] = useState(false);
  const changeInDisToFalseNextRender = useRef(false);
  const [modelSet, setModel] = useState(false);
  const extractor = useRef<FeatureExtractionPipeline | null>(null);
  const cos_sim = useRef<(arr1: number[], arr2: number[]) => number | null>(null);
  const inputVal = useRef("");
  const timer = useRef<number>(null);
  const featureVecParsed = useRef(props.topicFeatureVector).current;

  useEffect(()=>{
    loadXenova().then((res) => {
      res.pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2')
      .then(async (model)=>{if (model) {
        extractor.current = model;
        cos_sim.current = res.cos_sim;
        setModel(true);
      }})
      .catch((err)=>{console.error("Pipeline failed to load:", err)});
    });
  },[]);

  useEffect(()=>{
    if (!extractor.current) return;
    
    let val = inputVal.current;
    if (val.length < 3) {
      changeInDisToFalseNextRender.current = true;
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
            const score = (cos_sim.current!)(searchList, featureVecParsed[i][1][k]);
            if (score! > 0.2) newSubtopicList[1].push(props.topicsInfo[i][1][k]);
          }
          if (newSubtopicList[1].length) newTopicsList.push(newSubtopicList);
        }
        changeInDisToFalseNextRender.current = true;
        props.changeTIS(newTopicsList);
      });
    }
    catch(e){
      console.error("Critical error:", e);
      changeID(false);
    }
  }, [inputDisabled]); 

  useEffect(() => {
    // I want to set topicInfo first, and then enable input after render.
    if (changeInDisToFalseNextRender.current) {
      changeInDisToFalseNextRender.current = false;
      changeID(false);
    }
  })

  return <div id={styles.searchBarDiv} style={{backgroundColor: props.borderColor, opacity: modelSet ? 1 : 0}}>
    <style jsx>{`
      input::placeholder{
        color: ${props.borderColor};
      }
    `}</style>
    <input 
      disabled={inputDisabled} 
      name="searchBar" 
      placeholder="Search..." 
      type="text" 
      className={`${mainTextFont.className}`} 
      style={{backgroundColor: props.inputBgColor, color: props.borderColor, opacity: inputDisabled ? 0.5 : 1}} 
      onKeyUp={(e) => {
        inputVal.current = e.currentTarget.value;
        if (timer.current) window.clearTimeout(timer.current);
        timer.current = window.setTimeout(()=>{changeID(true);}, 500);
      }}
    />
  </div>;
}