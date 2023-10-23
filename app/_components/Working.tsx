"use client";

import React from "react";
import Image from "next/image";
import SecHeader from "@/components/shared/SecHeader";
import { motion } from "framer-motion";

export default function Working() {
  const lists = [
    {
      img: "/imgs/Working1.png",
      title: "Ideation & Planning",
      des: "In this phase, we delve deep into your vision. We conduct in-depth discussions, gathering insights to understand your goals and objectives and provide effective guidance.",
    },
    {
      img: "/imgs/Working2.png",
      title: "Development & Iteration",
      des: "Once the blueprint is ready, our skilled developers and designers take charge. Utilizing the latest technologies and methodologies, we transform concepts into tangible digital experiences.",
    },
    {
      img: "/imgs/Working3.png",
      title: "Deployment & Optimization",
      des: "The culmination of our collaborative effort leads to the deployment phase. Here, your project goes live, reaching your audience and making an impact. ",
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
        className="container space-y-14"
      >
        <SecHeader
          title="Our Working Progress"
          des="We offer many types of account on the platform"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lists.map((list, index) => (
            <div
              key={index}
              className="w-full h-[419px] services__cards p-6 flex flex-col justify-between"
            >
              <div className="relative w-full h-[50%] flex items-center justify-center">
                <Image
                  src={list.img}
                  alt="img"
                  width={335}
                  height={203}
                  className="object-contain"
                />
              </div>
              <p className="text-xl font-semibold">{list.title}</p>
              <p className="font-extralight">{list.des}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
