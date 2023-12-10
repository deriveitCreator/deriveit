
import type { Metadata  } from 'next';
 
export async function generateMetadata( { params }: { params: { subTopic: string } }): Promise<Metadata> {
  return {title: decodeURIComponent(params.subTopic.charAt(0).toUpperCase() + params.subTopic.slice(1))}
}

export default function SubTopicLayout({children}: {children: React.ReactNode}) {
    return <>{children}</>;
}