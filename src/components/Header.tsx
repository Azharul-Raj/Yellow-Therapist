import React, { useState } from 'react'
import "./Nav.css"
import logo from '../assets/book.png';
import { Link } from 'react-router-dom';
export default function Header() {
    const [open,setOpen]=useState(false);
    const items=[
        {
            name:"Home",
            link:"/"
        },
        {
            name:"About",
            link:"/about"
        },
        {
            name:"Contact",
            link:"/contact"
        },
        {
            name:"Booking",
            link:"/booking"
        },
    ]
  return (
    <div className='bg-white shadow-sm z-[100] fixed w-full lg:flex lg:justify-between px-[2%]'>
        <div className="">
            <div className="flex justify-between">
            {/* logo */}
                <img className='h-12 w-28' src={logo} alt="logo" />
                <div onClick={()=>setOpen(!open)} className="mt-5 cursor-pointer lg:hidden">
                    <div className={` ${open?"active-nav":"nav"}`}>

                    </div>
                </div>
            </div>
        </div>
        {/* sidebar */}
        <div className={`${open?"translate-x-1/2":"translate-x-full lg:translate-x-[70%]"} lg:flex fixed h-[100vh] lg:h-5 lg:mt-2 w-full bg-white/70 backdrop-blur-sm transition-all duration-500 ease-in`}>
            <ul className='lg:flex lg:space-x-4 bg-white/70  cursor-pointer'>
                {
                    items.map((item,i)=> <li className='pl-4 cursor-pointer p-2 lg:p-0 lg:pl-0' key={i}><Link to={item.link} key={i}>{item.name}</Link></li>)
                }
            </ul>
        </div>
    </div>
  )
}
