
import Link from 'next/link';
import ImageWrapper from '../components/ImageWrapper';
import { printFont, cursiveMain } from '../infoStore/fonts';

const footerPStyle = {
    padding: "0px 20px",
    fontSize: "26px",
    color: "#ddd",
    lineHeight: "30px"
}

const footerIdStyle = {
	width:"100%",
	display:"grid",
	borderTop: "#bda27e solid 10px",
	boxShadow: "0px 0px 0px 2px #c2a782, 0px 0px 0px 4px #a58e6f, 0px 1px 8px -1px black inset",
	gridTemplateColumns:"10% 70% 20%",
	backgroundColor:"#333",
	paddingTop:"25px",
	paddingBottom:"30px"
}

export default function footerComp(){
    return <footer style={footerIdStyle}>
        <Link href={"/"} target="_blank" className={"flex justify-center items-center"}>
            <ImageWrapper style={{maxWidth: "80%"}} src="/link_logo_short_1.png" alt=""/>
        </Link>
        <p className={cursiveMain.className} style={footerPStyle}>
            If you find a bug in this website or want to report an error, <Link href='/' className=' hover:no-underline'>click here</Link><br/>
            If there are any equations for which you want proof for, <Link href='/'className=' hover:no-underline'>click here</Link><br/>
            For any suggestion and ideas, <Link href='/' className=' hover:no-underline'>click here</Link>
        </p>
        <Link href="https://www.paypal.com/donate/?business=8UEU66XK9RMKG&no_recurring=1&currency_code=CAD" target="_blank" className='flex flex-col justify-center items-center bg-gray-50 mx-10 border-blue-900 border-2 outline-1 outline-white outline h-min py-2'>
            <p className={" text-center text-base pb-2 text-blue-900 "+printFont.className}>Want To Donate?</p>
            <ImageWrapper style={{maxWidth: "70%"}} src="/payPal.png" alt=""/>
        </Link>
    </footer>
}