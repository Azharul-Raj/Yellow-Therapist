import React from 'react'
import Marquee from 'react-fast-marquee';
import casio from '../../../assets/sponsor/casio.png';
import ibm from '../../../assets/sponsor/ibm.bcec6b9a.png';
import microsoft from '../../../assets/sponsor/microsoft.4a9a93f0.png';
import mit from '../../../assets/sponsor/mit.1af911d7.png';
import nasa from '../../../assets/sponsor/nasa.3bf5af29.png';
import pennsylvania from '../../../assets/sponsor/pennsylvania.8c9f4108.png';
import princeton from '../../../assets/sponsor/princeton.5d0a5006.png';

export default function Sponsors() {
  return (
    <div className='py-12 text-center'>
        <h2 className='text-4xl md:text-5xl lg:text-[55px] pb-10 text-gray-700 font-bold'>Our Gold Sponsors</h2>
        <Marquee speed={100} direction='right'>
            
            <div className="w-48 px-10">
                <img src={casio} alt="" />
            </div>
            <div className="w-48 px-10">
                <img src={ibm} alt="" />
            </div>
            <div className="w-64 px-10">
                <img src={microsoft} alt="" />
            </div>
            <div className="w-64 px-10">
                <img src={mit} alt="" />
            </div>
            <div className="w-44 px-10">
                <img src={nasa} alt="" />
            </div>
            <div className="w-52 px-10">
                <img src={pennsylvania} alt="" />
            </div>
            <div className="w-52 px-10">
                <img src={princeton} alt="" />
            </div>
        </Marquee>
    </div>
  )
}
