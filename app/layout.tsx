import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import "./global.scss";
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { CookiesProvider } from 'next-client-cookies/server';
import { DEFAULT_DESIGN_SELECTION } from './infoStore/designInfo';

export async function generateMetadata(): Promise<Metadata> {
  const cookieVal = parseInt((await cookies()).get("designSelected")?.value!);
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
  const cookieVal = parseInt((await cookies()).get("designSelected")?.value!)|| DEFAULT_DESIGN_SELECTION;

  if(cookieVal === 1){
    const FooterEl = dynamic(() =>  import(`./mainStyles/design1Footer`));
    return <CookiesProvider>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4860967711062471"
      crossOrigin="anonymous"/>
      <Script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"/>
      <html lang="en" className={`scroll1`} style={{backgroundColor:"rgb(249 250 251)"}}>
        <body suppressHydrationWarning>
          <div style={{height:"auto",minHeight:"100vh"}}>{children}</div>
          <FooterEl/>
        </body>
      </html>
      {/*
        For some reason, google adsense adds it own style like
        "min-height: 0px !important; height: auto !important;"
        The code below prevents that
      */}
      <Script id="setMinHeight">{`
        var wrapper = document.querySelector('body>div');
        const observer = new MutationObserver(function (mutations, observer) {
          wrapper.style.minHeight = '100vh'
        })
        observer.observe(wrapper, {
          attributes: true,
          attributeFilter: ['style']
        })
      `}</Script>
    </CookiesProvider>
  }
  else if (cookieVal === 2) return <CookiesProvider>
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4860967711062471" crossOrigin="anonymous"/>
    <Script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"/>
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  </CookiesProvider>
  else throw new Error("wrong design number value");
}