import styles from "./design1.module.scss";
import { cursiveMainServer } from "@/app/infoStore/fonts";

export default function ArticleHeader(props: {text: string}){
  return <header id={styles.header} className='border-t-4 w-full border-gray-600 bg-gray-100 border-b-4 mb-8 min-h-[84px] flex items-center justify-center'>
    <h1
      className={`${cursiveMainServer.className} text-center text-4xl leading-[50px] text-gray-100 animate-[becomeBlack_0.5s_ease-out_0.5s_forwards]`}
      dangerouslySetInnerHTML={{__html: props.text.replaceAll("&amp;","&")}}
    />
  </header>;
};