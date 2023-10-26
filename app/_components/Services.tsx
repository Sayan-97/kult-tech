"use client";

import SecHeader from "@/components/shared/SecHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation'
import "swiper/css/pagination";
import Image from "next/image";
import ServicesImg1 from "../../public/imgs/Services1.png";
import ServicesImg2 from "../../public/imgs/Services2.png";
import ServicesImg3 from "../../public/imgs/Services3.png";
import ServicesImg4 from "../../public/imgs/Services4.png";
import ServicesImg5 from "../../public/imgs/Services5.png";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      image: ServicesImg2,
      title: "Next-Gen Game Development",
      des: "Explore the future of gaming in our Next-Gen Game Development section. Discover emerging technologies, cutting-edge graphics, AI innovations, and more.",
    },
    {
      image: ServicesImg1,
      title: "Web 3 & Blockchain",
      des: "Explore the transformative potential of decentralised technologies. Dive into the world of blockchain, cryptocurrencies, NFTs, and decentralised applications.",
    },
    {
      image: ServicesImg3,
      title: "Ai Machine Learning",
      des: "Discover the power of data-driven decision-making, automation, and intelligent systems. Stay informed about the latest advancements, trends, and practical applications of AI.",
    },
    {
      image: ServicesImg4,
      title: "Branding & Designing",
      des: "We develop solutions both from technical specifications and from scratch, transforming your ideas into a stylish UX with power under the hood.",
    },
    {
      image: ServicesImg5,
      title: "Crypto Marketing & Market Making",
      des: "Dive into the dynamic world of digital currencies, ICOs, DeFi, and NFTs. Stay up-to-date with the latest marketing strategies, case studies, and expert insights in the blockchain industry. ",
    },
  ];

  return (
    <section className="py-16">
      <motion.div
        initial={{ y: 2, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
        className="container space-y-12"
      >
        <SecHeader
          title="Our Services"
          des="We offer many types of account on the platform"
        />
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          pagination={{
            el: ".my-custom-pagination",
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[419px] services__cards p-6 flex flex-col justify-between">
                <div className="relative w-full h-[50%] flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt="img"
                    className="object-contain"
                  />
                </div>
                <p className="text-xl font-semibold">{item.title}</p>
                <p className="font-extralight">{item.des}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="my-custom-pagination"></div>
        </Swiper>
      </motion.div>
    </section>
  );
}
