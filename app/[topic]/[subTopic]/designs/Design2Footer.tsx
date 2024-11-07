"use client"

import React, { Suspense, useState } from 'react';
import FormBox from '@/app/components/FormBox';
import Image from 'next/image';
import { printFont2 } from "@/app/infoStore/fonts";
import Link from "next/link";
import { link } from "../../../infoStore/paypalLink";
import styles from "./design2.module.scss";

export default function FooterEl(props: {borderColor:string, textColor:string, headerBgColor:string}){
	const [formType, changeType] = useState(-1);

  return <footer className={printFont2.className+' font-bold'}>
    <hr style={{backgroundColor: props.borderColor, height:"4px", border:"none"}}/>
    <div style={{display:"grid" ,margin:"0px 15px 0px 20px"}} id={styles.mainFooter}>
      <Link href="/" className={'mx-4 my-4 relative h-[121px]'} id={styles.homeLink}>
        <Image src="/link_logo_trans2.png" alt="" sizes="100vw" fill/>
      </Link>
      <div style={{paddingLeft:"10px", marginTop:"10px", backgroundColor: props.headerBgColor, color: props.textColor, borderColor: props.borderColor}} id={styles.feedback}>
        <p>If you find a bug in this website or want to report an error, <ClickButton type={0} func={changeType} /></p>
        <p>If there are any equations for which you want proof for, <ClickButton type={1} func={changeType} /></p>
        <p>For any suggestion and ideas, <ClickButton type={2} func={changeType} /></p>
      </div>
      <Link href={link} style={{borderColor: props.borderColor, backgroundColor: props.headerBgColor, color:props.textColor, display:"flex",flexDirection:"column",justifyContent:"center",padding:"0px 25px", marginTop:"10px"}} target="_blank" id={styles.donate}>
        <p className={"text-center font-bold text-sm"}>Want To Donate?</p>
        <div className={'flex justify-center h-6 relative'}>
          <Image src="/payPal.png" alt="" layout='fill' objectFit='contain'/>
        </div>
      </Link>
    </div>
    <Suspense fallback={<></>}><FormBox type={formType}/></Suspense>
  </footer>;
}
function ClickButton(props: {type: number, func: React.Dispatch<React.SetStateAction<number>>}){
  return <button onClick={()=>{props.func(props.type)}} className=' hover:underline outline-none'>click here</button>
}