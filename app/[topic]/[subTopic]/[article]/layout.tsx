
import type { Metadata  } from 'next';
 
export async function generateMetadata({params}: {params: {topic: string, subTopic: string, article: string}}): Promise<Metadata> {
    return {title: (await import(`@/app/infoStore/${decodeURIComponent(params.topic.toLowerCase())}/${decodeURIComponent(params.subTopic)}/${decodeURIComponent(params.article)}`.replaceAll("_"," "))).title}
}

export default function SubTopicLayout({children}: {children: React.ReactNode}) {
    return <>{children}</>;
}