"use client"

import React, { Suspense, useRef, useState } from 'react'
import ImageWrapper from '../components/ImageWrapper';
import Link from 'next/link';
import { printFont2 } from '../infoStore/fonts';
import FormBox from '../components/formBox';
import styles from "./variables.module.scss";
import { link } from '../infoStore/paypalLink';


const Design2Footer = (props:{id:any}) => {
  const [footerState, changeFS] = useState(false);
  const formType = useRef(0);
  const footerDivStyle = {
    backgroundColor: "#FF9933",
    maxWidth:"1080px",
    width: screen.width > parseInt(styles.minWidthForResponsive) ? "96%" : "100%",
    margin:"0px auto",
  }

  const footerPStyle = {
    padding:  screen.width > parseInt(styles.minWidthForResponsive) ? "5px 15px" : "5px 6px 30px 6px",
    fontSize: "15px",
    color: "black",
    lineHeight: "22px",
    fontWeight:"bold",
    height:"min-content",
  }

  function dispatch(arg0: {type: string}){
    arg0.type==="SHOW_FORM_BOX"? changeFS(true):changeFS(false);
  }

  function showForm(type: number){
      formType.current = type;
      dispatch({type: "SHOW_FORM_BOX"});
  }

  if (screen.width > parseInt(styles.minWidthForResponsive))
  return <footer className={`w-full py-5 ${printFont2.className}`} id={props.id}>
    <div style={{display:"grid", gridTemplateColumns:"auto 200px", ...footerDivStyle}}>
      <p style={footerPStyle}>
          If you find a bug in this website or want to report an error, <ClickButton type={0} func={showForm} /><br/>
          If there are any equations for which you want proof for, <ClickButton type={1} func={showForm} /><br/>
          For any suggestion and ideas, <ClickButton type={2} func={showForm} />
      </p>
      <Link href={link} target="_blank" className='flex flex-col justify-center items-center bg-white mx-5 h-min hover:no-underline my-auto' style={{border: " #CC3300 4px ridge", backgroundColor:"wheat"}}>
          <p className={" text-center font-bold text-sm "}>Want To Donate?</p>
          <ImageWrapper mw="max-w-[70%]" h="h-6" src="/payPal.png" alt="" />
      </Link>
      <Suspense fallback={<></>}><FormBox showFB={footerState} reducerDis={dispatch} type={formType.current}/></Suspense>
    </div>
  </footer>
  else return <footer className={`w-full ${printFont2.className}`} id={props.id}>
    <div style={footerDivStyle}>
      <p style={footerPStyle}>
        If you find a bug in this website or want to report an error, <ClickButton type={0} func={showForm} /><br/>
        If there are any equations for which you want proof for, <ClickButton type={1} func={showForm} /><br/>
        For any suggestion and ideas, <ClickButton type={2} func={showForm} />
      </p>
      <Suspense fallback={<></>}><FormBox showFB={footerState} reducerDis={dispatch} type={formType.current}/></Suspense>
    </div>
  </footer>;
}

export default Design2Footer;

function ClickButton(props: {type: number, func: (arg0: number) => void}){
    return <button onClick={()=>{props.func(props.type)}} className=' hover:underline outline-none' style={{color:"rgb(204, 51, 0)"}}>click here</button>
}