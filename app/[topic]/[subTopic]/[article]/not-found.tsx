
import { cookies, type UnsafeUnwrappedCookies } from 'next/headers';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import dynamic from 'next/dynamic';
import React from 'react';

const ARTICLE_CONTENT: string[][] = [
  ["h1","404 error"],
  ["pmain",`Article not found, please check the article title or topic title in the URL.`],
  ["pmain","If you think this is a mistake, please report it."]
];

type CompImportType = {
  topic: string,
  subTopic: string,
  content: string[][],
}

export default function Custom404() {
  const designSelectedVal = parseInt((cookies() as unknown as UnsafeUnwrappedCookies).get("designSelected")?.value!)|| DEFAULT_DESIGN_SELECTION;
  const Comp = dynamic<CompImportType>(() => import(`./design${designSelectedVal}Stuff/Comp`));
  
  return <>
    <Comp topic={"topic2"} subTopic={"subTopic2"} content={ARTICLE_CONTENT}/>
  </>
}