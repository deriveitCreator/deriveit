import { Kalam, Niconne, Karla } from 'next/font/google';
import localFont from 'next/font/local';


export const chalkWriting = Kalam({
  weight: ["700"],
  subsets: ["latin"]
})

export const cursiveMain = Niconne({
  weight: ["400"],
  subsets: ["latin"]
})

export const textMain = localFont({ src: './Cormorant-MediumItalic.otf' });

export const printFont = Karla({
  subsets: ["latin"],
  weight: ["500","700"],
  style: "italic"
})
