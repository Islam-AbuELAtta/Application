import React, { useState } from 'react'
import Loading from './Loading';
import Slider from 'react-slick';
import mainImage from '../assets/mainSlider.jpeg'
import mainImage1 from '../assets/mainSlider-2.jpeg'
import mainImage2 from '../assets/mainSlider-3.jpeg'


export default function SlickSlider() {


    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "linear",
        arrows: false,
    };

    let [msg, setMsg] = useState('');
    let [loading, setLoading] = useState(false)



    if (loading)
        return <Loading></Loading>

    if (msg)
        return <h2 className='text-red-700 font-bold my-3 p-3'>{msg}</h2>
    return (
        <div className='flex mt-5'>
            <div className="w-2/3">
                <Slider {...settings}>
                        <img src={mainImage} className='w-full h-[400px]' alt="mainsliderImage" />
                        <img src={mainImage} className='w-full h-[400px]' alt="mainsliderImage" />
                        <img src={mainImage} className='w-full h-[400px]' alt="mainsliderImage" />
                </Slider>
            </div>
            <div className="w-1/3 flex flex-col">
                    <img src={mainImage1} className='w-full h-[200px]' alt="" />
                    <img src={mainImage2} className='w-full h-[200px]' alt="" />
            </div>
        </div>
    )
}
