import React from 'react'
import { Kaisei_Decol } from "next/font/google";

const kaisei = Kaisei_Decol({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Header = () => {
  return (
    <header className="w-[740px] h-[200px] flex mx-auto my-0 items-center">
      <ul className={`w-full flex font-extrabold text-lg ${kaisei.className}`}>
        <li className="mr-4">home</li>
        <li className="mr-4">about</li>
        <li className="mr-4">projects</li>
        <li className="mr-4">contact</li>
      </ul>
    </header>
  )
}

export default Header