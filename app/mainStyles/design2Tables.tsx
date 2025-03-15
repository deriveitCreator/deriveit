import styles from "./design2.module.scss";
import { topicsOrder } from '../infoStore/topicsInfo';
import ImageWrapper from '../components/ImageWrapper';
import Link from 'next/link';
import { logoFont2, mainTextFont } from '../infoStore/fonts';
import { getTopicColorInfo, getRecentlyAdded, getRecentlyEdited } from '../infoStore/topicsInfo';

export function MainTable(){
  return <section><table id={styles.mainTable} className={logoFont2.className}>
    {screen.width > parseInt(styles.minDeviceWidth) ? <thead><tr><th>Choose Your Topic:</th></tr></thead> : null}
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

function BelowTablesDesktop(props: {recentlyAdded: boolean}){
	if(screen.width > parseInt(styles.minDeviceWidth)){
		return <section><table id={styles.tableForRecent}>
			<tbody>{(props.recentlyAdded ?  getRecentlyAdded():getRecentlyEdited()).map((elem, i)=>{
				let perPos = elem.indexOf("%");
				let topicName = elem.substring(perPos+1, elem.indexOf("/",perPos))
				let colorInfo = getTopicColorInfo(topicName);
				let bgColor = colorInfo.bgColor;
				let borderColor = colorInfo.borderColor;

				if(i===0) return <tr key={0}>
					<th scope='col' rowSpan={4} className={`border-4 ${logoFont2.className}`}>
						<span className=' float-left'>Recently</span>
						<span className=' float-right'>{props.recentlyAdded?"Added":"Edited"}</span>
					</th>
					<td style={{ backgroundColor: bgColor!, color: borderColor!, borderLeft: `solid 3px ${borderColor!}`, fontWeight:"bold"}} className={mainTextFont.className}>
						<Link href={elem.substring(perPos+1)} dangerouslySetInnerHTML={{__html: elem.substring(0,perPos).replaceAll("_"," ")}}></Link>
					</td>
				</tr>;
				else return <tr key={i}><td style={{ backgroundColor: bgColor!, color: borderColor!, borderLeft: `solid 3px ${borderColor!}`, fontWeight:"bold"}} className={mainTextFont.className}>
					<Link href={elem.substring(perPos+1)} dangerouslySetInnerHTML={{__html: elem.substring(0,perPos).replaceAll("_"," ")}}></Link>
				</td></tr>;
			})}</tbody>
		</table></section>
	}
}

function BelowTablesMobile(props: {recentlyAdded: boolean}){
  return <section><table id={styles.tableForRecent}>
    <thead className={logoFont2.className}><tr>
      <th style={{textAlign:"center"}}>Recently {props.recentlyAdded?"Added":"Edited"}</th>
    </tr></thead>
    <tbody>{(props.recentlyAdded ?  getRecentlyAdded():getRecentlyEdited()).map((elem, i)=>{
      let perPos = elem.indexOf("%");
      let topicName = elem.substring(perPos+1, elem.indexOf("/",perPos));
      let colorInfo = getTopicColorInfo(topicName);
      
      return <tr key={i}>
        <td
          style={{backgroundColor: colorInfo.bgColor!, color: colorInfo.borderColor!, fontWeight:"bold"}}
          className={mainTextFont.className}
        >
          <Link href={elem.substring(perPos+1)} dangerouslySetInnerHTML={{__html: elem.substring(0,perPos).replaceAll("_"," ")}}></Link>
        </td>
      </tr>;
    })}</tbody>
  </table></section>
}

export function BelowTables(props: {type: "desktop" | "mobile"}){
  if(props.type == "desktop") return <section>
    <BelowTablesDesktop recentlyAdded={true}/>
    <BelowTablesDesktop recentlyAdded={false}/>
  </section>;
  else return <section>
    <BelowTablesMobile recentlyAdded={true} />
    <BelowTablesMobile recentlyAdded={false} />
  </section>;
}