import { Kalam, Niconne, Karla, Roboto } from 'next/font/google';

export const chalkWriting = Kalam({
  weight: ["700"],
  subsets: ["latin"]
})

export const cursiveMain = Niconne({
  weight: ["400"],
  subsets: ["latin"]
})

export const mainForText = Karla({
  subsets: ["latin"],
  weight: ["500"],
  style: "italic"
})

export const printFont = Roboto({
  subsets: ["latin"],
  weight: ["700"],
  style: "italic"
})
