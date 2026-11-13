import { cookies } from 'next/headers';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import dynamic from 'next/dynamic';
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
    <title>Article Not Found | DeriveIt</title>
    <meta name="description" content="The page you are looking for does not exist." />
    <meta name="robots" content="noindex" />
    <Comp topic={""} subTopic={""} content={ARTICLE_CONTENT}/>
  </>
  ;
}