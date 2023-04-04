import React,{useContext, useState} from "react";

import { Link } from "react-router-dom";
import "./Nav.css"
import logo from "../assets/logo.png";
export default function Nav() {
    const [open,setIsOpen]=useState(false);
    console.log(open);
    
  return (
        <div className="fixed bg-yellow-100 w-full lg:pt-2 px-5 left-0">
    <div className="flex lg:flex-row justify-between items-center">
        {/* logo part */}
        <div className="h-20 w-10 block lg:w-36">
            <img src={logo} alt="" />
        </div>
        {/*  */}

        <div className={`flex-col ${open?"flex-start":"hidden lg:flex lg:flex-row lg:space-x-5 lg:relative"}  items-center `}>
            <li className="list-none font-semibold">
            <Link to={"/"}>Home</Link>
            </li>
            <li className="list-none font-semibold">
            <Link to="/">About</Link>
            </li>
            <li className="list-none font-semibold">
            <Link to="/">Services</Link>
            </li>
            <li className="list-none font-semibold">
                <Link to="/">Contact</Link>
            </li>
        <li className="lg:hidden block">
            <button className="px-4 font-semibold py-2 bg-yellow-400 duration-1000 rounded-full shadow-lg hover:-translate-y-2 hover:bg-sky-800 hover:text-white hover:transition-all hover:duration-1000">Book An Appointment</button>
        </li>
        </div>
        {/* btn */}
        <div className="hidden lg:block">
            <button className="px-4 font-semibold py-2 bg-yellow-400 duration-1000 rounded-full shadow-lg hover:-translate-y-2 hover:bg-sky-800 hover:text-white hover:transition-all hover:duration-1000">Book An Appointment</button>
        </div>
        {/* three dots */}        
        <div onClick={()=>setIsOpen(!open)} className="block lg:hidden">
            <div  className={`${open?"element active-nav":"element nav"}`}></div>
        </div>
        </div>
    </div>
  )
}
