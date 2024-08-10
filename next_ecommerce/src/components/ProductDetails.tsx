"use client"
import React from 'react'
import CustomizeProduct from './CustomizeProduct'
import Add from './Add'

const ProductDetails = () => {
  return (
    <div className='px-10'>
        <div className=''>
            <h1 className='font-semibold text-lg'>Product Name</h1>
            <p>Product Description Product Description Product Description Product Description Product Description Product Description vvProduct Description Product Description vProduct Description Product Description Product Description Product Description Product Description Product Description </p>
        </div>

        <hr className='my-5'/>

        <div className='flex gap-5'>
            <h1 className='font-semibold text-gray-600 text-2xl line-through'>$456</h1>
            <h1 className='font-bold text-black text-2xl'>$123</h1>
        </div>

        <hr className='my-5'/>

        <CustomizeProduct/>
        <Add/>

        <div className=''>
            <h1 className='font-semibold text-lg'>Product Name</h1>
            <p>Product Description Product Description Product Description Product Description Product Description Product Description vvProduct Description Product Description vProduct Description Product Description Product Description Product Description Product Description Product Description </p>
        </div>

        <div className=''>
            <h1 className='font-semibold text-lg'>Product Name</h1>
            <p>Product Description Product Description Product Description Product Description Product Description Product Description vvProduct Description Product Description vProduct Description Product Description Product Description Product Description Product Description Product Description </p>
        </div>
    </div>
  )
}

export default ProductDetails