import type { Metadata  } from 'next';
import React from 'react';
 
export async function generateMetadata(props: { params: Promise<{ subTopic: string }> }): Promise<Metadata> {
  const params = await props.params;
  return {title: decodeURIComponent(params.subTopic.charAt(0).toUpperCase() + params.subTopic.slice(1)).replaceAll("_"," ")}
}

export default function SubTopicLayout({children}: {children: React.ReactNode}) {
  return <>{children}</>;
}