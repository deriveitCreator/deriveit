"use client"

import Link from 'next/link';
import ImageWrapper from '../components/ImageWrapper';
import { printFont, cursiveMain } from '../infoStore/fonts';
import FormBox from '../components/formBox';
import { Suspense, useReducer, useRef, useState } from 'react';

const footerPStyle = {
    padding: "0px",
    fontSize: "26px",
    color: "#ddd",
    lineHeight: "30px"
}

const footerIdStyle = {
	width:"100%",
	display:"grid",
	borderTop: "#bda27e solid 10px",
	boxShadow: "0px 0px 0px 2px #c2a782, 0px 0px 0px 4px #a58e6f, 0px 1px 8px -1px black inset",
	gridTemplateColumns:"15% 65% 20%",
	backgroundColor:"#333",
	paddingTop:"25px",
	paddingBottom:"30px"
}

const footerStates = {
    showFooter: false
}

const reducer = (state:object, action: {type:string, payload?:string}) => {
    switch (action.type) {
        case "SHOW_FORM_BOX":
            return {...state, showFooter: true};
        case "HIDE_FORM_BOX":
            return {...state, showFooter: false};
        default:
            return state;
    }
}

export default function FooterComp(){
    const [fs, dispatch] = useReducer(reducer, footerStates);
    const phpLocation = useRef("");
    const [formType, changeFT] = useState(0);

    function showForm(type: number){
        phpLocation.current = window.location.origin+"/infoStore/sendEmail";
        changeFT(type);
        dispatch({type: "SHOW_FORM_BOX"});
    }

    return <footer style={footerIdStyle}>
        <Link href={"/"}>
            <ImageWrapper mw="max-w-[80%]" h="h-full" w="w-3/4" src="/link_logo_short_1.png" alt=""  className="flex justify-center items-center "/>
        </Link>
        <p className={cursiveMain.className} style={footerPStyle}>
            If you find a bug in this website or want to report an error, <ClickButton type={0} func={showForm} /><br/>
            If there are any equations for which you want proof for, <ClickButton type={1} func={showForm} /><br/>
            For any suggestion and ideas, <ClickButton type={2} func={showForm} />
        </p>
        <Link href="https://www.paypal.com/donate/?business=8UEU66XK9RMKG&no_recurring=1&currency_code=CAD" target="_blank" className='flex flex-col justify-center items-center bg-gray-50 mx-10 border-blue-900 border-2 outline-1 outline-white outline h-min py-2 hover:no-underline'>
            <p className={" text-center text-lg pb-2 text-blue-900 font-bold "+printFont.className}>Want To Donate?</p>
            <ImageWrapper mw="max-w-[70%]" h="h-6" src="/payPal.png" alt="" />
        </Link>
        {/*@ts-ignore */}
        <Suspense fallback={<></>}><FormBox showFB={fs.showFooter} reducerDis={dispatch} type={formType} actionLoc={phpLocation.current}/></Suspense>
    </footer>
}

function ClickButton(props: {type: number, func: (arg0: number) => void}){
    return <button onClick={()=>{props.func(props.type)}} className=' hover:underline outline-none'>click here</button>
}