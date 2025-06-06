import { cookies } from 'next/headers';
import { DEFAULT_DESIGN_SELECTION } from '../infoStore/designInfo';
import { getTopicColorInfo } from '../infoStore/topicsInfo';
import TopicHeader from './designs/TopicHeader';
import dynamic from 'next/dynamic';
import { MainType } from './page';

const TOPICS_DATA:  [string, string[]][] = [["Topic Not Found",[""]]]

export default async function Custom404() {
  const designSelectedVal = parseInt((await cookies()).get("designSelected")?.value!) || DEFAULT_DESIGN_SELECTION;
  const MainComp = dynamic<MainType>(() => import(`@/app/[topic]/designs/Style${designSelectedVal}`));

  if (designSelectedVal==1)
    return <>
      <TopicHeader styleNumber={1} name={"Error"}/>
      <MainComp topic={"404 Error"} topicsInfoState={[]}/>
    </>
  else if (designSelectedVal==2) {
    let styleObject = getTopicColorInfo("error");
    return <div style={{backgroundColor: styleObject.bgColor, minHeight:"100vh"}}>
      <TopicHeader styleNumber={2} name={"Error"} styleObject={styleObject}/>
      <MainComp topic={"404 Error"} topicsInfoState={TOPICS_DATA} styleObject={styleObject}/>
    </div>
  }
  else throw new Error("Wrong design number value");
}
