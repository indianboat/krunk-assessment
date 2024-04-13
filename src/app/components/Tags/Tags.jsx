"use client";

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Tags = () => {

  const tags = [
    "Clutch",
    "Fabric lining",
    "Baggit",
    "Multi Compartment"
  ];

  return (
    <div className="">
      <Swiper
        slidesPerView={"auto"}
        loop={true}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        className="mySwiper w-full text-center gap-2 flex justify-center"
      >
        {tags.map((tag, index) => {
          return (
            <SwiperSlide className="swiper-slide !w-fit" key={index}>
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-lg border border-blue-600 text-xs font-medium bg-blue-100 text-blue-800 cursor-pointer">
                {tag}
              </span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
}

export default Tags