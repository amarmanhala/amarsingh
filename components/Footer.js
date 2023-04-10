import Image from 'next/image'
import React, { useState, useEffect } from 'react';

const Footer = () => {
  

  return (
    <footer className="flex w-full flex-col h-20 mt-20">

      
      <p className="flex flex-row items-center">This website built with&nbsp;
      <a href="https://nextjs.org" target="__blank"><Image alt="Thanks to nextjs" src="/nextjs.svg" width={20} height={20}></Image></a>&nbsp;
      <a href="https://nextjs.org" target="__blank"><Image alt="Thanks to nextjs" src="/tailwind.svg" width={20} height={20}></Image></a>&nbsp;
      and 🩵
      </p>
     

    </footer>
  )
}

export default Footer