import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex w-full flex-row h-28 mt-12">
      <p className="flex flex-row items-center">This website built with&nbsp;
      <a href="https://nextjs.org" target="__blank"><Image alt="Thanks to nextjs" src="/nextjs.svg" width={20} height={20}></Image></a>&nbsp;
      <a href="https://nextjs.org" target="__blank"><Image alt="Thanks to nextjs" src="/tailwind.svg" width={20} height={20}></Image></a>&nbsp;
      and 🩵
      </p>
    </div>
  )
}

export default Footer