import React from 'react'
import Banner from '../Banner'
import Category from '../Category'
import PopularMenu from '../popularMenu/PopularMenu'
import Feature  from '../Feature/Feature'
import Testimonials from '../Testimonials/Testimonials'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className='my-10'><Category></Category></div>
       <SectionTitle
              subHeading="Check it out"
              heading="From our Menu"
            ></SectionTitle>
      <PopularMenu></PopularMenu>
      <Feature></Feature>
      <Testimonials></Testimonials>
    </div>
  )
}
