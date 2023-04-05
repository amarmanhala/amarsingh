import React from 'react'
import { Kaisei_Decol } from "next/font/google";
import Link from 'next/link';

const kaisei = Kaisei_Decol({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Header = () => {
  return (
    <header className="w-[740px] h-[200px] flex mx-auto my-0 items-center">
      <ul className={`w-full flex font-extrabold text-lg ${kaisei.className}`}>
        <li className="mr-4"><Link href="/">home</Link></li>
        <li className="mr-4"><Link href="/about">about</Link></li>
        <li className="mr-4"><Link href="/projects">projects</Link></li>
        <li className="mr-4"><Link href="/contact">contact</Link></li>
      </ul>
    </header>
  )
}

export default Header