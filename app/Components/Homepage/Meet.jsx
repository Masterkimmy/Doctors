import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

const Meet = () => {
  const doctors = [
    {
      id: 1,
      img: "/image...png",
      header: "Dr Mark Tescrothic",
      Paragraph:
        "Dr. Mark Tescrothic leads our Pregnancy department with unwavering commitment and expertise. With a passion for child health and well-being, our team prioritizes compassionate care and innovative solutions. We strive to create a nurturing environmet",
      icon1: <FaFacebookF />,
      icon: <FaTwitter />,
      icons2: <SiGmail />,
      icon3: <FaInstagram />,
    },
    {
      id: 2,
      img: "/image (1).png",
      header: "Dr. Olivier Lund",
      Paragraph:
        "Dr. Olivier Lund leads our X-Ray department with a commitment to compassionate care and excellence. With a focus on child health and development, our team prioritizes personalized treatment plans and family-centered support. We strive to foster a nur",
      icon1: <FaFacebookF />,
      icon: <FaTwitter />,
      icons2: <SiGmail />,
      icon3: <FaInstagram />,
    },
    {
      id: 3,
      img: "/image (2).png",
      header: "Dr. Mahajan",
      Paragraph:
        "Dr. Mahajan, a renowned cardiologist, leads our dedicated Cardiology department with expertise and compassion. With a commitment to excellence, our team prioritizes patient care, offering cutting-edge diagnostics .",
      icon1: <FaFacebookF />,
      icon: <FaTwitter />,
      icons2: <SiGmail />,
      icon3: <FaInstagram />,
    },
    {
      id: 4,
      img: "/male.png",
      header: "Dr. Julia Jhones",
      Paragraph:
        "Dr. Julia Jhones, a distinguished neurologist, leads our team dedicated to providing exceptional care in the field of neurology. With a commitment to patient well-being and cutting-edge research, our practice offers compassionate expertise in diagnos",
      icon1: <FaFacebookF />,
      icon: <FaTwitter />,
      icons2: <SiGmail />,
      icon3: <FaInstagram />,
    },
  ];
  return (
    <div className="h-[140vh] flex mt-14 gap-12 flex-col">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-[#05464E] font-bold text-[30px]">
            Meet Our Doctors
          </h1>
          <div className="bg-[#05464E] w-16 h-2"></div>
          <p className="text-[#767676]">
            Talent wins games, but teamwork and intelligence win championships.
          </p>
        </div>
      </div>
      <div className="flex w-[100%] justify-center gap-9">
        {doctors.map((n) => (
          <div
            key={n.id}
            className="flex w-[20%] flex-col items-center justify-center"
          >
            <div className="w-[100%] h-[200px] bg-red-400">
              <Image
                className="object-fit h-[50vh] w-full"
                src={n.img}
                width={500}
                height={500}
              />
            </div>
            <div className=" p-4  w-[100%] px-3 mt-32 bg-[#DAF0FF] flex flex-col gap-4 ">
              <h1 className="font-semibold text-[25px] ">{n.header}</h1>
              <p className=" text-[#7F8383]">{n.Paragraph}</p>
              <div className="flex gap-3">
                <p className="text-[20px]">{n.icon1}</p>
                <p className="text-[#00ACEE] text-[20px]">{n.icon}</p>
                <p className="text-[#DB4437] text-[20px]">{n.icons2}</p>
                <p className="text-[#DB4437] text-[20px]">{n.icon3}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meet;
