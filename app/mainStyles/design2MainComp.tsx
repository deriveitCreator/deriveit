import styles from "./design2.module.scss";
import { topicsOrder } from '../infoStore/topicsInfo';
import ImageWrapper from '../global_components/ImageWrapper';
import Link from 'next/link';
import { logoFont2, mainTextFont } from '../infoStore/fonts';
import { getTopicColorInfo, getRecentlyAdded, getRecentlyEdited } from '../infoStore/topicsInfo';

function MainTable(){
  return <section><table id={styles.mainTable} className={logoFont2.className}>
    <thead><tr><th>Choose Your Topic:</th></tr></thead>
    {/*When making images in powerpoint, the width should be 646px and height should be 334px*/}
    <tbody>
      {topicsOrder.map((elem,i)=>{
        if(i%2 === 0){
          const name1 = topicsOrder[i];
          const name2 = topicsOrder[i+1];
          return <tr key={i}><td>
            <div className=' w-1/2 inline-block'><Link href={`/${name1}`}>
              <ImageWrapper alt={name1} src={`/topicsPics/${name1}.png`}/>
            </Link></div>
            {   
              name2==="error"?
              <div className=' w-1/2 inline-block'>
                <ImageWrapper className='inline-block' alt={name2} bor={styles.uc} src={`/topicsPics/uncategorized.png`}/>
              </div>:
              <div className=' w-1/2 inline-block '><Link href={`/${name2}`}>
                <ImageWrapper alt={name2} src={`/topicsPics/${name2}.png`}/>
              </Link></div>
            }
          </td></tr>;
        }
        else return null;
      })}
    </tbody>
  </table></section>
}

function RecentlySection(props: {recentlyAdded: boolean}){
  return <div className={styles.recentlySection}>
    <div className={`${logoFont2.className} ${styles.recentlyHeader}`}>
      <span>Recently</span>
      <span>&nbsp;{props.recentlyAdded?"Added":"Edited"}</span>
    </div>
    {(props.recentlyAdded ?  getRecentlyAdded():getRecentlyEdited()).map((elem, i)=>{
      let perPos = elem.indexOf("%");
      let topicName = elem.substring(perPos+1, elem.indexOf("/",perPos))
      let colorInfo = getTopicColorInfo(topicName);
      let bgColor = colorInfo.bgColor;
      let borderColor = colorInfo.borderColor;

      return <div key={i} style={{ backgroundColor: bgColor!, color: borderColor!, borderLeft: `solid 3px ${borderColor!}`, fontWeight:"bold"}} className={`${styles.recentlyRow} ${mainTextFont.className}`}>
        <Link href={elem.substring(perPos+1)} dangerouslySetInnerHTML={{__html: elem.substring(0,perPos).replaceAll("_"," ")}}></Link>
      </div>;
    })}
  </div>;
}

const MainComp = <main>
  <MainTable />
  {/*@ts-ignore*/}
  <div align="center" style={{marginTop:"20px", marginBottom:"20px"}}><ins
    className="adsbygoogle"
    id={styles.adId}
    data-ad-client="ca-pub-4860967711062471"
    data-ad-slot="1515076236"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins></div>
  <section>
    <RecentlySection recentlyAdded={true} />
    <RecentlySection recentlyAdded={false} />
  </section>
</main>

export default MainComp;