
import type { Metadata  } from 'next';
import React from 'react';
 
export async function generateMetadata( { params }: { params: { topic: string } }): Promise<Metadata> {
  return {title: decodeURIComponent(params.topic.charAt(0).toUpperCase() + params.topic.replaceAll("_"," ").slice(1))}
}

export default function TopicLayout({children}: {children: React.ReactNode}) {
  return <>{children}</>;
}