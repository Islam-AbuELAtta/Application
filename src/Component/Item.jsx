
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { addToCart } from '../API/getCartApi'
import useMutationCart from '../Hooks/useMutationCart'
import {toast } from 'react-toastify';

export default function Item({ ele }) {
    let [flag,setFag]= useState(false)
       

    let {mutate:MutateCart , data , status}= useMutationCart(addToCart)
            if(status== 'success')
                    toast.success(data?.data?.message);
                    
    // let {mutate, status}= useMutation({mutationFn:addToCart })
    //     if(status== 'success')
    //             { console.log('added');
    //             }
    return (

        <div className='md:w-1/6 sm:w-1/2 '>
            <div className="product cursor-pointer p-2 text-center">
            <i onClick={()=>{setFag(!flag)}} className= {`fa-solid  text-green-900 ${flag?'fa-heart':'fa-heart-broken'}`} ></i>
                <Link to={`/productdetails/${ele?._id}/${ele?.category?._id}`}>
                    <img className='w-full' src={ele?.imageCover} alt={ele?.title} />
                    <h2 className='text-center text-bold '>{ele?.category?.name}</h2>
                    <h2 className='text-center text-green-400 line-clamp-1 '>{ele?.title}</h2>
                    <div className='flex justify-between p-2'>
                        <p>{ele?.price} EGP</p>
                        <p> <i className='fas fa-star text-yellow-600'></i> {ele?.ratingsAverage}</p>
                    </div>
                </Link>
                <button onClick={()=>{MutateCart(ele?._id)}} className='btn text-center bg-green-800 text-white p-2 rounded'>Add To Cart</button>
            </div>
        </div>
    )
}
