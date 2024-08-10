"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const searchbar = () => {
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as String;

        if(name){
            router.push(`/list?name=${name}`)
        }
    }

  return (
    <form onSubmit={handleSearch} className='flex justify-between flex-1 rounded-xl bg-gray-100 h-10 px-2'>
        <input placeholder='Search item'
        className='bg-transparent outline-none flex-1'
        name='name'/>
        <button className='cursor-pointer'>
            <Image src="/search_icon.png" alt='' width={28} height={28}/>
        </button>
    </form>
  )
}

export default searchbar;