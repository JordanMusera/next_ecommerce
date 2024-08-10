import React from 'react'
import ProductImages from './ProductImages'
import ProductDetails from './ProductDetails'

const AboutProduct = () => {
  return (
    <div className='flex flex-col xl:flex-row w-full'>
      <div className='w-full xl:w-1/2'>
        <div className='xl:sticky xl:top-0'>
          <ProductImages/>
        </div>
      </div>
      <div className='w-full xl:w-1/2'>
        <ProductDetails/>
      </div>
    </div>
  )
}

export default AboutProduct
