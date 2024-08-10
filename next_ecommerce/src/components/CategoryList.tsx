"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const CategoryList = () => {
    const router = useRouter()
    const clickFunction = (e: React.MouseEvent<HTMLDivElement>) =>{
        router.push('/list_page')
    }

  return (
    <div className='sm:w-[45%] xl:w-[22%]' onClick={clickFunction}>
        <div className='relative h-80 flex flex-col'>
            <Image src='https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800' alt='' fill sizes='25vw'
            className='rounded-md'/>
        </div>
        <div className='font-md'>Category name</div>
    </div>
  )
}

export default CategoryList