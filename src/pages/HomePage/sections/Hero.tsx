import React from 'react'

export default function Hero() {
  return (
    <div className='grid grid-cols-12 place-items-center'>
        <div className="col-span-6 h-[80%]">
          <img src="https://html.designingmedia.com/medtech/assets/image/banner-left-img.png" alt="" />
        </div>
        {/* right col */}
        <div className="col-span-6 space-y-5">
            <h5 className='font-bold text-xl'>Healthy. Everyday.</h5>
            <h2 className='font-[900] text-6xl leading-[70px]'>We are Providing Best and Affordable Healthcare</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <button className="px-6 font-semibold py-4 bg-yellow-400 duration-1000 rounded-full shadow-lg hover:-translate-y-2 hover:bg-sky-800 hover:text-white hover:transition-all hover:duration-1000">Book Now</button>
        </div>
    </div>
  )
}
