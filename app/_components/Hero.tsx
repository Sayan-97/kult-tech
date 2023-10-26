"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover flex items-center -z-20 overflow-hidden"
      style={{ backgroundImage: `url(${"/imgs/bg-stars.png"})` }}
    >
      <motion.div
        initial={{ y: 2, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <Image
          src={"/imgs/hero-bricks.png"}
          alt="img"
          fill
          className="object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ y: 2, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="relative container"
      >
        <div className="absolute inset-0 max-lg:-right-[50%] flex items-center justify-end -z-10">
          <Image
            src={"/imgs/HeroGlobe.png"}
            alt="img"
            width={656}
            height={656}
            priority={true}
          />
        </div>
        <div className="relative lg:w-1/2 space-y-8">
          <h1 className="text-5xl md:text-[4rem] leading-tight font-bold">
            Navigating the world of blockchain
          </h1>
          <p className="text-[1.125rem] lg:w-[80%]">
            In our digital world, trust, security, and efficiency are vital.
            Enter blockchaintechnology, the game-changer.
          </p>
          <Button name={`Get Started`} />
        </div>
      </motion.div>
    </section>
  );
}
