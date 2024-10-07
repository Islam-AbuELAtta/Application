import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import getCategories from '../API/Categories';
import Item from './Item';
import Slider from 'react-slick';


export default function Categories() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 4500,
    cssEase: "linear",
  };

  let [categoriesArr, setCategoriesArr] = useState([]);
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

  useEffect(() => {
    getCategoriesApi()
  }, [])


  if (loading)
    return <Loading></Loading>

  if (msg)
    return <h2 className='text-red-700 font-bold my-3 p-3'>{msg}</h2>
  return (
    <div className='py-5 hidden md:block' style={{overflow:'hidden'}}>
      <Slider {...settings}>
          {categoriesArr.map(ele => <img className='h-[120px]' style={{objectFit:'cover'}} key={ele?._id} src={ele?.image}/>)}
      </Slider>
    </div>
  )
}
