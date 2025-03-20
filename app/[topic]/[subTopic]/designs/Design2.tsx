import { headingFont, mainTextFont } from "@/app/infoStore/fonts";
import Link from "next/link";
import styles from "./design2.module.scss";
import { MainType } from '../page';
import FooterEl from '../../designs/Style2Footer';

export default function Style2(props: MainType){ 
	let styleOb = props.styleObject!;
	let headerBgColor = styleOb.headerBgColor;
	let borderColor = styleOb.borderColor;
	let curTopic = props.subTopic;

	return <>
		<main className={styles.main}>
			<h2 className={`${headingFont.className} ${styles.heading}`} style={{color: borderColor}}>
				{curTopic[0].replaceAll("_"," ")}
			</h2>
			{(curTopic[1]).map((val:string,i: number)=> {
				if(val.includes("%")){ return <StyledP
					key={i}
					textColor={headerBgColor}
					text={val.substring(0,val.lastIndexOf('%')).replaceAll("_"," ")}
					link={`${curTopic[0]}/${val.substring(val.lastIndexOf('%')+1,val.length)}`.replaceAll("'","")}
				/>;
				}else return <StyledP
					key={i}
					textColor={headerBgColor}
					text={val.replaceAll("_"," ")}
					link={`${curTopic[0]}/${val}`.replaceAll(" ","_").replaceAll("'","")}
				/>;
			})}
		</main>
    <FooterEl borderColor={styleOb.borderColor} footerColor={styleOb.footerColor} headerBgColor={styleOb.headerBgColor} bgColor={styleOb.bgColor}/>
	</>;
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
