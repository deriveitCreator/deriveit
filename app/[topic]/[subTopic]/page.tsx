import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import { getTopicColorInfo, ColorInfoType, getTopicLinks, TOPIC_LINKS_ERROR } from '../../infoStore/topicsInfo';
import SubTopicHeader from './designs/SubTopicHeader';
import dynamic from 'next/dynamic';

export type MainType = {
  topic: string,
  subTopic: [string,string[]],
  styleObject?: ColorInfoType
}

export default async function Page(props: { params: Promise<{ topic: string, subTopic: string }> }) {
  const params = await props.params;
  const designSelectedVal = parseInt((await cookies()).get("designSelected")?.value!) || DEFAULT_DESIGN_SELECTION;
  const decodedTopic = decodeURIComponent(params.topic);
  const decodedSubTopic = decodeURIComponent(params.subTopic);

  let topicLinks = getTopicLinks(decodedTopic);
  if (topicLinks === TOPIC_LINKS_ERROR) return notFound();

  var curSubTopic: [string, string[]] = ["",[""]];
  for(let i in topicLinks){
    if(topicLinks[i][0].replaceAll("'","") === decodedSubTopic){
      curSubTopic = topicLinks[i];
      break;
    }
  }

  if (curSubTopic[0] === "") return notFound();

  const MainComp = dynamic<MainType>(() => import(`./designs/Design${designSelectedVal}`));

  if(designSelectedVal === 1) return <>
    <SubTopicHeader styleNumber={designSelectedVal} name={decodedTopic.replaceAll("_"," ")}/>
    <MainComp topic={decodedTopic} subTopic={curSubTopic}/>
  </>
  else if(designSelectedVal === 2) {
    const styleObject = getTopicColorInfo(decodedTopic);
    return <div style={{backgroundColor: styleObject.bgColor!, minHeight:"100vh"}}>
      <SubTopicHeader styleNumber={designSelectedVal} styleObject={styleObject} name={decodedTopic.replaceAll("_"," ")}/>
      <MainComp topic={decodedTopic} subTopic={curSubTopic} styleObject={styleObject}/>
    </div>
  }
  else throw new Error("Wrong design number value");
}