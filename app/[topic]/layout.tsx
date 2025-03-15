import type { Metadata  } from 'next';
import React from 'react';
 
export async function generateMetadata(props: { params: Promise<{ topic: string }> }): Promise<Metadata> {
  const params = await props.params;
  return {title: decodeURIComponent(params.topic.charAt(0).toUpperCase() + params.topic.replaceAll("_"," ").slice(1))}
}

export default function TopicLayout({children}: {children: React.ReactNode}) {
  return <>{children}</>;
}