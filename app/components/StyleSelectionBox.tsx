
import React, { useRef, useEffect, SetStateAction } from 'react';
import {cursiveMain, chalkWriting, printFont2, logoFont2 } from "@/app/infoStore/fonts";
import { NextFont } from 'next/dist/compiled/@next/font';
import ImageWrapper from './ImageWrapper';
import { useRouter } from 'next/navigation';
import { DEFAULT_DESIGN_SELECTION } from '../infoStore/designInfo';
import { useCookies } from 'next-client-cookies';

const StyleSelectionBox = (props: {showDB: boolean, changeSDB: React.Dispatch<SetStateAction<boolean>>}) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const scrollVal = useRef("");
    const router = useRouter();
    
    function diaClose(){
        document.documentElement.style.overflowY = scrollVal.current;
        props.changeSDB(false);
    }

    useEffect(()=>{
        if(props.showDB) {
            scrollVal.current = document.documentElement.style.overflowY;
            document.documentElement.style.overflowY = "hidden";
            dialogRef.current?.showModal();
        }
    })

    async function changeToStyle(num: number){
        const fetchRes =  await fetch("/infoStore/setCookie?"+ new URLSearchParams({selected: num.toString()}), {method:"get", cache:"no-cache"});
        if(fetchRes.ok){
            router.refresh();
        }
        else{
            alert("There was an error.\nPlease report this.");
        }
    }

    switch(parseInt(useCookies().get('designSelected')!) || DEFAULT_DESIGN_SELECTION){
        case 1: return <dialog onClose={diaClose} ref={dialogRef} className=' outline-none border-black border-8 rounded-xl bg-gray-100'>
            <h3 className={cursiveMain.className + " text-6xl mt-5 text-center"}>Styles</h3>
            <StylesOptions changeToStyle={changeToStyle}/>
            <button
                className={chalkWriting.className + " bg-zinc-900 w-full text-gray-300 pt-1"}
                style={{borderTop: "#bda27e solid 4px", boxShadow: "0px 0px 0px 2px #c2a782, 0px 0px 0px 3px #a58e6f"}}
                onClick={()=>dialogRef.current?.close()}
            >Close</button>
        </dialog>;
        case 2: return <dialog onClose={diaClose} ref={dialogRef} className=' outline-none border-orange-950 border-8 rounded-xl bg-[#FFDD77]'>
            <h3 className={logoFont2.className + " text-5xl mt-5 text-center text-orange-950"}>Styles</h3>
            <StylesOptions changeToStyle={changeToStyle}/>
            <button
                className={printFont2.className + " font-bold text-2xl w-full text-orange-950 border-t-4 border-t-orange-950 bg-[#CC5511] h-12"}
                onClick={()=>dialogRef.current?.close()}
            >Close</button>
        </dialog>;
        default: return <p>Error</p>
    }    
}


function StylesOptions(props:{changeToStyle: (num: number) => Promise<void>}){
    const stylesText: string[] = ["Cursive","Colorful"];
    const stylesFont: NextFont[] = [cursiveMain, logoFont2];
    const stylesBorder: string[] = ["black","rgb(67 20 7)"];
    const stylesBg: string[] = ["white","#FF9933"];
    const stylesSize: string[] = ["25px","20px"];

    return <div className=' grid grid-cols-2 m-5 gap-3'>
        {stylesText.map((text,i) =>
            <button
                key={i}
                onClick={()=>{props.changeToStyle(i+1)}}
                style={{border:"solid 3px " + stylesBorder[i], fontSize: stylesSize[i],padding:"0px 5px",borderRadius:"8px",backgroundColor:stylesBg[i], color: stylesBorder[i]}}
                className={stylesFont[i].className}
            >
                <ImageWrapper w='w-32' src={`/link_logo_short_${i+1}.png`}/>
                {text}
            </button>
        )}
    </div>;
}

export default StyleSelectionBox