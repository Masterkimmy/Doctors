import React from 'react'
import { IoIosPeople } from "react-icons/io";
import { SiPicardsurgeles } from "react-icons/si";
import { GiNurseMale } from "react-icons/gi";
import { TbWorldUp } from "react-icons/tb";




const People = () => {
  return (
    <div>
        <div className='bg-[#22242A] flex justify-around h-[35vh] items-center '>
            <div className='flex flex-col gap-4 text-white  items-center'>
               <IoIosPeople className='text-[30px]' />
                <h1 className='font-bold text-[40px]'>10200</h1>
                <p  className='text-[20px]'>Happy people</p>
            </div>
            <div className='flex flex-col gap-4 text-white items-center'>
                 <SiPicardsurgeles  className='text-[30px]' />
                <h1 className='font-bold text-[40px]'>700</h1>
                <p className='text-[20px]'>SURGERY COMPLETED</p>
            </div>
            <div className='flex flex-col gap-4 text-white items-center'>
                <GiNurseMale  className='text-[30px]' />
                <h1 className='font-bold text-[40px]'>189</h1>
                <p className='text-[20px]'>Expert doctors</p>
            </div>
            <div className='flex flex-col gap-4 text-white items-center'>
                <TbWorldUp className='text-[30px]'  />
                <h1 className='font-bold text-[40px]'>11</h1>
                <p className='text-[20px]'>World wide branch</p>
            </div>
        </div>
    </div>
  )
}

export default People