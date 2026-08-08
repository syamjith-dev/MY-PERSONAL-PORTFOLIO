import React from 'react';
import { HiHome } from "react-icons/hi";

const NavBar = () => {
  return (
    <div className='fixed bottom-5 left-0 w-full flex justify-center z-50'>
      <div className="flex shadow-lg bg-[#000000] w-[95%] h-14 justify-around items-center text-white rounded-full
      md:w-[60%]
      lg:w-[40%]">
        <ul className=" w-[99%] h-12 flex justify-between items-center rounded-full ">
          <a href="#home"><HiHome size={38}
            className="pl-2.5 cursor-pointer  transition-all  duration-300 hover:text-[#E27500]
            hover:scale-110 hover:-translate-y-1
            "
          /></a>
          <a href='#about' className="group overflow-hidden h-6 cursor-pointer">
            <div className="transition-transform duration-300 group-hover:-translate-y-6">
              <p>About</p>
              <p className="text-[#E27500]">About</p>
            </div>
          </a>
          <a href='#services' className="group overflow-hidden h-6 cursor-pointer">
            <div className="transition-transform duration-300 group-hover:-translate-y-6">
              <p>Services</p>
              <p className="text-[#E27500]">Services</p>
            </div>
          </a>
          <a href='#skill' className="group overflow-hidden h-6 cursor-pointer">
            <div className="transition-transform duration-300 group-hover:-translate-y-6">
              <p>Skill</p>
              <p className="text-[#E27500]">Skill</p>
            </div>
          </a>
          <a href='#portfolio' className="group overflow-hidden h-6 cursor-pointer">
            <div className="transition-transform duration-300 group-hover:-translate-y-6">
              <p>Portfolio</p>
              <p className="text-[#E27500]">Portfolio</p>
            </div>
          </a>
          <a href='#contact'
            className="
            bg-[#E27500] px-5 py-3 rounded-full cursor-pointer transition-all duration-500 hover:bg-white
            hover:text-black  hover:scale-101 
            sm:px-10 sm:py-3 "
          >
            Contact
          </a>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
