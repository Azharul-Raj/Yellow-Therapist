import React from 'react'
import { productProps } from '../../types/types'
import Review from '../Review';
interface productData{
    product:productProps
}

export default function Card({product}:productData) {
    // console.log(product);
    const {title,image,price,description,rating}=product;
    
  return (
    <div className='shadow-lg'>
        <a href="#" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
          <img src={image} loading="lazy" alt="Photo by Rachit Tank" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">for sale</span>
        </a>
        {/* card details part */}
            <div className="p-2">
        <div>
          <a href="#" className="hover:gray-800 mb-1 text-gray-900 transition duration-100 lg:text-lg">{title?.length>30?title?.slice(1,20)+"...":title}</a>
            <p className='text-sm py-1'>{description?description?.slice(0,60) +"...":"Description not found"}</p>
          <div className="flex justify-between gap-2">
            <span className="mb-0.5 text-gray-900 ">${price}</span>
            <span className="font-bold text-gray-800 lg:text-lg flex items-center">{rating?.rate} <Review count={rating?.rate}/></span>
          </div>
        </div>
        </div>
      </div>
  )
}
