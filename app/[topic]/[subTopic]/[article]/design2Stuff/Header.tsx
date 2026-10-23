import styles from "./design2.module.scss";
import { headingFont } from "@/app/infoStore/fonts";

export default function ArticleHeader(props: {text: string}){
  return <header className={'w-full border-black border-b-4 mb-8 min-h-[84px] flex items-center justify-center'} id={styles.header}>
    <h1
      className={`${headingFont.className} text-center font-bold`}
      dangerouslySetInnerHTML={{__html: props.text.replaceAll("&amp;","&")}}
    />
  </header>
};