"use client";
import React from "react";
import Image from "next/image";
import SecHeader from "./SecHeader";
import Img1 from "../../public/imgs/Portfolio1.jpg";
import Img2 from "../../public/imgs/Portfolio2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

export default function Portfolio() {
  const slides = [
    {
      img: Img1,
      title: "Generative AI",
      des: "We provide comprehensive mobile game solutions for iOS and Android platforms. Being a top game development agency, we assure well-designed, ",
    },
    {
      img: Img2,
      title: "Interactive AI",
      des: "We provide comprehensive mobile game solutions for iOS and Android platforms. Being a top game development agency, we assure well-designed, ",
    },
    {
      img: Img1,
      title: "Generative AI",
      des: "We provide comprehensive mobile game solutions for iOS and Android platforms. Being a top game development agency, we assure well-designed, ",
    },
    {
      img: Img2,
      title: "Interactive AI",
      des: "We provide comprehensive mobile game solutions for iOS and Android platforms. Being a top game development agency, we assure well-designed, ",
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="container space-y-16"
      >
        <SecHeader
          title="Our Portfolio"
          des="We offer many types of account on the platform"
        />
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{
            el: ".my-custom-pagination",
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={item.img}
                  alt="img"
                  className="w-full h-[452px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-[0.4]">
                  <div className="absolute md:left-14 bottom-0 max-md:p-4 md:bottom-14 md:w-[70%] space-y-4">
                    <h3 className="text-2xl md:text-4xl font-bold">
                      {item.title}
                    </h3>
                    <div className="flex w-full gap-3">
                      <div className="bg-white w-full h-1 rounded-full"></div>
                      <div className="bg-secondaryColor w-10  h-1 rounded-full"></div>
                      <div className="bg-white w-10 h-1 rounded-full"></div>
                    </div>
                    <p className="lg:text-xl">{item.des}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="my-custom-pagination"></div>
        </Swiper>
      </motion.div>
    </section>
  );
}
