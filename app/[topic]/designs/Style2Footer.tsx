"use client"

import React, { Suspense, useEffect, useState } from 'react';
import FormBox from '@/app/global_components/FormBox';
import Image from 'next/image';
import { printFont2 } from "@/app/infoStore/fonts";
import Link from "next/link";
import { link } from "../../infoStore/donationLink";
import styles from "../designs/style2.module.scss";
import { ColorInfoType } from '../../infoStore/topicsInfo';

export default function FooterEl(props: ColorInfoType){
	const [formType, changeType] = useState(-1);

  useEffect(()=>{
		document.documentElement.style.backgroundColor = props.bgColor;
  }, []); // eslint-disable-line

  return <footer className={printFont2.className+' font-bold'}>
    <hr style={{backgroundColor: props.borderColor, height:"4px", border:"none"}}/>
    <div style={{display:"grid" ,margin:"0px 15px 0px 20px"}} id={styles.mainFooter}>
      <Link href="/" className={'mx-4 my-4 relative h-[121px]'} id={styles.homeLink}>
        <Image src="/link_logo_trans2.png" alt="" sizes="100vw" fill/>
      </Link>
      <div style={{paddingLeft:"10px", marginTop:"10px", backgroundColor: props.headerBgColor, color: props.footerColor, borderColor: props.borderColor}} id={styles.feedback}>
        <p>If you find a bug in this website or want to report an error, <ClickButton type={0} func={changeType} /></p>
        <p>If there are any equations for which you want proof for, <ClickButton type={1} func={changeType} /></p>
        <p>For any suggestion and ideas, <ClickButton type={2} func={changeType} /></p>
      </div>
      <Link href={link} style={{color: props.footerColor, borderColor: props.borderColor, backgroundColor: props.headerBgColor}} target="_blank" id={styles.donate}>
        <Image alt="donation link" src={"/support_me_on_kofi_badge_beige.png"} width={112} height={60}/>
      </Link>
    </div>
    <Suspense fallback={<></>}><FormBox type={formType} styleNum={2}/></Suspense>
  </footer>;
}
function ClickButton(props: {type: number, func: React.Dispatch<React.SetStateAction<number>>}){
  return <button onClick={()=>{props.func(props.type)}} className=' hover:underline outline-none'>click here</button>
}