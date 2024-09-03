"use client";
import React from "react";
import Image from "next/image";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { AutoPlayStrategy } from "react-alice-carousel";
const carosell = () => {
 

  const carosell = [
    {
      id: 1,
      image: "/chris.png",
      Paragraph:
        "it took a while to find me a doctors that make feel comfortable and welcome! Dr. as wellas staff are awesome, they listen and give the best advice ",
      para: " -john mark",
    },
    {
      id: 2,
      image: "/joseph.png",
      Paragraph:
        "i came to get a smile done for myself. Treatment was completey painless and took just 5days. My smile , has changed completely and so has my life  ",
      para: " -joseph mark",
    },
    {
      id: 3,
      image: "/user1.png",
      Paragraph:
        " Each time we have met, ha has provided examination and has shown genuine concern . I`ve had nothing but great encounter with him.",
      para: " -chris due",
    },
    {
      id: 4,
      image: "/imole.png",
      Paragraph: "i have had nothing but wonderful service  from them. i would hire them again ",
      para: " -Saazi",
    },
    
  ]

  const item =  carosell.map((n) => (
      <div key={n.id} className="border w-[100%] rounded-xl pl-5  h-[25vh] border-gray-300 gap-5">
        <div className="flex gap-2 items-start justify-center px-10  ">
          <Image className="h-[9vh] rounded-lg" src={n.image} width={150} height={200} />
          <div className="flex flex-col gap-2">
            <div className="w-[28vw] text-[#6e7275] ">{n.Paragraph}</div>
            <div className="text-[#6e7275]">{n.para}</div>
          </div>
        </div>
      </div>
    ))
 

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};
  return (
    <div>
      <div className="bg-[#DAF0FF] flex flex-col items-center justify-center gap-14 h-[70vh]">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-[#05464E] text-[30px] font-bold">
            Patient Reviews
          </h1>
          <div className="bg-[#05464E] w-16 h-2"></div>
          <p className="text-[black]"> Feedback is the breakfast of champions. </p>
        </div>
       
        <AliceCarousel
        mouseTracking
        items={item}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        infinite
        animationDuration={1000}
    />
      </div>
    </div>
  );
};

export default carosell;
