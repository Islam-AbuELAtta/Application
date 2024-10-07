import React from 'react'
import useQueryCart from '../Hooks/useQueryCart'
import { clearCartApi, deleteCartItem, getUserCart, updateCartItem } from '../API/getCartApi'
import Loading from './Loading'
import useMutationCart from '../Hooks/useMutationCart'
import empty from '../assets/empty.png'
import BasicModal from './BasicModal'



export default function Cart() {

  let { data, isError, error } = useQueryCart('userCart', getUserCart)



  let { mutate: delMutate, status, isLoading } = useMutationCart(deleteCartItem)
  let { mutate: clearMutate } = useMutationCart(clearCartApi)
  let { mutate: upMutate, status: upStatus } = useMutationCart(updateCartItem)

  if (isLoading)
    return <Loading></Loading>
  if (isError)
    return <h2 className='text-center text-red-800 my-4 p-3'>{error?.message}</h2>

  return (
    <div className='my-3'>

      {data?.numOfCartItems ? <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3 flex items-center justify-center">
                Action <i className='ms-1 fas fa-trash text-red-700'></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.products.map(ele => <tr key={ele?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4">
                <img src={ele?.product?.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {ele?.product?.title}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <button onClick={() => {
                    ele?.count == 1 ? delMutate(ele?.product?._id) : ele?.upMutate({ id: ele?.product?._id, count: ele?.count ? count - 1 : ele?.count })
                  }} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span className="sr-only">Quantity button</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                    </svg>
                  </button>
                  {ele?.count}
                  <button onClick={() => { upMutate({ id: ele?.product?._id, count: ele?.count + 1 }) }} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span className="sr-only">Quantity button</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                    </svg>
                  </button>
                </div>
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {ele?.price} EGP
              </td>
              <td className="px-6 py-4">
                <button onClick={() => { delMutate(ele?.product?._id) }} className="bg-gray-100 hover:bg-gray-200 font-medium text-red-600 dark:text-red-500 p-3 rounded-full">Remove</button>
              </td>
            </tr>)}

          </tbody>
          <tfoot>
            <tr>
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">

              </th>
              <th scope="col" className="px-6 py-3 font-semibold">
                {data?.numOfCartItems} <span className='font-light'>products</span>
              </th>
              <th scope="col" className="px-6 py-3">
                {data?.data?.totalCartPrice} EGP
              </th>
              <th scope="col" className="px-6 py-3">
                <button onClick={clearMutate} className=' hover:bg-green-300 hover:text-black bg-green-600 p-3 rounded-full text-white'>Clear Cart</button>
              </th>
            </tr>
          </tfoot>
        </table>
        <BasicModal cartId={data?.data?._id}></BasicModal>
          
      </div> :
        <div className='flex-col flex justify-center items-center p-5'>
          <div className=''>

            Your Cart Is Empty

          </div>
          <img src={empty} alt="" />
        </div>
      }



    </div>
  )
}
