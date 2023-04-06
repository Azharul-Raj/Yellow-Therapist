import React from 'react'
import booksImg from '../../../assets/books.jpg'
import { category1, category2 } from '../../../data/data'

export default function Hero() {
  return (
    <>
      <div className='grid grid-cols-12 md:gap-5 lg:gap-16 px-[2%] md:px-[8%] place-items-center bg-gray-100  py-24'>
        {/* image part */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <img src={booksImg} alt="" />
        </div>
        {/* text part */}
        <div className="col-span-12 md:col-span-6 lg:col-span-8 mt-5 md:mt-0 lg:space-y-5">
          <h2 className='text-2xl lg:text-[55px] text-gray-700 font-bold text-center md:text-start '>Discover book <span className='text-blue-800'>categories</span> </h2>
          <h4 className='font-bold text-center text-lg md:text-start '>Take a look at categories and discover the book</h4>
          <p className='text-center md:text-start'>Gain is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances.</p>
        <div className="flex justify-between lg:justify-start">
          {/* left list */}
          <div className="">
            {
              category1.map((category,i)=><li className='list-none' key={i}>
                ✅
                {category.name}</li>)
            }
          </div>
          {/* right list */}
          <div className="lg:pl-20">
            {
              category2.map((category,i)=><li className='list-none' key={i}>
                ✅
                {category.name}</li>)
            }
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
