import { Kalam, Niconne, Karla, Rochester } from 'next/font/google';

//Used in design 1
export const chalkWriting = Kalam({
  weight: ["700"],
  subsets: ["latin"]
})

export const cursiveMain = Niconne({
  weight: ["400"],
  subsets: ["latin"]
})

export const textMain = Rochester({
  weight: ["400"],
  subsets: ["latin"]
})

export const printFont = Karla({
  subsets: ["latin"],
  weight: ["500","700"],
  style: "italic"
})

//Archived
/*
export const textMain = Cormorant_Upright({
  weight: ["500","700"],
  subsets: ["latin"]
})
*/