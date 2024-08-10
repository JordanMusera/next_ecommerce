"use client"
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import React, { useState } from 'react'

const NavbarIcons = () => {
  const isLoggedIn = true;
  const [isProfileOpen,setIsProfileOpen] = useState(false)
  const router = useRouter();

  const handleProfile = (e:React.MouseEvent<HTMLImageElement>) =>{
    if(!isLoggedIn){
      return router.push('/login')
    }
    setIsProfileOpen((prev)=>(!prev))
  }

  return (
    <div className='flex gap-8 items-center justify-between relative'>
      <Image src='/profile_icon.png' alt='' width={28} height={28}
      onClick={handleProfile}/>
      {isProfileOpen &&(
        <div className='absolute mt-24 bg-slate-200 rounded-md p-1 z-10 flex flex-col'>
          <Link href='/profile'>Profile</Link>
          <Link href='/logout'>Logout</Link>
        </div>
      )}
      <Image src='/notification_icon.png' alt='' width={28} height={28}/>
      <Image src='/basket_icon.png' alt='' width={32} height={32}/>
    </div>
  )
}

export default NavbarIcons