
import { cookies } from 'next/headers';
import { DEFAULT_DESIGN_SELECTION } from '../../infoStore/designInfo';
import ClientPart from './clientPart';
import { LinksWithTopicName, getTopicColorInfo } from '../../infoStore/topicsInfo';

export default function Custom404() {
  const designSelectedVal = parseInt(cookies().get("designSelected")?.value!) || DEFAULT_DESIGN_SELECTION;

  var calStyleObj;

  if(designSelectedVal == 1) calStyleObj = null;
  else if(designSelectedVal == 2) calStyleObj = getTopicColorInfo("error");
  else return <p>The design value is wrong, please report this.</p>;

  return <ClientPart
    topic={"404 Error"}
    subTopic = {""}
    topicInfo={[]}
    design={designSelectedVal}
    name={LinksWithTopicName["error"]}
    styleObject={calStyleObj}
  />;

}
