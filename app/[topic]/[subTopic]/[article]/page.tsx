import { cookies } from 'next/headers';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

export type CompImportType = {
  topic: string,
  subTopic: string,
  content: (string | string[])[][],
}

export default async function Page(
  props: { params: { topic:string, subTopic: string, article: string } }
) {
  const params = await props.params;
  const topic2 = decodeURIComponent(params.topic);
  const subTopic2 = decodeURIComponent(params.subTopic);
  const article2 = decodeURIComponent(params.article);
  try{
    const {default: content} = await import(`@/app/infoStore/contents/${topic2}/${subTopic2}/${article2}`);
    const designSelectedVal = parseInt((await cookies()).get("designSelected")?.value!) || DEFAULT_DESIGN_SELECTION;
    const Comp = dynamic<CompImportType>(() => import(`./design${designSelectedVal}Stuff/Comp`));
    return <Comp topic={topic2} subTopic={subTopic2} content={content}/>;
  }
  catch(err){
    return notFound();
  }
}