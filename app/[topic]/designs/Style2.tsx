"use client"

import { useState } from "react";
import { headingFont } from "@/app/infoStore/fonts";
import styles from "./style2.module.scss";
import { MainType } from '../page';
import FooterEl from "./Style2Footer";
import Style2LinkP from "./Style2LinkP";
import Style2SearchInput from "./Style2SearchInput";

export default function Style2(props: MainType){
	let styleOb = props.styleObject!;
	let headerBgColor = styleOb.headerBgColor;
	let borderColor = styleOb.borderColor;
	let topicFeatureVector = props.topicFeatureVector!;
	const [topicsInfoState, changeTIS] = useState(props.topicsInfoState);

	return <>
		<main className={styles.main}> 
			<Style2SearchInput borderColor={borderColor} inputBgColor={styleOb.footerColor} topicFeatureVector={topicFeatureVector} topicsInfo={props.topicsInfoState} changeTIS={changeTIS}/>
			{ topicsInfoState.map((subArr: [string, string[]], i:number) => {
				return <section key={i}>
					<h2 className={`${headingFont.className}`} style={{color: borderColor}}>
						{subArr[0].replaceAll("_"," ")}
					</h2>
					{ (subArr[1]).map((val:string,i: number) => {

						let text = val;
						let youtubeID = '';
						if (text.includes("$")) {
							youtubeID = text.substring(text.lastIndexOf('$')+1);
							text = text.substring(0, text.lastIndexOf('$'));
						}

						let link;
						if (text.includes("%")) {
							link = `${props.topic}/${subArr[0]}/${(text.substring(text.lastIndexOf('%')+1))}`.replaceAll("'","");
							text = text.substring(0,text.lastIndexOf('%')).replaceAll("_"," ");
						}
						else{
							link = `${props.topic}/${subArr[0]}/${text}`.replaceAll(" ","_").replaceAll("'","");
							text = text.replaceAll("_"," ");
						}

						return <Style2LinkP
							key={i}
							textColor={headerBgColor}
							text={text}
							youtubeID={youtubeID}
							link={link}
						/>;
					})}
				</section>
			})
		} </main>
    <FooterEl borderColor={styleOb.borderColor} footerColor={styleOb.footerColor} headerBgColor={styleOb.headerBgColor} bgColor={styleOb.bgColor}/>
	</>;
}
