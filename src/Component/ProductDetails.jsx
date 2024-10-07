import React, { useEffect, useState } from 'react'
import getProductDetails from '../API/productDetails'
import { useParams } from 'react-router-dom'
import { motion } from "framer-motion";
import { getProductCategory } from '../API/productApi';
import Item from './Item';
import Loading from './Loading';
import useMutationCart from '../Hooks/useMutationCart';
import { toast } from 'react-toastify';
import { addToCart } from '../API/getCartApi';

export default function ProductDetails() {

    let {mutate:MutateCart , data , status}= useMutationCart(addToCart)
    if(status== 'success')
            toast.success(data?.data?.message);


    let { id, categoryId } = useParams();
    let [imgSrc, setImageSrc]= useState('')
    let [product, setProduct] = useState([]);
    let [productCategory, setProductCategory] = useState([]);
    let [msg, setMsg] = useState('');
    let [loading, setLoading] = useState(false);

    async function getProductDetailsApi() {

        setLoading(true)
        let data = await getProductDetails(id)
        if (data?.data) {
            setLoading(false)
            setProduct(data?.data)
            setMsg('')
        } else {
            setLoading(false)
            setMsg(data)
        }
    }

    async function getProductCategoryApi() {

        setLoading(true)
        let data = await getProductCategory(categoryId)
        if (data?.data) {
            setLoading(false)
            setProductCategory(data?.data)
            setMsg('')
        } else {
            setLoading(false)
            setMsg(data)
        }
    }


    useEffect(() => {
        getProductCategoryApi()
    }, [])


    useEffect(() => {
        getProductDetailsApi()
    }, [id])



        function changeSrc(e){
            setImageSrc (e.target.src)
        }

        if (loading)
            return <Loading></Loading>
         
         if (msg)
             return <h2 className='text-red-700 font-bold my-3 p-3'>{msg}</h2>
    return (
    <>
            <div className='row items-center py-5'>
                <div className='sm:w-1/3'>
                    <img src={imgSrc ? imgSrc : product?.imageCover} className='w-full' alt="" />
                    <ul className='flex my-2 justify-center align-middle p-2'> 
                        {product?.images?.map(img=> <li key={img}> <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={changeSrc} src={img} className=' cursor-pointer w-[80px]' alt="" /></li>)}
                    </ul>
                </div>
                <div className='md:w-2/3 p-5'>
                <h2 className='text-bold '>{product?.category?.name}</h2>
                    <h2 className=' text-green-400 line-clamp-1 '>{product?.title}</h2>
                    <h2 className='font-thin'>{product?.description}</h2>
                    <div className='flex justify-between p-2'>
                        <p>{product?.price} EGP</p>
                        <p> <i className='fas fa-star text-yellow-600'></i> {product?.ratingsAverage}</p>
                    </div>
                    <button onClick={()=>{MutateCart(product?._id)}} className='btn text-center bg-green-800 text-white p-2 rounded'>Add To Cart</button>

                </div>
        </div>
            <h2 className='text-2xl text-green-800 text-bold my-3 ps-10'>Related Products</h2>
        <div className="row justify-center">
                {productCategory.map(prod=> <Item key={prod?._id} ele={prod}></Item>)}
        </div>
    </>
    )
}
