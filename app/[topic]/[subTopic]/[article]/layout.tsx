import type { Metadata } from 'next';
import { stripHtml } from "string-strip-html";

export async function generateMetadata(props: { params: Promise<{ topic:string, subTopic: string, article: string }> }): Promise<Metadata> {
  const params = await props.params;
  const decodedTopic = decodeURIComponent(params.topic);
  const decodedSubTopic = decodeURIComponent(params.subTopic);
  const decodedArticle = decodeURIComponent(params.article);

  const { title, default: content } = await import(`@/app/infoStore/contents/${decodedTopic}/${decodedSubTopic}/${decodedArticle}`);

  const returnObj: Metadata = {
    title:  title,
    robots: "index, follow",
    authors: [{name:"Uzair Arif"}],
    alternates: {
      canonical: `https://www.deriveit.net/${decodedTopic}/${decodedSubTopic}/${decodedArticle}`
    },
    openGraph:{type: "article"}
  };

  let newDescription = "";
  for (let i = 0, counter = 0; (i < content.length) && (counter < 3); i++) {
    if (content[i][0] == "pmain") {
      newDescription += content[i][1] + " ... ";
      counter++;
    }
  }
  returnObj.description = stripHtml(newDescription).result;
  return returnObj;
  
}

export default function articleLayout({children}: {children: React.ReactNode}) {return <>{children}</>;}