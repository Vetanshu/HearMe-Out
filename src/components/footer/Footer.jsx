import React from 'react'
import { IoLogoWhatsapp} from "react-icons/io";
import { FaLinkedin} from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";



const Footer = () => {
  return (
    <>
    <div className='p-5 bg-emerald-300' >
    <div className='flex justify-center gap-16 py-8 font-semibold text-xl'>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        <a href="#">Terms & Conditions</a>
    </div>
        <div className='flex gap-5 justify-center cursor-pointer mb-8'>
            <IoLogoWhatsapp className='size-7'/>
            <FaLinkedin className='size-7'/>
            <FaInstagramSquare className='size-7'/>
        </div>
    <div>
        <h1
        className='font-semibold font-serif text-center'
        >&copy; All rights reserved 2024</h1>
    </div>
    </div>
    </>    
)
}

export default Footer