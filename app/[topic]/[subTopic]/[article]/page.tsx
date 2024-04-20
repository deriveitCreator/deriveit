
import { cookies } from 'next/headers';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import ClientPart from './clientPart';


export async function generateMetadata({ params }: { params: { topic:string, subTopic: string, article: string } }){
  const topic2 = decodeURIComponent(params.topic.toLowerCase());
  const subTopic2 = decodeURIComponent(params.subTopic);
  const article2 = decodeURIComponent(params.article);
  
  const fetchRes = await fetch("https://www.deriveit.net/infoStore/getArticleContent", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({topic: topic2, subTopic: subTopic2, article: article2})
  }).then((res) => res.json());

  return {
    title: fetchRes[0],
    robots: (fetchRes[0].substring(0,9) === "404 error") ? "noindex" : "index, follow"
  }
}

export default async function Page({ params }: { params: { topic:string, subTopic: string, article: string } }) {
  const topic2 = decodeURIComponent(params.topic.toLowerCase());
  const subTopic2 = decodeURIComponent(params.subTopic);
  const article2 = decodeURIComponent(params.article);
  
  const fetchRes = await fetch("https://www.deriveit.net/infoStore/getArticleContent", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({topic: topic2, subTopic: subTopic2, article: article2})
  }).then((res) => res.json());

  const designSelectedVal = parseInt(cookies().get("designSelected")?.value!)|| DEFAULT_DESIGN_SELECTION;
  return <ClientPart topic={topic2} subTopic={subTopic2} contentArray={fetchRes[1]} design={designSelectedVal}/>;
}