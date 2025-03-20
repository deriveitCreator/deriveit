import { Metadata } from 'next';

export async function generateMetadata(
  props: { params: Promise<{ topic:string, subTopic: string, article: string }> }
): Promise<Metadata> {
  const params = await props.params;
  let { title } = await import(`../../../infoStore/contents/${decodeURIComponent(params.topic.toLowerCase())}/${decodeURIComponent(params.subTopic)}/${decodeURIComponent(params.article)}`);

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