
import type { Metadata  } from 'next';
import React from 'react';
 
export async function generateMetadata( { params }: { params: { subTopic: string } }): Promise<Metadata> {
  return {title: decodeURIComponent(params.subTopic.charAt(0).toUpperCase() + params.subTopic.slice(1)).replaceAll("_"," ")}
}

export default function SubTopicLayout({children}: {children: React.ReactNode}) {
  return <>{children}</>;
}