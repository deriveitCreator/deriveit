
import React, { useRef, useEffect } from 'react';
import {cursiveMain, chalkWriting } from "@/app/infoStore/fonts";
import { NextFont } from 'next/dist/compiled/@next/font';
import ImageWrapper from './ImageWrapper';
import { useRouter } from 'next/navigation';

const StyleSelectionBox = (props: {showDB: boolean, reducerDis: React.Dispatch<{type: string}>}) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const router = useRouter();
    
    function diaClose(){
        document.documentElement.style.overflowY = "scroll";
        props.reducerDis({type: "HIDE_DIALOG_BOX"});
    }

    useEffect(()=>{
        if(props.showDB) {
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

    let stylesText: string[] = ["Cursive","Colorful"];
    let stylesFont: NextFont[] = [cursiveMain,cursiveMain];
    let stylesBorder: string[] = ["black","brown"];
    let stylesBg: string[] = ["white","orange"];

    return <dialog onClose={diaClose} ref={dialogRef} className=' outline-none border-black border-8 rounded-xl bg-gray-100'>
        <h3 className={cursiveMain.className + " text-6xl mt-5 text-center"}>Styles</h3>
        <div className=' grid grid-cols-2 m-5 gap-3'>
            {stylesText.map((text,i) =>
                <button
                    key={i}
                    onClick={()=>{changeToStyle(i+1)}}
                    style={{border:"solid 2px " + stylesBorder[i], fontSize:"25px",padding:"0px 5px",borderRadius:"8px",backgroundColor:stylesBg[i]}}
                    className={stylesFont[i].className}
                >
                    <ImageWrapper w='w-32' src={`/link_logo_short_${i+1}.png`}/>
                    {text}
                </button>
            )}
        </div>
        <button
            className={chalkWriting.className + " bg-zinc-900 w-full text-gray-300 pt-1"}
            style={{borderTop: "#bda27e solid 4px", boxShadow: "0px 0px 0px 2px #c2a782, 0px 0px 0px 3px #a58e6f"}}
            onClick={()=>dialogRef.current?.close()}
        >Close</button>
    </dialog>;
}

export default StyleSelectionBox