import React from 'react'
import Slider from '@/components/Slider'
import ProductList from '@/components/ProductList'
import CategoryList from '@/components/CategoryList'

const page = () => {
  return (
    <div className=''>
      <Slider/>
      <div className='mt-24 md:px-8 lg:px-16 xl:px-32'>
        <h1 className='text-2xl mb-4'>Featured Products</h1>
        <ProductList/>
      </div>
      
      <div className='md:px-8 lg:px-16 xl:px-32'>
        <h1 className='text-2xl mb-4'>Category List</h1>
        <CategoryList/>
      </div>
    </div>
  )
}

export default page