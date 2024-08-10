"use client"
import Image from 'next/image'
import React from 'react'
import Filter from './Filter'

const ListPage = () => {
  return (
    <div className='p-10'>
        <div>
            <div className='relative w-full bg-pink-200 rounded-2xl h-max flex px-3'>
                <div className='gap-8 flex flex-col items-center justify-center flex-1 mr-10'>
                    <h1 className='font-2xl text-2xl md:text-4xl font-bold'>Grab upto 50% off on <br/> Selected products</h1>
                    <button className='px-3 py-1 bg-pink-400 rounded-xl'>Buy now</button>
                </div>
                
                <div className='w-1/4 relative h-52'>
                     <Image src='/woman.png' fill alt=''/>
                </div>
            </div>

            <Filter/>
        </div>
    </div>
  )
}

export default ListPage