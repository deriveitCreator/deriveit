import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { DEFAULT_DESIGN_SELECTION } from '@/app/infoStore/designInfo';
import { getTopicColorInfo, ColorInfoType, getTopicLinks } from '../../infoStore/topicsInfo';
import SubTopicHeader from './designs/SubTopicHeader';
import dynamic from 'next/dynamic';

var domainName: string;
if((!process.env.NODE_ENV || process.env.NODE_ENV === 'development'))
  domainName = "http://localhost:3001";
else domainName = "https://www.deriveit.net";

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
  if (!topicLinks) return notFound();

  const emptyCurSub = ["",[""]];
  var curSubTopic: [string, string[]] = ["",[""]];
  for(let i in topicLinks){
    if(topicLinks[i][0].replaceAll("'","") === decodedSubTopic){
      curSubTopic = topicLinks[i];
      break;
    }
  }

  if (curSubTopic == emptyCurSub) throw new Error("The subtopic list is empty. Please report this!");

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