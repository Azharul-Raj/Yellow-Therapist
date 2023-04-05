import {Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";

import books from '../../../data/data'

export default function Slider() {
  return (
    <div className='pt-16 px-[5%]'>
      <Swiper className=''
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay:2
        }}
        modules={[Navigation]}
        navigation={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: any) => console.log(swiper)}
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
                  <button className={`${book.id == 1 && "bg-green-500"} ${book.id == 2 && "bg-blue-600"} ${book.id == 3 && "bg-pink-600"} py-1 px-3 mt-2 rounded-full text-white`}>Buy for {book.price}$</button>
                </div>
                {/* right side */}
                <div className="">
                  <img className='' src={book.image} alt="blue-book" />
                </div>
              </div>
            </SwiperSlide>
          ))
        }

        ...
      </Swiper>
    </div>
  )
}