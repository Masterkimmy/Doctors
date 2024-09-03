import Paragraph from 'antd/es/skeleton/Paragraph'
import React from 'react'

const Package = () => {
    const standard = [
        {
          id: 1,
           header:"Standard", 
           session: "₤ 25 ",
           nun : "/ session",
             Paragraph:"Urea Creatinine TSH Blood Sugar (Fasting) Ultra Sonography (KUBP) Uroflowmetry",
             butt:"ORDER NOW"
        } ,
        {
          id: 2,
           header:"Premium", 
           session:"₤ 49 ",
           nun : "/ session",
             Paragraph:"Urea Creatinine TSH Blood Sugar (Fasting) Ultra Sonography (KUBP) Uroflowmetry",
             butt:"ORDER NOW"
        } ,
        {
          id:3,
           header:"Professional", 
           session:"₤ 149 ",
           nun : "/ session",
             Paragraph:"Urea Creatinine TSH Blood Sugar (Fasting) Ultra Sonography (KUBP) Uroflowmetry",
             butt:"ORDER NOW"
        } ,
    ]
  
  return (
    <div className='h-[80vh] flex flex-col gap-12'>
        <div className='flex flex-col items-center justify-center gap-3'>
            <h1 className='text-[#05464E] font-semibold text-[30px]'>Health Package</h1>
            <div className='bg-[#05464E] w-16 h-2'></div>
            <p className='text-[#767676]'>The easiest way to keep life on track.</p>
        </div>
         <div className='flex items-center justify-center gap-16 '>
            {
                standard.map((z)=>(
                   <div key={z.id} className='flex flex-col items-center justify-center bg-white border-2 h-[45vh] w-[25vw] gap-6 rounded-xl'>
                      <h1 className='text-[#05464E] font-bold text-[20px] pt-8'>{z.header}</h1>
                     <div className='flex gap-2 items-center'>
                     <p className='text-[#05464E] text-[40px] font-bold'>{z.session}</p>
                     <p className='text-[#7A7C83]'>{z.nun}</p>
                     </div>
                      <p className='text-[#7A7C83] w-[20vw] text-center'>{z.Paragraph}</p>
                     <div className=' '>
                     <button className='bg-[#05464E] text-white w-[25vw] h-[9vh] rounded-bl-lg rounded-br-lg'>{z.butt}</button>
                     </div>
                   </div>
                ))
                
            }
         </div>
    </div>
  )
}

export default Package