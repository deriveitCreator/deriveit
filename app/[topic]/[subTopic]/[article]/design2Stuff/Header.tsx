
import styles from "./design2.module.scss";
import { headingFont } from "@/app/infoStore/fonts";

export default function ArticleHeader(props: {text: string}){
  var animationState;
  if(props.text !== "") {
    animationState = "animate-[becomeBlack_0.5s_ease-out_0.5s_forwards]";
  }
  return <header className=' w-full border-black border-b-4 mb-8 min-h-[84px] flex items-center justify-center' id={styles.header}>
    <h1
      className={`${headingFont.className} text-center leading-[50px] text-white font-bold ${animationState}`} dangerouslySetInnerHTML={{__html: props.text.replaceAll("&amp;","&")}}
    />
  </header>
};