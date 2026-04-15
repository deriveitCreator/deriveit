import { mainTextFont } from "@/app/infoStore/fonts";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

const YOUTUBE_PREFIX = "https://www.youtube.com/watch?v=";

export default function Style2LinkP(props: {text: string, link: string, textColor: string, youtubeID: string}){
  var pContent;
  if (props.text.slice(-11,) === "incomplete)")
    pContent = <span dangerouslySetInnerHTML={{ __html: props.text }}></span>;
  else pContent = <Link href={`./${props.link}`} dangerouslySetInnerHTML={{ __html: props.text }}></Link>;

  let videoEl = null;
  if (props.youtubeID.length) videoEl = <a href={YOUTUBE_PREFIX + props.youtubeID} target="_blank" style={{display:"inline-block", verticalAlign:"middle"}}>
    <FaYoutube/>
  </a>;

  return <p className={`${mainTextFont.className}`} style={{color: props.textColor}}>
    {pContent} {videoEl}
  </p>;
}
