import { useEffect, useRef, FormEvent, useState } from "react";
import { cursiveMain, printFont, chalkWriting } from '../infoStore/fonts';

export default function FormBox(props: {showFB: boolean, reducerDis: React.Dispatch<{type: string}>, type: number, actionLoc: string}){
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

    function getLabel(){
        switch(props.type){
            case 0: return <label className={`${cursiveMain.className} text-3xl mt-4 block`}>
                Feedback:<br/>
                <textarea name="mainText" id="textarea" required placeholder={`"I think there is a problem at..." `} className={`${printFont.className} resize-none h-28 mx-3 text-lg outline-none border-black border-2 rounded-md px-1 text-ellipsis text-zinc-700 bg-gray-100 font-bold w-80`}/>
            </label>
            case 1: return <label className={`${cursiveMain.className} text-3xl mt-4 block`}>
                Feedback:<br/>
                <textarea name="mainText" id="textarea" required placeholder={`"I want the derivation of..." `} className={`${printFont.className} resize-none h-28 mx-3 text-lg outline-none border-black border-2 rounded-md px-1 text-ellipsis text-zinc-700 bg-gray-100 font-bold w-80`}/>
            </label>
            case 2: return <label className={`${cursiveMain.className} text-3xl mt-4 block`}>
                Feedback:<br/>
                <textarea name="mainText" id="textarea" required placeholder={`"There can be an improvement at..." `} className={`${printFont.className} resize-none h-28 mx-3 text-lg outline-none border-black border-2 rounded-md px-1 text-ellipsis text-zinc-700 bg-gray-100 font-bold w-80`}/>
            </label>
            default:  return <p className={`${cursiveMain.className} text-3xl mt-4 block`}>There was a problem rendering this.</p>
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
        const fetchData = await fetch(props.actionLoc, {
            method: "POST",
            body: formData
        });
        const data = await fetchData.json();
        formRes.current = data[0];
        console.log(data[1]);
        dialogRef.current?.close();
        changeSubmitted(false);
    }

    return <dialog onClose={diaClose} ref={dialogRef} className=' outline-none border-black border-4 rounded-xl bg-gray-200'>{submitted ?
        <p className={"m-4 text-3xl w-96 "+cursiveMain.className}>Submitting...</p> : <>
        <div className={`w-full text-right px-2 text-2xl`}><button onClick={()=>{dialogRef.current?.close()}} dangerouslySetInnerHTML={{__html:"𝑥"}} className=" outline-none"></button></div>
        <h3 className={`text-4xl w-full text-center ${cursiveMain.className}`}>Fill This Form</h3>
        <form onSubmit={onSubmit}>
            <div className="block">
                <div className=" float-left">
                    <label className={`${cursiveMain.className} text-3xl mt-4 block ml-3`}>
                        Name:<br/>
                        <input id="name"  type="text"  required className={`${printFont.className} mx-3 text-lg outline-none border-black border-2 rounded-md px-1 text-ellipsis text-zinc-700 bg-gray-100 font-bold w-50`} name="name"/>
                    </label>
                    <label className={`${cursiveMain.className} text-3xl mt-4 block ml-3`}>
                        Email:<br/>
                        <input id="email" type="email" required className={`${printFont.className} mx-3 text-lg outline-none border-black border-2 rounded-md px-1 text-ellipsis text-zinc-700 bg-gray-100 font-bold w-50`} name="email"/>
                    </label>
                </div>
                <div className=" float-right">{getLabel()}</div>
                <div className="clear-both"> </div>
            </div>
            <input type="submit" className={` pt-1 text-xl block w-full cursor-pointer bg-zinc-900 text-gray-300 mt-8 ${chalkWriting.className}`} style={{borderTop: "#bda27e solid 4px", boxShadow: "0px 0px 0px 2px #c2a782, 0px 0px 0px 3px #a58e6f"}} value={"Submit"}/>
        </form>
        </>
    }</dialog>;
}