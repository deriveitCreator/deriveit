import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import ClientPart from './[topic]/[subTopic]/[article]/clientPart';

const ARTICLE_CONTENT: string[][] = [
  ["h1","404 error"],
  ["pmain",`Article not found, please check the article title or topic title in the URL.`],
  ["pmain","If you think this is a mistake, please report it."]
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "404 Error"
  }
}

export default function Custom404() {
  const designSelectedVal = parseInt(cookies().get("designSelected")?.value!)|| DEFAULT_DESIGN_SELECTION;
  return <ClientPart topic={"topic2"} subTopic={"subTopic2"} contentArray={ARTICLE_CONTENT} design={designSelectedVal}/>;
}