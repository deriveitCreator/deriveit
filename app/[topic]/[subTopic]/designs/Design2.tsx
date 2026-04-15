"use client"

import { useState } from "react";
import { headingFont } from "@/app/infoStore/fonts";
import styles from "../../designs/style2.module.scss";
import { MainType } from '../page';
import FooterEl from '../../designs/Style2Footer';
import Style2LinkP from "../../designs/Style2LinkP";
import Style2SearchInput from "../../designs/Style2SearchInput";

export default function Style2(props: MainType){ 
	let styleOb = props.styleObject!;
	let headerBgColor = styleOb.headerBgColor;
	let borderColor = styleOb.borderColor;
	let subtopicFeatureVector = props.subtopicFeatureVector!;
	const [curTopic, changeTIS] = useState([props.subTopic]);

	return <>
		<main className={styles.main}>
			<Style2SearchInput borderColor={borderColor} inputBgColor={styleOb.footerColor} topicFeatureVector={subtopicFeatureVector} topicsInfo={[props.subTopic]} changeTIS={changeTIS}/>
			<h2 className={`${headingFont.className}`} style={{color: borderColor}}>{
				(curTopic.length) ? curTopic[0][0].replaceAll("_"," ") : null
			}</h2>
			
			{ curTopic.length ? (curTopic[0][1]).map((val:string,i: number) => {
				
				let text = val;
				let youtubeID = '';
				if (text.includes("$")) {
					youtubeID = text.substring(text.lastIndexOf('$')+1);
					text = text.substring(0, text.lastIndexOf('$'));
				}

				let link;
				if (text.includes("%")) {
					link = `${curTopic[0]}/${text.substring(text.lastIndexOf('%')+1)}`.replaceAll("'","");
					text = text.substring(0,text.lastIndexOf('%')).replaceAll("_"," ");
				}
				else{
					link = `${curTopic[0]}/${text}`.replaceAll(" ","_").replaceAll("'","");
					text = text.replaceAll("_"," ");
				}

				return <Style2LinkP
					key={i}
					textColor={headerBgColor}
					text={text}
					youtubeID={youtubeID}
					link={link}
				/>;
			}) : null }
		</main>
    <FooterEl borderColor={styleOb.borderColor} footerColor={styleOb.footerColor} headerBgColor={styleOb.headerBgColor} bgColor={styleOb.bgColor}/>
	</>;
}
