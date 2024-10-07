import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import Loading from './Loading'

export default function Brand() {

  function getBrands() {

    return axios.get('https://ecommerce.routemisr.com/api/v1/brands')
  }

  let { data, isError, isLoading, error, isFetching } = useQuery({
    queryKey: ['getbrands'],
    queryFn: getBrands,
    select: (data) => data?.data
  })

  if (isLoading)
    return <Loading></Loading>

  if (isError)
    return <h2 className='text-red-700 font-bold my-3 p-3'>{error.message}</h2>


  return (
    <div className='row'>
      {data?.data?.map(ele => <div key={ele?._id} className=" md:w-1/4">
        <div className="p-3">
          <img src={ele?.image} alt="" />
          <h2 className='text-center'>{ele?.name}</h2>
        </div>
      </div>)}
    </div>
  )
}
