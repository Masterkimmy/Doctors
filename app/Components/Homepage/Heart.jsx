import React from 'react'
import Image from 'next/image'

const Heart = () => {
    const images = [
        {
            img: "/service.png",
            header: "Laboratory services",
            content: "There are only 2 dental specialties that only focus on dental esthetics.",
        },
        {
            img: "/heart.png",
            header: "Heart Disease",
            content: "There are only 2 dental specialties that only focus on dental esthetics.",
        },
        {
            img: "/dental.png",
            header: "Dental Care",
            content: "There are only 2 dental specialties that only focus on dental esthetics.",
        },
        {
            img: "/body.png",
            header: "Body Surgery",
            content: "There are only 2 dental specialties that only focus on dental esthetics.",
        },
        {
            img: "/surgery.png",
            header: "Neurology Surgery",
            content: "There are only 2 dental specialties that only focus on dental esthetics.",
        },
        {
            img: "/gynaecology.png",
            header: "Gynaecology",
            content: "There are only 2 dental specialties that only focus on dental esthetics.",
        },
    ]
  return (
    <div className='h-[100vh] flex justify-center items-center '>
        <div className='bg-[url("/cup.png")] bg-cover bg-center h-[80vh] w-[25vw] flex flex-col items-center justify-center gap-5 '>
           <h1 className='text-white font-semibold text-[25px] w-[20vw] pl-12'>Personal care & healthy living</h1>
           <p className='text-white w-[20vw] text-center'>We provide best leading medicle service Nulla perferendis veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque.  </p>
           <button className='text-white bg-[#05464E] w-[18vw] h-[7vh] rounded-xl'>EXPLPORE ALL FACILITY</button>
        </div>
         <div className=' grid grid-cols-3 gap-4 pl-6  rounded-xl items-center '>
            {
                images.map((n,index)=>(
                    <div key={index} className='flex bg-[#E6F0F5] flex-col h-[38vh]  w-[18vw] gap-4  items-start justify-center pl-5 rounded-lg'>
                        <Image src={n.img} width={70} height={200}/>
            <p className='text-[#05464E] font-medium w-[20vw]'>{n.header}</p>
            <p className='w-[17vw] text-[#818382]'>{n.content}</p>
                    </div>
                ))
            }
         </div>
    </div>
  )
}

export default Heart