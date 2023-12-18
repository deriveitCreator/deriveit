import { Kalam, Niconne, Karla, Rochester, Newsreader } from 'next/font/google';
import localFont from 'next/font/local';

//Used in design 1
export const chalkWriting = Kalam({
  weight: ["400", "700"],
  subsets: ["latin"]
})

export const cursiveMain = Niconne({
  weight: ["400"],
  subsets: ["latin"]
})

export const printFont = Karla({
  subsets: ["latin"],
  weight: ["500","700"],
  style: "italic"
})

export const textMain = Rochester({
  weight: ["400"],
  subsets: ["latin"]
})

//Used in design 2
export const logoFont2 = localFont({ src: './downloadedFonts/pointfree.ttf' });

export const printFont2 = localFont({ src: './downloadedFonts/LinLibertine_R.ttf' });

export const headingFont = localFont({ src: './downloadedFonts/Nationpp.ttf' });

export const mainTextFont = localFont({ src: './downloadedFonts/SF_Cartoonist_Hand.ttf'});


//Archived
/*
export const textMain = Cormorant_Upright({
  weight: ["500","700"],
  subsets: ["latin"]
})
*/