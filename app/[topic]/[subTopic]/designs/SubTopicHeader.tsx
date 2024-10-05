
import { cursiveMain, headingFont } from "@/app/infoStore/fonts";

export default function getHeader(props:{styleNumber: number, name: string, styleObject?:{
	headerBgColor: string;
	bgColor: string;
	footerColor: string;
	borderColor: string;
}}){
	var headerText = (props.name=="error") ? "404 Error" : props.name;
	switch(props.styleNumber){
		case 1:
			return <header className='border-t-4 border-gray-600 capitalize'>
				<h1 className={`${cursiveMain.className} bg-gray-100 border-b-4 border-gray-600 text-center text-4xl  leading-[74px] h-20 w-full mb-8`}>{headerText}</h1>
			</header>
		case 2:
			let headerBgColor = props.styleObject!.headerBgColor;
			let textColor = props.styleObject!.footerColor;
			let borderColor = props.styleObject!.borderColor;
			return <header className=" sticky h-[78px] top-0">
				<h1 className={`${headingFont.className} capitalize text-center text-[38px] leading-[78px] w-full font-bold`} style={{backgroundColor: headerBgColor, color: textColor, borderBottom: `${borderColor} solid 5px`, letterSpacing:"3px"}}>{headerText}</h1>
			</header>
	}
}