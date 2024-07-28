import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Menu = () => {
    const [open,setOpen] = useState(false)
  return (
    <div>
         <Image
        src={'/menu.png'} 
        alt='' 
        height={28} 
        width={28} 
        onClick={()=>setOpen((prev)=>!prev)}
        className=''/>
        {
            open && (
                <div className='absolute left-0 top-20 bg-black w-full h-[calc(100vh-80px)] z-10 text-white flex flex-col items-center justify-center gap-8 text-xl'>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Shop</Link>
                    <Link href='/'>Deals</Link>
                    <Link href='/'>About</Link>
                    <Link href='/'>Contact</Link>
                    <Link href='/'>Logout</Link>
                </div>
            )
        }
    </div>
  )
}

export default Menu