import { cookies } from 'next/headers';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

var domainName: string;
var cacheType: RequestCache;
if((!process.env.NODE_ENV || process.env.NODE_ENV === 'development')){
  domainName = "http://localhost:3001";
  cacheType = "no-store";
}
else{
  domainName = "https://www.deriveit.net";
  cacheType = "default";
}

export type CompImportType = {
  topic: string,
  subTopic: string,
  content: (string | string[])[][],
}

export default async function Page(
  props: { params: Promise<{ topic:string, subTopic: string, article: string }> }
) {
  const params = await props.params;
  const topic2 = decodeURIComponent(params.topic.toLowerCase());
  const subTopic2 = decodeURIComponent(params.subTopic)
  let {default: content} = await import(`../../../infoStore/contents/${topic2}/${subTopic2}/${decodeURIComponent(params.article)}`);

  if (!content) return notFound();
  const designSelectedVal = parseInt((await cookies()).get("designSelected")?.value!)|| DEFAULT_DESIGN_SELECTION;
  const Comp = dynamic<CompImportType>(() => import(`./design${designSelectedVal}Stuff/Comp`));
  //@ts-ignore
  return <Comp topic={topic2} subTopic={subTopic2} content={content}/>
}