import React from 'react'
import Image from 'next/image'

const Nav = () => {
  return (
    <nav className='w-full '>
        <div className='bg-[#05464E] text-white flex justify-center gap-[56vw] h-10 py-2 font-bold  w-full'>
         <h1 className='pl-5'>Monday - Friday ,8am to 10pm</h1>
         <h1> Call us Now : 08145636201</h1>
        </div>
        <div className='flex item-center gap-[29vw] h-[14vh] bg-white  justify-center'>
             <div className='flex  item-center py-2 '>
             <img src="logo.png.png" alt=""  className='h-[10vh]'/>
             <h1 className='font-bold text-[20px] py-5 '>Healthcare</h1>
             </div>
            <ul className='flex text-[black] gap-[15px] font-light py-8  cursor-pointer'>
                <li>Home</li>
                <li>Doctors</li>
                <li>Departments</li>
                <li>Facilities</li>
                <li>Gallery</li>
                <li>Health Package</li>
                <li>Login / Register</li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav