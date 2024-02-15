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
    const FooterEl = dynamic(() =>  import(`./footerStyles/design1Footer`), {ssr:false});
    return <CookiesProvider>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4860967711062471"
      crossOrigin="anonymous"/>
      <Script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"/>
      <html lang="en" className={`bg-gray-50 overflow-hidden scroll1`}>
        <body>
          <div style={{height:"100vh"}}>{children}</div>
          <FooterEl/>
        </body>
      </html>
      {/*For some reason, google adsense adds it own style to the div wrapper and changes the height, this observer resets the height to 100vh every time a change is detected. */}
      <Script id='fixedHeightScript'>{`
        var wrapper = document.querySelector('body>div');
        const observer = new MutationObserver(function (mutations, observer) {
          wrapper.style.height = '100vh'
        })
        observer.observe(wrapper, {
          attributes: true,
          attributeFilter: ['style']
        })
      `}</Script>
    </CookiesProvider>
  }
  else return <CookiesProvider>
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4860967711062471" crossOrigin="anonymous"/>
    <Script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"/>
    <html lang="en">
      <body>{children}</body>
    </html>
  </CookiesProvider>
}