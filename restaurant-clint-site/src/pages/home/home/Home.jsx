import React from 'react'
import Banner from '../Banner'
import Category from '../Category'
import PopularMenu from '../popularMenu/PopularMenu'
import Feature  from '../Feature/Feature'
import Testimonials from '../Testimonials/Testimonials'
export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className='my-10'><Category></Category></div>
      <PopularMenu></PopularMenu>
      <Feature></Feature>
      <Testimonials></Testimonials>
    </div>
  )
}
