import React from 'react'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import featureImg from '../../../assets/home/featured.jpg'
export default function Feature() {
  return (
    <div className= "shadow-lg shadow-black bg-[url('https://i.ibb.co.com/frc1rHn/featured.jpg')] max-w-4xl mx-auto h-[400px] object-contain my-10 bg-fixed">
    <SectionTitle subHeading='Check it out' heading='From our menu'></SectionTitle>
    <div className='flex justify-around gap-4 items-center p-16  text-white bg-slate-500 bg-opacity-50'>
      <img src={featureImg} className='w-2/6 ' alt="" />
      <div><p className='text-2xl'>March 20, 2023 </p>
      <h3 className='text-xl'> WHERE CAN I GET SOME?</h3>
      <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
      <button className='btn btn-outline border-0  border-b-4 text-white'>order here</button>
      </div>
    </div>
    </div>
  )
}
