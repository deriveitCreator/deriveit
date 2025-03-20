import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import { getTopicColorInfo, ColorInfoType, getTopicLinks } from '../infoStore/topicsInfo';
import TopicHeader from './designs/TopicHeader';
import dynamic from 'next/dynamic';

var domainName: string;
if((!process.env.NODE_ENV || process.env.NODE_ENV === 'development'))
  domainName = "http://localhost:3001";
else domainName = "https://www.deriveit.net";

export type MainType = {
  topic: string,
  topicsInfoState: Array<[string,string[]]>,
  styleObject?: ColorInfoType
}

export default async function Page(props: { params: Promise<{ topic: string }> }) {
  const params = await props.params;
  const designSelectedVal = parseInt((await cookies()).get("designSelected")?.value!) || DEFAULT_DESIGN_SELECTION;
  const decodedTopic = decodeURIComponent(params.topic);

  let topicLinks = getTopicLinks(decodedTopic);
  if (!topicLinks) return notFound();

  const MainComp = dynamic<MainType>(() => import(`@/app/[topic]/designs/Style${designSelectedVal}`));
  if (designSelectedVal==1)
    return <>
      <TopicHeader styleNumber={1} name={decodedTopic.replaceAll("_", " ")}/>
      <MainComp topic={decodedTopic} topicsInfoState={topicLinks}/>
    </>
  else if (designSelectedVal==2) {
    const styleObject = getTopicColorInfo(decodedTopic);
    return <div style={{backgroundColor: styleObject.bgColor, minHeight:"100vh"}}>
      <TopicHeader styleNumber={2} name={decodedTopic.replaceAll("_", " ")} styleObject={styleObject}/>
      <MainComp topic={decodedTopic} topicsInfoState={topicLinks} styleObject={styleObject}/>
    </div>
  }
  else throw new Error("Wrong design number value");
}