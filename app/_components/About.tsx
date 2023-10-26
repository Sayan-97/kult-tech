"use client";

import Image from "next/image";
import Button from "../../components/ui/Button";
import AboutImage from "../../public/imgs/AboutGlobe.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ y: 5, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      viewport={{ once: true }}
      className="py-16 bg-contain bg-center"
      style={{ backgroundImage: `url(${"/imgs/about-back-bricks.png"})` }}
    >
      <div className="container grid lg:grid-cols-2 items-center max-lg:gap-8 ">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-[4rem] leading-tight font-bold">
            About Kult Technologies
          </h1>
          <p className="text-[1.125rem] lg:w-[70%]">
            We have harnessed the power of Generative AI to create mesmerizing, unique content that pushes the boundaries of creativity. From generating intricate artworks to crafting immersive storytelling experiences, our expertise in Generative AI has redefined what is possible.
          </p>
          <Button name={`Learn More`} />
        </div>
        <Image
          src={AboutImage}
          alt="img"
          width={500}
          height={500}
          className="justify-self-end"
        />
      </div>
    </motion.section>
  );
}
