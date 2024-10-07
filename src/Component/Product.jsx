import React, { useEffect, useState } from 'react'
import FeaturedProducts from './FeaturedProducts'
import Loading from './Loading';
import getCategories from '../API/Categories';
import { getProductCategory } from '../API/productApi';

export default function Product() {

  let [categoriesArr, setCategoriesArr] = useState([]);
  let [dataArr, setDataArr] = useState([]);
  let [msg, setMsg] = useState('');
  let [loading, setLoading] = useState(false)

  async function getCategoriesApi() {
    setLoading(true)
    let data = await getCategories()
    if (data?.data) {
      setLoading(false)
      setCategoriesArr(data?.data)
      setMsg('')
    } else {
      setLoading(false)
      setMsg(data)
    }

  }

   async  function getCategoryData(id){
       let data = await getProductCategory(id)
       if (data?.data) {
        setDataArr(data?.data)
        setMsg('')
      } else {
        setMsg(data)
      }  
      }

  useEffect(() => {
    getCategoriesApi()
  }, [])


  if (loading)
    return <Loading></Loading>

  if (msg)
    return <h2 className='text-red-700 font-bold my-3 p-3'>{msg}</h2>
  return (
    <div>
        <div className="flex">
          <ul className=' me-5 my-3 '>
            {categoriesArr.map(ele=> <li key={ele?._id} onClick={()=> getCategoryData(ele?._id)} className='cursor-pointer hover:underline'> {ele.name}</li>)}
          </ul>
        <FeaturedProducts dataArr={dataArr}></FeaturedProducts>
        </div>
    </div>
  )
}
