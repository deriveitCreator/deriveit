
import { cursiveMain, headingFont } from "@/app/infoStore/fonts";

export default function getHeader(props:{text: string, ds: number, styleObject?:{
    name: string;
    headerBgColor: string;
    bgColor: string;
    textColor: string;
    borderColor: string;
    text: string;
}}){
    switch(props.ds){
        case 1:
            return <header className='border-t-4 border-gray-600 capitalize'>
                <h1 className={`${cursiveMain.className} bg-gray-100 border-b-4 border-gray-600 text-center text-4xl  leading-[74px] h-20 w-full mb-8`}>{props.text.replaceAll("_"," ")}</h1>
            </header>
        case 2:
            let headerBgColor = props.styleObject!.headerBgColor;
            let textColor = props.styleObject!.textColor;
            let borderColor = props.styleObject!.borderColor;
            let headerText = props.styleObject!.text;
            return <header className=" sticky h-[78px] top-0">
                <h1 className={`${headingFont.className} capitalize text-center text-[38px] leading-[78px] w-full font-bold`} style={{backgroundColor: headerBgColor, color: textColor, borderBottom: `${borderColor} solid 5px`, letterSpacing:"3px"}}>{props.text.replaceAll("_"," ")}</h1>
            </header>
    }
}