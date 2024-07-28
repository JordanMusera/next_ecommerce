"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Menu from './Menu'

const navbar = () => {
  return (
    <div className='px-4 h-20 md:px-8 lg:px-16 xl:px-32 2xl:px-6 relative'>
        {/*SMALL DEVICES */}
        <div className='flex items-center justify-between h-full'>
        <h1 className=''>SHOPPY</h1>
        <Menu/>
        </div>

        {/*LARGE SCREENS*/}
        <div>
            {/*left*/}
            <div></div>
            {/*right*/}
            <div></div>
        </div>
       
    </div>
  )
}

export default navbar