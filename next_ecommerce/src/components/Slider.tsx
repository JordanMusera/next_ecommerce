"use client"
import Image from 'next/image';
import React from 'react'

const Slider = () => {
    const slides = [
        {
            id: 1,
            title: "Summer Sale Collections",
            description: "Sale! Up to 50% off!",
            img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
            url: "/",
            bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
          },
          /*
          {
            id: 2,
            title: "Winter Sale Collections",
            description: "Sale! Up to 50% off!",
            img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
            url: "/",
            bg: "bg-gradient-to-r from-pink-50 to-blue-50",
          },
          {
            id: 3,
            title: "Spring Sale Collections",
            description: "Sale! Up to 50% off!",
            img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
            url: "/",
            bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
          },
          */
    ];

  return (
    <div className='h-[calc(100vh-80px)]'>
        <div className=''>
            {slides.map((slide)=>(
                <div className={`${slide.bg} w-screen h-screen flex flex-col xl:flex-row`} key={slide.id}>
                    {/*Text container*/}
                    <div className='h-1/2 xl:h-full flex flex-col items-center justify-center xl:w-1/2 text-center'>
                        <h2 className='text-xl lg:text-3xl 2xl:text-5xl'>{slide.title}</h2>
                        <h1 className='text-5xl lg:text-6xl 2xl:text-8xl'>{slide.description}</h1>
                        <button className='p-1 bg-black text-white rounded-md'>View</button>
                    </div>
                    {/*Image container*/}
                    <div className='h-1/2 xl:h-full relative xl:w-1/2'>
                        <Image src={slide.img} alt='' fill sizes='100%' className='object-cover'/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Slider