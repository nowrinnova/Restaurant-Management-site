import React from 'react'
import Banner from '../Banner'
import Category from '../Category'

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className='my-20'><Category></Category></div>
    </div>
  )
}
