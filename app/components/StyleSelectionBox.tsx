import React, { useRef, useEffect } from 'react'

const StyleSelectionBox = (props: {showDB: boolean, reducerDis: React.Dispatch<{type: string}>, curFont1:string, curFont2:string}) => {
    const dialogRef = useRef<HTMLDialogElement>(null)
    
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

    let stylesText: string[] = ["Cursive","Colorful"];
    let stylesBorder: string[] = ["black","brown"];
    let stylesBg: string[] = ["white","orange"];

    return <dialog onClose={diaClose} ref={dialogRef} className=' outline-none border-black border-8 rounded-xl bg-gray-100'>
        <h3 className={props.curFont1 + " text-6xl mt-5 text-center"}>Styles</h3>
        <div className=' grid grid-cols-2 m-5 gap-3'>
            {stylesText.map((text,i) =>
                <button key={i} style={{border:"solid 4px " + stylesBorder[i], fontSize:"25px",padding:"0px 5px",borderRadius:"8px",backgroundColor:stylesBg[i]}}>{text}</button>
            )}
        </div>
        <button
            className={props.curFont2 + " bg-zinc-900 w-full text-gray-300 pt-1"}
            style={{borderTop: "#bda27e solid 4px", boxShadow: "0px 0px 0px 2px #c2a782, 0px 0px 0px 3px #a58e6f"}}
            onClick={()=>dialogRef.current?.close()}
        >Close</button>
    </dialog>;
}

export default StyleSelectionBox