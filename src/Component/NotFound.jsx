import React from 'react'
import error from '../assets/error.png'

export default function NotFound() {
  return (
    <div className='text-center w-100 p-5'>
        <h2 className='font-bold text-green-600'>NotFound</h2>
        <img src={error} className='w-100 m-auto' alt="" />
    </div>
  )
}
