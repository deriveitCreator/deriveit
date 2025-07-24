import { Metadata } from 'next';

var local = false;
if((!process.env.NODE_ENV || process.env.NODE_ENV === 'development'))
  local = true;

export async function generateMetadata(
  props: { params: Promise<{ topic:string, subTopic: string, article: string }> }
): Promise<Metadata> {
  const params = await props.params;
  let { title } = await import(`@/app/infoStore/contents/${decodeURIComponent(params.topic)}/${decodeURIComponent(params.subTopic)}/${decodeURIComponent(params.article)}`);
  return {
    title:  title ? title : "404 error",
    robots: title ? "index, follow" : "noindex",
    authors: [{name:"Uzair Arif"}],
    openGraph:{
      type: "article"
    }
  }
}

export default function articleLayout({children}: {children: React.ReactNode}) {
  return <>{children}</>;
}