import './globals.css'
import {Flex} from 'antd';

import type {Children, Metadata} from "@/app/utils/interfaces";
import {HeaderLayout} from "@/app/components/HeaderLayout";
import {Inter} from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ant charts',
  description: 'Some Ant charts visualisation',
}

export default function RootLayout({children}: Children) {

  return (
      <html lang="en">
      <body className={inter.className}>
      <Flex gap="middle" wrap="wrap">
        <HeaderLayout title={metadata.title}/>
        {children}
      </Flex>
      </body>
      </html>
  )
}
