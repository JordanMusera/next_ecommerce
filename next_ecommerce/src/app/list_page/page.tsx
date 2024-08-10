import ListPage from '@/components/ListPage'
import ProductList from '@/components/ProductList'
import React from 'react'

const list_page = () => {
  return (
    <div>
        <ListPage/>
        <div className='px-10'>
          <ProductList/>
        </div>
        
    </div>
  )
}

export default list_page