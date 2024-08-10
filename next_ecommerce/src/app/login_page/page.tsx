import LoginContainer from '@/components/LoginContainer'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen flex flex-col xl:flex-row'>
      <div className='w-full hidden xl:flex xl:w-2/5 bg-gray-100'>
        <img className='w-full h-full' src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800" fill='100%' alt=''/>
      </div>
      <div className='w-full h-full flex items-center justify-center xl:w-3/5 bg-gradient-to-r from-yellow-50 to-pink-50'>
        <LoginContainer/>
      </div>
      
    </div>
  )
}

export default page