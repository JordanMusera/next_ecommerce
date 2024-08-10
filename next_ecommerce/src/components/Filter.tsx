"use client"
import React from 'react'

const Filter = () => {
  return (
    <div className='my-3 flex w-full flex-wrap justify-between gap-5'>
        <select name='type' className='px-2 py-1 rounded-lg bg-gray-100 border-pink-200'>
            <option className='font-semibold'>Type</option>
            <option>Physical</option>
            <option>Digital</option>
        </select>

        <input type='text' placeholder='min price' className='w-28 px-2 bg-gray-100 rounded-lg'/>

        <input type='text' placeholder='max price' className='w-28 px-2 bg-gray-100 rounded-lg'/>

        <select name='type' className='px-2 py-1 rounded-lg bg-gray-100 border-pink-200'>
            <option className='font-semibold'>Size</option>
            <option>Physical</option>
            <option>Digital</option>
        </select>
        <select name='type' className='px-2 py-1 rounded-lg bg-gray-100 border-pink-200'>
            <option className='font-semibold'>Color</option>
            <option>Physical</option>
            <option>Digital</option>
        </select>
        <select name='type' className='px-2 py-1 rounded-lg bg-gray-100 border-pink-200'>
            <option className='font-semibold'>Category</option>
            <option>Physical</option>
            <option>Digital</option>
        </select>
        <select name='type' className='px-2 py-1 rounded-lg bg-gray-100 border-pink-200'>
            <option className='font-semibold'>All Filters</option>
            <option>Physical</option>
            <option>Digital</option>
        </select>
        <select name='type' className='px-2 py-1 rounded-lg bg-gray-100 border-pink-200'>
            <option className='font-semibold'>Sort by</option>
            <option>Physical</option>
            <option>Digital</option>
        </select>
    </div>
  )
}

export default Filter