import {Navigation,Pagination,Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import chevronL from '../../../assets/chevron-left.svg'
import chevronR from '../../../assets/chevron-right.svg'

import books from '../../../data/data'

export default function Slider() {
  
  return (
    <div className='pt-16 px-[5%]'>
      <Swiper className=''
      style={{
        //@ts-ignore
          "--swiper-pagination-color": `green`
      }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay:2000,
          disableOnInteraction:false
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl:".next-btn",
          prevEl:".prev-btn"
        }}
        
        modules={[Pagination, Navigation,Autoplay]}
      >
        {
          books.map(book => (
            <SwiperSlide key={book.id}>
              <div className="flex justify-around items-center">
                {/* left side */}
                <div className="space-y-2">
                  <h2 className={`${book.id == 1 && "text-green-500"} ${book.id == 2 && "text-blue-600"} ${book.id == 3 && "text-pink-600"} text-xl md:text-5xl font-bold`}>{book.title}</h2>
                  <h3 className='md:text-4xl text-gray-700'>{book.subtitle}</h3>
                  <p className='text-xs md:text-sm'>{book.desc}</p>
                  <button className={`${book.id == 1 && "bg-green-500"} ${book.id == 2 && "bg-blue-600"} ${book.id == 3 && "bg-pink-600"} py-1 px-3 md:py-2 md:px-4 mt-2 rounded-full text-white`}>Buy for {book.price}$</button>
                </div>
                {/* right side */}
                <div className="">
                  <img className='' src={book.image} alt="blue-book" />
                </div>
              </div>
            </SwiperSlide>
          ))
        }
        <div className="next-btn absolute left-0 top-1/2 md:top-[81%] lg:top-3/4 p-2 md:p-4 bg-green-500 rounded-full cursor-pointer z-10">
          <img src={chevronL} alt="" />
          </div>        
        <div className="prev-btn absolute right-0 p-2 md:p-4 bg-green-500 rounded-full top-1/2 md:top-[81%] lg:top-3/4 cursor-pointer z-10">
          <img  src={chevronR} alt="" />
          </div>        
      </Swiper>
    </div>
  )
}