"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Menu from './Menu'
import Searchbar from './Searchbar'
import NavbarIcons from './NavbarIcons'

const navbar = () => {
  return (
    <div className='px-4 h-20 md:px-8 lg:px-16 xl:px-32 2xl:px-6 relative'>
        {/*SMALL DEVICES */}
        <div className='flex items-center justify-between h-full md:hidden'>
        <h1 className=''>SHOPPY</h1>
        <Menu/>
        </div>

        {/*LARGER SCREENS*/}
        <div className='hidden md:flex items-center justify-between gap-8 h-full'>
            {/*left*/}
            <div className='w-1/3 xl:w-1/2 gap-6 flex'>
              <h1>SHOPPY</h1>
              <div className='hidden xl:flex items-center justify-between flex-1'>
                <Link href='/'>Home</Link>
                <Link href='/'>Shop</Link>
                <Link href='/'>Deals</Link>
                <Link href='/'>About</Link>
                <Link href='/'>Contact</Link>
                <Link href='/'>Logout</Link>
              </div>
            </div>
            {/*right*/}
            <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
              <Searchbar/>
              <NavbarIcons/>
            </div>
        </div>
       
    </div>
  )
}

export default navbar