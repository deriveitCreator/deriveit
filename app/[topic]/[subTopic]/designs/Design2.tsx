import { headingFont, mainTextFont } from "@/app/infoStore/fonts";
import Link from "next/link";
import styles from "./design2.module.scss";
import { MainType } from '../page';
import FooterEl from '../../designs/Style2Footer';
import { FaYoutube } from "react-icons/fa";

const YOUTUBE_PREFIX = "https://www.youtube.com/watch?v=";

export default function Style2(props: MainType){ 
	let styleOb = props.styleObject!;
	let headerBgColor = styleOb.headerBgColor;
	let borderColor = styleOb.borderColor;
	let curTopic = props.subTopic;

	return <>
		<main className={styles.main}>
			<h2 className={`${headingFont.className} ${styles.heading}`} style={{color: borderColor}}>{
				curTopic[0].replaceAll("_"," ")
			}</h2>
			
			{ (curTopic[1]).map((val:string,i: number) => {
				
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

				return <StyledP
					key={i}
					textColor={headerBgColor}
					text={text}
					youtubeID={youtubeID}
					link={link}
				/>;
			})}
		</main>
    <FooterEl borderColor={styleOb.borderColor} footerColor={styleOb.footerColor} headerBgColor={styleOb.headerBgColor} bgColor={styleOb.bgColor}/>
	</>;
}

const StyledP = (props: {text: string, link: string, textColor: string, youtubeID: string}) =>{
	var pContent;
	if (props.text.slice(-11,) === "incomplete)")
		pContent = <span dangerouslySetInnerHTML={{ __html: props.text }}></span>;
	else pContent = <Link href={`./${props.link}`} dangerouslySetInnerHTML={{ __html: props.text }}></Link>;

	let videoEl = null;
	if (props.youtubeID.length) videoEl = <a href={YOUTUBE_PREFIX + props.youtubeID} target="_blank" style={{display:"inline-block", verticalAlign:"middle"}}>
		<FaYoutube/>
	</a>;

	return <p className={`${mainTextFont.className} ${styles.linkText}`} style={{color: props.textColor}}>
		{pContent} {videoEl}
	</p>;
}
