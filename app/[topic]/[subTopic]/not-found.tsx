import { cookies } from 'next/headers';
import { DEFAULT_DESIGN_SELECTION } from '../../infoStore/designInfo';
import { getTopicColorInfo } from '../../infoStore/topicsInfo';
import SubTopicHeader from './designs/SubTopicHeader';
import dynamic from 'next/dynamic';
import { MainType } from './page';

export default async function Custom404() {
  const designSelectedVal = parseInt((await cookies()).get("designSelected")?.value!) || DEFAULT_DESIGN_SELECTION;
  const MainComp = dynamic<MainType>(() => import(`./designs/Design${designSelectedVal}`));

  var calStyleObj;

  if(designSelectedVal == 1) calStyleObj = null;
  else if(designSelectedVal == 2) calStyleObj = getTopicColorInfo("error");
  else return <p>The design value is wrong, please report this.</p>;

  if(designSelectedVal === 1) return <>
    <SubTopicHeader styleNumber={designSelectedVal} name={"Error"}/>
    <MainComp topic={"404 Error"} subTopic={["",[""]]}/>
  </>
  else if(designSelectedVal === 2) {
    let bgColor = calStyleObj!.bgColor;
    return <div style={{backgroundColor: bgColor, minHeight:"100vh"}}>
      <SubTopicHeader styleNumber={designSelectedVal} styleObject={calStyleObj!} name={"Error"}/>
      <MainComp topic={"404 Error"} subTopic={["",[""]]} styleObject={calStyleObj!}/>
    </div>
  }
  else throw new Error("Wrong design number value");

}
