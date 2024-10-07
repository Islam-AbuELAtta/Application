import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home'
import Categories from './Component/Categories'
import Brand from './Component/Brand'
import Login from './Component/Login'
import Register from './Component/Register'
import NotFound from './Component/NotFound'
import Cart from './Component/Cart'
import Layout from './Component/Layout'
import Product from './Component/Product'
import Navbar from './Component/Navbar'
import ProtectedRoute from './Component/ProtectedRoute'
import Forget from './Component/Forget.jsx'
import ResetCode from './Component/ResetCode.jsx'
import NewPassword from './Component/NewPassword.jsx'
import ProductDetails from './Component/ProductDetails.jsx'

export default function App() {

  let routes=  createBrowserRouter([{
      path: '/', element: <Layout></Layout>, children:[
        {index: true, element : <ProtectedRoute><Home></Home></ProtectedRoute> },
        {path:'/login', element : <Login></Login>},
        {path:'/register', element : <Register></Register>},
        {path:'/forget', element : <Forget></Forget>},
        {path:'/resetcode', element : <ResetCode></ResetCode>},
        {path:'/newpassword', element : <NewPassword></NewPassword>},
        {path:'/categories', element : <ProtectedRoute><Categories></Categories></ProtectedRoute> },
        {path:'/brand', element : <ProtectedRoute><Brand></Brand></ProtectedRoute> },
        {path:'/cart', element : <ProtectedRoute><Cart></Cart></ProtectedRoute>},
        {path:'/product', element : <ProtectedRoute><Product></Product></ProtectedRoute>},
        {path:'/productdetails/:id/:categoryId', element : <ProtectedRoute><ProductDetails></ProductDetails></ProtectedRoute>},
        {path:'/navbar', element : <ProtectedRoute><Navbar></Navbar></ProtectedRoute>},
        {path:'*', element : <NotFound></NotFound>},

      ]
    }])


  return (
    <RouterProvider router={routes}>

    </RouterProvider>
  )
}
