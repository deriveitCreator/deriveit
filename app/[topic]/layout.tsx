import type { Metadata  } from 'next';
import React from 'react';
 
export async function generateMetadata(props: { params: Promise<{ topic: string }> }): Promise<Metadata> {
  const params = await props.params;
  const decodedTopic = decodeURIComponent(params.topic);
  return {
    title: decodedTopic.charAt(0).toUpperCase() + decodedTopic.slice(1).replaceAll("_"," "),
    alternates: {
      canonical: `https://www.deriveit.net/${decodedTopic}`
    }
  }
}

export default function TopicLayout({children}: {children: React.ReactNode}) { return <>{children}</>; }