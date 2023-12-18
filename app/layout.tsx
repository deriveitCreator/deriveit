import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import "./global.scss";
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { CookiesProvider } from 'next-client-cookies/server';
import { DEFAULT_DESIGN_SELECTION } from './infoStore/designInfo';

export async function generateMetadata(): Promise<Metadata> {
  const cookieVal = parseInt(cookies().get("designSelected")?.value!);
  return {
    title: 'Welcome to deriveit.net',
    description: 'A website dedicated to proving some mathematical formulae, and providing the history of some scientific theories',
    icons: `/favicon${cookieVal || DEFAULT_DESIGN_SELECTION}.ico`
  }
}

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const cookieVal = parseInt(cookies().get("designSelected")?.value!)|| DEFAULT_DESIGN_SELECTION;

  if(cookieVal === 1){
    const FooterEl = dynamic(() =>  import(`./footerStyles/design1Footer`));
    return <CookiesProvider>
      <Script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"/>
      <html lang="en" className={` overflow-hidden scroll1`}>
        <body className=' bg-gray-50'>
          <div className=' min-h-screen '>{children}</div>
          <FooterEl/>
        </body>
      </html>
    </CookiesProvider>
  }
  else return <CookiesProvider>
    <Script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"/>
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  </CookiesProvider>
}