import { useEffect, useRef, FormEvent, useState } from "react";
import { cursiveMain, printFont, chalkWriting, printFont2, logoFont2 } from '../infoStore/fonts';
import { useCookies } from "next-client-cookies";
import { DEFAULT_DESIGN_SELECTION } from "../infoStore/designInfo";

export default function FormBox(props: {showFB: boolean, reducerDis: React.Dispatch<{type: string}>, type: number}){
    const dialogRef = useRef<HTMLDialogElement>(null);
    const formRes = useRef("");
    const [submitted,changeSubmitted] = useState(false);

    function diaClose(){
        document.documentElement.style.overflowY = "scroll";
        props.reducerDis({type: "HIDE_FORM_BOX"});
        if(formRes.current !== ""){
            alert(formRes.current);
            formRes.current = "";
        }
    }

    useEffect(()=>{
        if(props.showFB) {
            document.documentElement.style.overflowY = "hidden";
            dialogRef.current?.showModal();
        }
    })

    function getLabelAndTA(font: string, inputFont:string, type:number, textSize: string, textBg:string, labelColor:string,  placeholderClass: string){

        switch(type){
            case 0: return <>
                <label className={`${font} ${textSize} mt-4 block`} htmlFor={"mainText"} style={{color:labelColor}}>Feedback:</label>
                <textarea placeholder={`"I think there is a problem at..." `}  name="mainText" id="textarea" required style={{color:labelColor,borderColor:labelColor}} className={`${inputFont} resize-none h-28 mx-3 text-lg outline-none border-2 rounded-md px-1 text-ellipsis ${textBg} font-bold w-80 ${placeholderClass}`}/>
            </>
            case 1: return <>
                <label className={`${font} ${textSize} mt-4 block`} htmlFor={"mainText"} style={{color:labelColor}}>Feedback:</label>
                <textarea placeholder={`"I want the derivation of..." `} name="mainText" id="textarea" required style={{color:labelColor,borderColor:labelColor}} className={`${inputFont} resize-none h-28 mx-3 text-lg outline-none border-2 rounded-md px-1 text-ellipsis ${textBg} font-bold w-80 ${placeholderClass}`}/>
            </>
            case 2: return <>
                <label className={`${font} ${textSize} mt-4 block`} htmlFor={"mainText"} style={{color:labelColor}}>Feedback:</label>
                <textarea placeholder={`"There can be an improvement at..." `} name="mainText" id="textarea" required style={{color:labelColor,borderColor:labelColor}} className={`${inputFont} resize-none h-28 mx-3 text-lg outline-none border-2 rounded-md px-1 text-ellipsis ${textBg} font-bold w-80 ${placeholderClass}`}/>
            </>
            default:  return <p className={`${font} ${textSize} mt-4 block`} style={{color:labelColor}}>There was a problem rendering this.</p>
        }
    }

    async function onSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        changeSubmitted(true);
        const formData = new FormData(event.currentTarget);
        switch(props.type){
            case 0:
                formData.append("title","Problem");
                break;
            case 1:
                formData.append("title","Derivation");
                break;
            default:
                formData.append("title","Suggestion");
        }
        formData.append("pathname",window.location.pathname);
        const fetchData = await fetch(window.location.origin+"/infoStore/sendEmail", {
            method: "POST",
            body: formData
        });
        const data = await fetchData.json();
        formRes.current = data[0];
        console.log(data[1]);
        dialogRef.current?.close();
        changeSubmitted(false);
    }

    switch(parseInt(useCookies().get('designSelected')!) || DEFAULT_DESIGN_SELECTION){
        case 1: return <dialog onClose={diaClose} ref={dialogRef} className=' outline-none border-black border-4 rounded-xl bg-gray-200'>{submitted ?
            <p className={"m-4 text-3xl w-96 "+cursiveMain.className}>Submitting...</p> : <>
            <div className={`w-full text-right px-2 text-2xl`}><button onClick={()=>{dialogRef.current?.close()}} dangerouslySetInnerHTML={{__html:"𝑥"}} className=" outline-none"></button></div>
            <h3 className={`text-4xl w-full text-center ${cursiveMain.className}`}>Fill This Form</h3>
            <form onSubmit={onSubmit}>
                <div className="block">
                    <div className=" float-left">
                        <label htmlFor="name" className={`${cursiveMain.className} text-3xl mt-4 block ml-3`}>Name:</label>
                        <input id="name" type="text" required className={`${printFont.className} mx-3 text-lg outline-none border-black border-2 rounded-md px-1 text-ellipsis text-zinc-700 bg-gray-100 font-bold w-50`} name="name"/>
                        <label htmlFor="email" className={`${cursiveMain.className} text-3xl mt-4 block ml-3`}>Email:</label>
                        <input id="email" type="email" required className={`${printFont.className} mx-3 text-lg outline-none border-black border-2 rounded-md px-1 text-ellipsis text-zinc-700 bg-gray-100 font-bold w-50`} name="email"/>
                    </div>
                    <div className=" float-right">{getLabelAndTA(cursiveMain.className, printFont.className, props.type, "text-3xl", "bg-gray-100", "black", "placeholder-zinc-400")}</div>
                    <div className="clear-both"> </div>
                </div>
                <input type="submit" className={` pt-1 text-xl block w-full cursor-pointer bg-zinc-900 text-gray-300 mt-8 ${chalkWriting.className}`} style={{borderTop: "#bda27e solid 4px", boxShadow: "0px 0px 0px 2px #c2a782, 0px 0px 0px 3px #a58e6f"}} value={"Submit"}/>
            </form>
            </>
        }</dialog>;
        case 2: return <dialog onClose={diaClose} ref={dialogRef} className=' font-bold outline-none border-orange-950 border-4 rounded-xl bg-[#FFDD77]' style={{color:"rgb(67, 20, 7)"}}>{submitted ?
            <p className={"m-4 text-3xl w-96 "+printFont2.className}>Submitting...</p> : <>
            <div className={`w-full text-right px-2 text-xl ${logoFont2.className}`}><button onClick={()=>{dialogRef.current?.close()}} dangerouslySetInnerHTML={{__html:"X"}} className=" outline-none"></button></div>
            <h3 className={`text-4xl w-full text-center ${printFont2.className}`}>Fill This Form</h3>
            <form onSubmit={onSubmit}>
                <div className="block">
                    <div className=" float-left">
                        <label htmlFor="name" className={`${printFont2.className} text-2xl mt-4 block ml-3`}>Name:</label>
                        <input id="name"  type="text" required className={`${logoFont2.className} mx-3 text-lg outline-none border-orange-950 border-2 rounded-md px-1 text-ellipsis bg-[#CC5511] font-bold w-50`} name="name"/>
                        <label htmlFor="email" className={`${printFont2.className} text-2xl mt-4 block ml-3`}>Email:</label>
                        <input id="email" type="email" required className={`${logoFont2.className} mx-3 text-lg outline-none border-orange-950 border-2 rounded-md px-1 text-ellipsis bg-[#CC5511] font-bold w-50`} name="email"/>
                    </div>
                    <div className=" float-right">{getLabelAndTA(printFont2.className, logoFont2.className, props.type, "text-2xl", "bg-[#CC5511]", "#431407", "placeholder-orange-900")}</div>
                    <div className="clear-both"> </div>
                </div>
                <input type="submit" className={` pt-1 text-xl block w-full cursor-pointer bg-[#CC5511] border-t-4 border-t-orange-950 mt-8 ${printFont2.className}`} value={"Submit"}/>
            </form>
            </>
        }</dialog>;
        default:
            <p>Error</p>
    }
    
}