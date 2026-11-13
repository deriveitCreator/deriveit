import type { Metadata  } from 'next';
import React from 'react';
 
export async function generateMetadata(props: { params: Promise<{ topic: string; subTopic: string }> }): Promise<Metadata> {
  const params = await props.params;
  const decodedTopic = decodeURIComponent(params.topic);
  const decodedSubTopic = decodeURIComponent(params.subTopic);
  return {
    title: decodedSubTopic.charAt(0).toUpperCase() + decodedSubTopic.slice(1).replaceAll("_"," "),
    alternates: {
      canonical: `https://www.deriveit.net/${decodedTopic}/${decodedSubTopic}`
    }
  }
}

export default function SubTopicLayout({children}: {children: React.ReactNode}) { return <>{children}</>; }