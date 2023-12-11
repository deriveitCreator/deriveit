
import designSelected from '../../infoStore/designSelected';
import { cursiveMain } from "@/app/infoStore/fonts";

export default function TopicHeader(props: {text: string}){
    switch(designSelected){
        case 1:
            return <header className='border-t-4 border-gray-600 capitalize'>
                <h1 className={`${cursiveMain.className} bg-gray-100 border-b-4 border-gray-600 text-center text-4xl  leading-[74px] h-20 w-full mb-8`}>{props.text.replaceAll("_"," ")}</h1>
            </header>
    }
}