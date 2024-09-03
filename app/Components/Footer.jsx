import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { CiTwitter } from "react-icons/ci";
import { MdOutgoingMail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
const Footer = () => {
  return (
    <div className='bg-black h-[100vh] w-[100%] flex  item-center justify-center flex-col  gap-12'>
        <div className='flex justify-center gap-20'>
       <div className='flex flex-col gap-6 item-center justify-center'>
            <h1 className='text-white font-bold'>Healthcare</h1>
            <div className='flex flex-col gap-2'>
                <h1 className='text-[#52BFCD] '> About us</h1>
                <h3 className='w-[25vw] text-white'>We want to help bring talanted students and unique startups together.</h3>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-[#52BFCD]'>Contact Us</h1>
              <div className='flex gap-2 item-center '>
              <MdAddIcCall  className='text-[#716622]' />
              <h2   className='text-white'>hakeemkolawole62@gmail.com </h2>
              </div>
               <div className='flex gap-2 item-center'>
               <MdOutlineMessage  className='text-[#716622]'/>
               <h2 className='text-white'>08145636201</h2>
               </div>
            </div>
        </div>
       <div className= 'flex item-center justify-center flex-col gap-4 pb-[50px]'>
            <h1  className='text-[#52BFCD]'>Our department</h1>
            <div className='text-white flex flex-col gap-2'>
                <h3>Cardiology Department</h3>
                <h3>Urology Department</h3>
                <h3>Neurology Department</h3>
                <h3>Dental Department</h3>
                <h3>Padiatrics Department</h3>
            </div>
        </div>
        <div className='flex flex-col item-center justify-center gap-4 pb-[80px]'>
            <h1  className='text-[#52BFCD]'>Helpful links</h1>
            <div className='text-white flex flex-col gap-2'>
                <h3>Facilities</h3>
                <h3>Terms & Condition</h3>
                <h3>Privacy Policy</h3>
                <h3>Contact Us</h3>
            </div>
        </div>
        <div className='text-white flex  justify-center flex-col gap-4 pb-[20px]'>
            <h1 className='text-[#52BFCD]'>Address</h1>
            <p className=' flex w-[18vw]'>202 New Hampshire Avenue, Northwest #100, New York-2573</p>
            <div className='flex flex-col gap-4'>
                <p>Subscribe More Info</p>
               <div className='flex flex-col gap-4'>
                  <input type="text"  placeholder='Email' className='rounded-lg h-[5vh] p-2 outline-none '/>
                  <button className='bg-[#05464E] rounded-lg h-[5vh] w-24'>Subscribe</button>
               </div>
            </div>
        </div>
       </div>
       <div className='w-full h-[2px] bg-white'></div>
       <div className='flex gap-2 justify-around'>
        <div className='flex gap-2'>
        <div className='text-white bg-[#05464E]  flex w-[2vw] h-[4vh] justify-center py-1 item-center rounded-full'>
        <GrFacebookOption />
        </div>
        <div className='text-white bg-[#05464E]  flex w-[2vw] h-[4vh] justify-center py-1 item-center rounded-full'>
        <CiTwitter />
        </div>
        <div className='text-white bg-[#05464E]  flex w-[2vw] h-[4vh] justify-center py-1 item-center rounded-full'>
        <MdOutgoingMail />
        </div>
        <div className='text-white bg-[#05464E]  flex w-[2vw] h-[4vh] justify-center py-1 item-center rounded-full'>
        <IoLogoInstagram />
        </div>
        </div>
        <p className='text-white'>2024 @ Company private ltd.</p>
       </div>
    </div>
  )
}

export default Footer