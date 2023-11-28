// @ts-nocheck

import type { Metadata } from 'next';
import "./global.scss";
import designSelected from './infoStore/designSelected';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Welcome to deriveit.net',
  description: 'A website dedicated to proving some mathematical formulae, and providing the history of some scientific theories',
  icons:{ icon:`/favicon${designSelected}.ico`}
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  const FooterEl = dynamic(() =>  import(`./footerStyles/design${designSelected}Footer`),{ssr: false});

  return (
    <html lang="en">
      <body className=' bg-gray-50'>
        {children}
        <FooterEl/>
      </body>
    </html>
  )
}