import React, { useState } from 'react'
import "./Nav.css"
import logo from '../assets/logo.png';
export default function Header() {
    const [open,setOpen]=useState(false);
    const items=[
        {
            name:"Home"
        },
        {
            name:"About"
        },
        {
            name:"Contact"
        },
        {
            name:"Details"
        },
    ]
  return (
    <div className='bg-yellow-200/80 fixed w-full lg:flex lg:justify-between px-[2%]'>
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
        <div className={`${open?"translate-x-1/2":"translate-x-full lg:translate-x-[70%]"} lg:flex fixed h-[100vh] lg:h-5 lg:mt-2 w-full bg-yellow-200 transition-all duration-500 ease-in`}>
            <ul className='lg:flex lg:space-x-4 cursor-pointer'>
                {
                    items.map((item,i)=><li key={i}>{item.name}</li>)
                }
            </ul>
        </div>
    </div>
  )
}
