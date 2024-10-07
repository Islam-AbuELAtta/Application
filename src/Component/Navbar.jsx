import React, { useContext, useState } from 'react'
import logo from '../assets/img.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../ContextApi/AuthContext'
import useQueryCart from '../Hooks/useQueryCart'
import { getUserCart } from '../API/getCartApi'

export default function Navbar() {

  let { data, isError, error } = useQueryCart('userCart', getUserCart)
  let navigate = useNavigate()
  let [open, setOpen] = useState(false)
  let { setLogin, isLogin } = useContext(auth)

  function toggle() {
    setOpen(!open)
  }
  function logOut() {
    localStorage.removeItem('userToken');
    setLogin(null);
    navigate('/login');
  }
  return (
    <nav className='bg-main-light py-4'>
      <div className="container md:flex justify-between items-center relative">
        <div className=" md:flex items-center  gap-2 " >
          <img src={logo} className='h-12' alt="" />
          {isLogin ? <ul className={`md:flex ${open ? 'block' : 'hidden'} gap-2`}>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/product'}>Product</NavLink></li>
            <li><NavLink to={'/brand'}>Brand</NavLink></li>

          </ul> : ''}
        </div>
        <div>
          <ul className={`md:flex ${open ? 'block' : 'hidden'} gap-2`}>

            {isLogin ? <>
              <li onClick={logOut} className='cursor-pointer font-bold'> LogOut </li>
              <li>{isLogin ? <b className=' text-green-800'>Hi {isLogin.name.toUpperCase()}</b> : ''}</li>
              <li className='mt-5 md:mt-0'><NavLink to={'/cart'}> <i className='mx-2 fa fa-cart-shopping relative '> <span className='w-[20px] h-[20px] p-3 text-white absolute rounded-full font-light bg-green-800 bottom-[100%] flex justify-center items-center left-2 '> {data?.numOfCartItems} </span> </i> </NavLink></li>
            </>
              :
              <>  
                <li> <NavLink to={'/login'}>Login</NavLink></li>
                <li> <NavLink to={'/register'}>Register</NavLink></li>
                <li className='flex mt-2 md:mt-0 gap-2'>
                  <a href=""> <i className='fab fa-facebook-f text-blue-900'></i></a>
                  <a href=""> <i className='fab fa-twitter text-blue-400'></i></a>
                  <a href=""> <i className='fab fa-google text-yellow-500'></i></a>
                  <a href=""> <i className='fab fa-instagram text-pink-500'></i></a>

                </li>
              </>
            }

          </ul>
        </div>

        <i onClick={toggle} className={`fas ${open ? 'fa-close' : 'fa-bars'} fa-2x absolute top-3 right-3 cursor-pointer md:hidden`}></i>
      </div>
    </nav>
  )
}
