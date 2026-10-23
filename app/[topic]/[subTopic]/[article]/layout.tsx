import { Metadata } from 'next';
import { stripHtml } from "string-strip-html";

export async function generateMetadata(
  props: { params: Promise<{ topic:string, subTopic: string, article: string }> }
): Promise<Metadata> {
  const params = await props.params;
  let { title, default: content, description } = await import(`@/app/infoStore/contents/${decodeURIComponent(params.topic)}/${decodeURIComponent(params.subTopic)}/${decodeURIComponent(params.article)}`);
  let returnObj: Metadata = {
    title:  title ? title : "404 error",
    robots: title ? "index, follow" : "noindex",
    authors: [{name:"Uzair Arif"}],
    openGraph:{
      type: "article"
    }
  };
  if (description) returnObj.description = description;
  else {
    let newDescription = "";
    for (let i = 0, counter = 0; (i < content.length) && (counter < 3); i++) {
      if (content[i][0] == "pmain") {
        newDescription += content[i][1] + " ... ";
        counter++;
      }
    }
    returnObj.description = stripHtml(newDescription).result;
  };
  return returnObj;
}

export default function articleLayout({children}: {children: React.ReactNode}) {
  return <>{children}</>;
}