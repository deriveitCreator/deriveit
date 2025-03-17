import React from 'react';
import { headingFont, mainTextFont } from "@/app/infoStore/fonts";
import Link from "next/link";
import styles from "./style2.module.scss";
import { MainType } from '../page';

export default function Style2(props: MainType){
	let headerBgColor = props.styleObject!.headerBgColor;
	let borderColor = props.styleObject!.borderColor;
	return <main className={styles.main}> {
		props.topicsInfoState.map((subArr: [string, string[]], i:number) => {
			return <section key={i}>
				<h2 className={`${headingFont.className} ${styles.heading}`} style={{color: borderColor}}>
					{subArr[0].replaceAll("_"," ")}
				</h2>
				{(subArr[1]).map((val:string,i: number)=> {
					if(val.includes("%")) return <StyledP
						key={i}
						textColor={headerBgColor}
						text={val.substring(0,val.lastIndexOf('%')).replaceAll("_"," ")}
						link={`${props.topic}/${subArr[0]}/${(val.substring(val.lastIndexOf('%')+1,val.length))}`.replaceAll("'","")}
					/>;
					else return <StyledP
						key={i}
						textColor={headerBgColor}
						text={val.replaceAll("_"," ")}
						link={`${props.topic}/${subArr[0]}/${val}`.replaceAll(" ","_").replaceAll("'","")}
					/>;
				})}
			</section>
		})
	} </main>;
}

const StyledP = (props: {text: string, link: string, textColor: string}) =>{
	var pContent;
	if (props.text.slice(-11,) === "incomplete)")
		pContent = <span dangerouslySetInnerHTML={{ __html: props.text }}></span>;
	else pContent = <Link href={`./${props.link}`} dangerouslySetInnerHTML={{ __html: props.text }}></Link>;

	return <p className={`${mainTextFont.className} ${styles.linkText}`} style={{color: props.textColor, letterSpacing:"1px"}}>
		{pContent}
	</p>;
}