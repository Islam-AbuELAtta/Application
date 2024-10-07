import axios from 'axios';
import { Formik, useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { auth } from '../ContextApi/AuthContext';
import { jwtDecode } from 'jwt-decode';
import Loading from './Loading';


export default function Forget() {

  let [loading, setLoading] = useState(false)
  let [msg, setMsg] = useState('')
  let navigate = useNavigate()
  let { setLogin, isLogin } = useContext(auth)

  async function handleForget(values) {
    try {
      setLoading(true)
      let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', values)
        console.log(data);
      setLoading(false)
      setMsg('')
      navigate('/resetcode')

    } catch (error) {
      setMsg(error?.response?.data?.message)
      setLoading(false)
    }

  }


  let validationSchema = Yup.object({
    email: Yup.string().email().required('email is required'),
  })

  let formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: handleForget
  })

  if (loading)
    return <Loading></Loading>
 
 if (msg)
     return <h2 className='text-red-700 font-bold my-3 p-3'>{msg}</h2>
  return (
    <div>
      <h2 className='p-5 my-2 text-green-900 text-2xl font-extrabold'>Forget PassWord:</h2>

      {msg ? <div className="p-4 w-1/2 text-center mx-auto mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <span className="font-medium">{msg}</span>
      </div> : ''}
      <form className="max-w-md mx-auto" onSubmit={formik.handleSubmit}>


        <div className="relative z-0 w-full mb-5 group">
          <input type="email" onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        {/* email alert */}
        {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{formik.errors.email}</span>
        </div> : ''}
       

        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{loading ? <i className='fas fa-spinner fa-spin fa-2xl text-white'></i> : "Submit"}</button>
      </form>





    </div>
  )
}  
