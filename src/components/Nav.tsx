import React,{useContext, useState} from "react";

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Nav() {
    const [open,setIsOpen]=useState(false);
  return (
    <div className="flex bg-yellow-100 flex-col lg:flex-row lg:justify-between items-center lg:pt-2">
        {/* logo part */}
        <div className="">
            <img src={logo} alt="" />
        </div>
        {/*  */}
        <div className="flex flex-col lg:flex-row lg:space-x-5">
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
        </div>
        {<div className=""></div>}
        {/* btn */}
        <div className="">
            <button className="px-4 font-semibold py-2 bg-yellow-400 duration-1000 rounded-full shadow-lg hover:-translate-y-2 hover:bg-sky-800 hover:text-white hover:transition-all hover:duration-1000">Book An Appointment</button>
        </div>
    </div>
  )
}
