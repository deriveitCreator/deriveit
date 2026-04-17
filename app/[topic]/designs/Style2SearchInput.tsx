"use client"

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import styles from "./style2.module.scss";
import { mainTextFont } from "@/app/infoStore/fonts";

async function loadXenova() {
  const { env, pipeline, cos_sim } = await import('@xenova/transformers');
  env.allowRemoteModels = true;
  env.allowLocalModels = false;
  return {pipeline: pipeline, cos_sim: cos_sim};
}

export default function Style2SearchInput(props: {borderColor: string, inputBgColor: string, topicFeatureVector: string, topicsInfo:[string, string[]][], changeTIS: Dispatch<SetStateAction<[string, string[]][]>>}) {
  const [inputDisabled, changeID] = useState(false);
  const [modelSet, setModel] = useState(false);
  const extractor = useRef<any>(null);
  const cos_sim = useRef<any>(null);
  const inputVal = useRef("");
  const timer = useRef<number>(null);
  const featureVecParsed = useRef(JSON.parse(props.topicFeatureVector)).current;

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
      extractor.current(val, { pooling: 'mean', normalize: true }).then((res: any)=>{
        const newTopicsList: [string, string[]][] = [];
        const searchList = res.tolist()[0];
        for(let i = 0; i < featureVecParsed.length; i++){
          const newSubtopicList: [string, string[]] = [featureVecParsed[i][0],[]];
          for (let k = 0; k < featureVecParsed[i][1].length; k++){
            const score = cos_sim.current(searchList, featureVecParsed[i][1][k]);
            if (score > 0.2) newSubtopicList[1].push(props.topicsInfo[i][1][k]);
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
  }, [inputDisabled]); 

  return <div id={styles.searchBarDiv} style={{backgroundColor: props.borderColor, opacity: modelSet ? 1 : 0}}>
    <style jsx>{`
      input::placeholder{
        color: ${props.borderColor};
      }
    `}</style>
    <input disabled={inputDisabled} name="searchBar" placeholder="Search..." type="text" className={`${mainTextFont.className}`} style={{backgroundColor: props.inputBgColor, color: props.borderColor, opacity: inputDisabled ? 0.5 : 1}} onKeyUp={(e) => {
      inputVal.current = e.currentTarget.value;
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(()=>{changeID(true);}, 1500);
    }}/>
  </div>;
}