import React from 'react'

import footer from '../assets/freshcart-logo.svg'
export default function Footer() {
  return (
    <div className=" bg-main-light  ">
      <div className='flex py-4 container border-b-2 border-gray-950'>
        <div className="w-2/3 flex flex-col justify-between">
          <img src={footer} className='w-[100px]' alt="" />
        </div>
        <div className="w-1/3 flex justify-between px-4 font-bold font-1xl">
          <div className="div">
            <ul className='flex flex-col'>
              <li className='my-2'><a href="">Resources</a></li>
              <li className='my-2'><a href="">google</a></li>
              <li className='my-2'><a href="">Snap</a></li>
            </ul>
          </div>
          <div className="div">
            <ul className='flex flex-col'>
              <li className='my-2'><a href="">Follow Us</a></li>
              <li className='my-2'><a href="">Githup</a></li>
              <li className='my-2'><a href="">Discord</a></li>
            </ul>
          </div>
          <div className="div">
            <ul className='flex flex-col'>
              <li className='my-2'><a href="">Legal</a></li>
              <li className='my-2'><a href="">Prvcy Policy</a></li>
              <li className='my-2'><a href="">Terms-Conditions</a></li>
            </ul>
          </div>
        </div>
      </div >
      <div className="container py-4 flex justify-between">
        <p className='text-green-800'>© fresh cart all right reserved</p>
        <div className="social-icons">

          <i className="text-blue-900 fa-brands me-4 fa-facebook-f" />
          <i className="fa-brands me-4 fa-twitter text-blue-400" />
          <i className="fa-brands me-4 fa-google text-orange-400" />
          <i className="fa-brands me-10 fa-instagram text-pink-700" />

        </div>
      </div>
    </div>
  )
}
