"use client"
import axios from 'axios';
import { NextResponse } from 'next/server';
import React, { useState } from 'react'

const LoginContainer = () => {
  const [userEmail,setUserEmail] = useState('')
  const [userPassword,setUserPassword] = useState('')

const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  
  const response = await fetch('/server/api/users',
  {
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({name:userEmail,password:userPassword}),
  }
  );

  console.log(response);
  await NextResponse.json({response})
}

  return (
    <div className='w-full'>
        <form className='w-full flex items-center justify-center' onSubmit={handleSubmit}>
          <div className='bg-gray-100 rounded-md p-5 w-3/4 xl:w-1/2 flex flex-col gap-3'>
            <h2>Email</h2>
            <input placeholder='Enter Email' value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} className='rounded-xl border border-gray-100 h-10 px-3'/>
            <h2>Password</h2>
            <input placeholder='Enter Password' type='password' value={userPassword} onChange={(e)=>setUserPassword(e.target.value)} className='rounded-xl border border-gray-100 h-10 px-3'/>
            <p className='text-blue-500 hover:cursor-pointer'>Forgot password?</p>
            <button className='bg-green-500 h-10 rounded-xl'>Login</button>
            <p>Already have an account?<span className='text-blue-500 px-1 hover:cursor-pointer'>Sign In</span></p>
          </div>
            
        </form>
    </div>
  )
}

export default LoginContainer