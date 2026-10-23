import { cookies } from 'next/headers';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import dynamic from 'next/dynamic';
import React from 'react';
import { CompImportType } from './page';

const ARTICLE_CONTENT: string[][] = [
  ["h1","404 error"],
  ["pmain",`Article not found, please check the article title or topic title in the URL.`],
  ["pmain","If you think this is a mistake, please report it."],
];

export default async function Custom404() {
  const designSelectedVal = parseInt((await cookies()).get("designSelected")?.value!)|| DEFAULT_DESIGN_SELECTION;
  const Comp = dynamic<CompImportType>(() => import(`./design${designSelectedVal}Stuff/Comp`));
  
  return <>
    <Comp topic={"topic2"} subTopic={"subTopic2"} content={ARTICLE_CONTENT}/>
  </>
}