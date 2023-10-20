"use client";

import { AiOutlineBehance, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebook, BiChevronRight } from "react-icons/bi";
import { SlSocialLinkedin } from "react-icons/sl";
import Button from "../ui/Button";
import { motion } from "framer-motion";

export default function Contacts() {
  return (
    <section className="py-12 md:py-20">
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="container grid lg:grid-cols-2 gap-8 items-center"
      >
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            OUR
            <br /> CONTACTS
          </h2>
          <div className="space-y-2">
            <p>
              Telegram:{" "}
              <span className="opacity-60">@kult_Technologies2023</span>
            </p>
            <p>
              Email:{" "}
              <span className="opacity-60">
                clients@kult_Technologies2023.com
              </span>
            </p>
            <p>
              Skype: <span className="opacity-60"> live:1234659879</span>
            </p>
          </div>
          {/* <div className="space-y-2">
            <h4>GET SOCIAL</h4>
            <div className="flex items-center gap-4 text-2xl">
              <AiOutlineBehance />
              <AiOutlineInstagram />
              <BiLogoFacebook />
              <SlSocialLinkedin />
            </div>
          </div> */}
        </div>
        <form className="w-full h-[519px] services__cards p-12 flex flex-col items-start justify-between">
          <h2 className="text-4xl font-bold">Get a Quote</h2>
          <div className="w-full grid gap-2">
            <label htmlFor="name">Your Name</label>
            <input type="text" />
          </div>
          <div className="w-full grid gap-2">
            <label htmlFor="email">Your Email</label>
            <input type="email" />
          </div>
          <div className="w-full grid gap-2">
            <label htmlFor="msg">Your Message</label>
            <input type="text" />
          </div>
          <Button name="Send message" />
        </form>
      </motion.div>
    </section>
  );
}
