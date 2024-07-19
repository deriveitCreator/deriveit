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
    icons: `/favicon${cookieVal || DEFAULT_DESIGN_SELECTION}.ico`,
    metadataBase: new URL('https://www.deriveit.net'),
    openGraph: {
      images: [{
        url: `/link_logo${DEFAULT_DESIGN_SELECTION}.png`
      }],
      siteName: "DeriveIt"
    }
  }
}

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const cookieVal = parseInt(cookies().get("designSelected")?.value!)|| DEFAULT_DESIGN_SELECTION;

  if(cookieVal === 1){
    const FooterEl = dynamic(() =>  import(`./footerStyles/design1Footer`), {ssr:false});
    return <CookiesProvider>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4860967711062471"
      crossOrigin="anonymous"/>
      {/*
        For some reason, google adsense adds it own style like
        "min-height: 0px !important; height: auto !important;"
      */}
      <Script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"/>
      <html lang="en" className={`overflow-hidden scroll1`}>
        <body>
          <div style={{height:"auto",minHeight:"100vh"}}>{children}</div>
          <FooterEl/>
        </body>
      </html>
    </CookiesProvider>
  }
  else if (cookieVal === 2) return <CookiesProvider>
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4860967711062471" crossOrigin="anonymous"/>
    {/*
      For some reason, google adsense adds it own style like
      "min-height: 0px !important; height: auto !important;"
    */}
    <Script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"/>
    <html lang="en">
      <body>{children}</body>
    </html>
  </CookiesProvider>
  else throw new Error("wrong design number value");
}