import React from 'react'

export default function SectionTitle({subHeading,heading}) {
  
  return (
    <div className='mx-auto text-center my-2 py-3 w-4/12 border-y-2'>
      <p className='text-orange-300'>---{subHeading}---</p>
      <h3 className='text-3xl uppercase'>{heading}</h3>
    </div>
  )
}
