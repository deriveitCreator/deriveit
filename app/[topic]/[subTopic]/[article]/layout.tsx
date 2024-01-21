
import type { Metadata  } from 'next';
 
export async function generateMetadata({params}: {params: {topic: string, subTopic: string, article: string}}): Promise<Metadata> {
    try{
        return {title: (await import(`@/app/infoStore/${decodeURIComponent(params.topic.toLowerCase())}/${decodeURIComponent(params.subTopic)}/${decodeURIComponent(params.article)}`)).title.replaceAll("_"," ")};
    }
    catch{
        return {title: "Error"};
    }
}

export default function ArticleLayout({children}: {children: React.ReactNode}) {
    return <>{children}</>;
}