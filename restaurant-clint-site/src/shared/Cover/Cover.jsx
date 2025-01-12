import React from 'react'

export default function Cover({img,subTitle,title}) {
  return (
    <div
    className="hero h-[350px]"
    style={{
      backgroundImage: `url(${img})`,
    }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md bg-black bg-opacity-40 py-10 px-20">
        <h1 className="mb-5 text-5xl font-bold uppercase font-cinzel">{title}</h1>
        <p className="mb-5 font-cinzel text-xs">
         {subTitle}
        </p>
        {/* <button className="btn btn-primary">Get Started</button> */}
      </div>
    </div>
  </div>
  )
}
