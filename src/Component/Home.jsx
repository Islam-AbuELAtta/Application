import React from 'react'
import FeaturedProducts from './FeaturedProducts'
import Categories from './Categories'
import SlickSlider from './SlickSlider'


export default function Home() {



  return (
    <div>
      <SlickSlider></SlickSlider>
      <Categories></Categories>
      <FeaturedProducts></FeaturedProducts>
    </div>
  )
}
