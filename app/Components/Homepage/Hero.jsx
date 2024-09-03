import React from 'react'
import Image from "next/image"
import { TbCalendarMonth } from "react-icons/tb";





const hero = () => {
  return (
    <div className='h-[100vh]'>
        <div className='bg-[url("/image.png")] bg-cover bg-center h-screen flex justify-around items-center'>
          <div className='flex flex-col bg-white gap-7 p-4 items-center justify-center bg-white-500 shadow-lg shadow-black'>
            <h1 className='font-medium'>Appointment Now!</h1>
              <div className='flex flex-col gap-4 w-[30vw]'>
                  <select name="" id=""className='bg-[#F2F2F2] h-[6.5vh] pl-2 rounded-lg outline-none'>
                  <option value="">-Select Department</option>
                  <option value="">Cardiology</option>
                  <option value="">Urology</option>
                  <option value="">Neurology</option>
                  <option value="">Dental</option>
                  <option value="">padiatrics</option>
                  <option value="">pulmonary</option>
                  <option value="">Trumatology</option>
                  <option value=""> X-ray</option>
                  <option value=""> For disable</option>
                  <option value="">Prosthes</option>
                  <option value="">Nuclear Magnetic </option>
                </select>
                <select name="" id="" className=' bg-[#F2F2F2] h-[6.5vh] pl-2  rounded-lg outline-none'>
                  <option value=""> Dr. Master Kimmy</option>
                  <option value=""> Dr. Ajayi Happiness</option>
                </select>
                <select name="" id="" className='bg-[#F2F2F2] h-[6.5vh] pl-2 rounded-lg outline-none'>
                  <option value="">Nephrology</option>
                  <option value="">Surgical Oncology</option>
                  <option value="">Rehumatology</option>
                  <option value="">Ophthalmology</option>
                  <option value="">Infectious Disease</option>
                  <option value="">Gentic Testing</option>
                </select>
              </div>
              <div className=' flex gap-4 '>
                  <input type="text" placeholder=' your name' className='bg-[#F2F2F2] h-[6.5vh] pl-2 rounded-lg outline-none w-[14.5vw]' />
                 <input type="number" placeholder=' phone number' className='bg-[#F2F2F2] h-[6.5vh] pl-2 rounded-lg outline-none w-[14.5vw]'/>
              </div>
              <div className='flex gap-4'>
              <input type="text" placeholder='mm/dd/yy' className='bg-[#F2F2F2] h-[6.5vh] pl-2 rounded-lg outline-none w-[14.5vw]' />
              <input type="text"  placeholder='Time' className='bg-[#F2F2F2] h-[6.5vh] pl-2 rounded-lg outline-none w-[14.5vw]' />
              </div>
              <textarea name="" id="" placeholder='Message'  className='resize-none bg-[#F2F2F2] h-[15vh] pl-2 rounded-lg outline-none w-[30vw]'></textarea>
             <div className='flex items-center justify-center h-[6vh]  bg-[#05464E] rounded-xl w-[30vw]'>
             <h1 className=' text-white'>BOOK APPOINTMENT</h1>
             </div>
          </div>
           <img src="/Doctors.png" alt=""  className='h-[50vh]'/>
        </div>
    </div>
  )
}

export default hero