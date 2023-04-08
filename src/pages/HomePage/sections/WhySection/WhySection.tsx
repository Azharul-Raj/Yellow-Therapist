import React from 'react'

import { cardData } from '../../../../data/data'
export default function WhySection() {
  return (
    <div className='text-center py-12'>
        <h2 className='text-2xl md:text-4xl lg:text-[55px] text-gray-700 font-bold'>Importance of <span className='text-[#2fca2d]'>books</span> </h2>
        <h4 className='my-5 w-3/4 mx-auto'>Books play a quintessential role in every student's life by introducing them to a world of imagination, providing knowledge of the outside world, improving their reading, writing and speaking skills as well as boosting memory and intelligence.</h4>
        <div className="">
          <div className="grid grid-cols-12 gap-5 place-items-center">
            {
              cardData.map((card,i)=>(

              <div key={i} className="col-span-12 hover:bg-gradient-to-br rounded-lg from-[#ffbc00] to-red-400 lg:col-span-3  md:col-span-6 h-80 w-72 shadow-lg place-items-center">
              <div className="flex flex-col justify-center items-center space-y-5 pt-12">
                {card.icon}
                <h4 className='font-bold'>{card.title}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, libero!</p>
              </div>

            </div>           
              ))
}
          </div>
        </div>
    </div>
  )
}
