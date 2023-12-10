// @ts-nocheck

import type { Metadata } from 'next';
import "./global.scss";
import designSelected from './infoStore/designSelected';
import dynamic from 'next/dynamic';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Welcome to deriveit.net',
  description: 'A website dedicated to proving some mathematical formulae, and providing the history of some scientific theories',
  icons:{ icon:`/favicon${designSelected}.ico`}
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  const FooterEl = dynamic(() =>  import(`./footerStyles/design${designSelected}Footer`),{ssr: false});

  return ( <>
    <Script src="https://polyfill.io/v3/polyfill.min.js?features=es6"/>
    <Script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"/>
    <html lang="en" className=' overflow-hidden'>
      <body className=' bg-gray-50'>
        <div className=' min-h-screen '>{children}</div>
        <FooterEl/>
      </body>
    </html>
  </>)
}