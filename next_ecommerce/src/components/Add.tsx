"use client"
import React, { useState } from 'react'

const Add = () => {
  const [quantity,setQuantity] = useState(1);
  const stock = 4;

  const handleQuantity=(type:"d" | "i")=>{
    if(type==="d" && quantity>=1){
      setQuantity((prev)=>(prev-1))
    }else if(type==="i" && quantity<stock){
      setQuantity((prev)=>(prev+1))
    }
  }

  return (
    <div className='flex my-5 gap-8'>
      <div className='gap-5 bg-gray-100 rounded-2xl py-1 px-3 w-max flex'>
      <button className='text-lg font-semibold cursor-pointer' onClick={()=>handleQuantity("d")}>-</button>
      <h1 className='text-lg font-semibold'>{quantity}</h1>
      <button className='text-lg font-semibold cursor-pointer' onClick={()=>handleQuantity("i")}>+</button>
    </div>

    <div className='text-black bg-pink-200 rounded-xl px-3 py-1 font-semibold w-max'>
      Add to Cart
    </div>
    </div>
    
  )
}

export default Add