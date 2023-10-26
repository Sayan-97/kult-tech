"use client"
import React from 'react'
import Avatar from '../../public/imgs/avatar.jpg'
import Avatar2 from '../../public/imgs/avatar1.jpg'
import Avatar3 from '../../public/imgs/avatar2.webp'
import Avatar4 from '../../public/imgs/avatar3.jpg'
import Avatar5 from '../../public/imgs/avatar4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Banner() {

    const reviews = [
        {
            image: Avatar5,
            name: 'Benjamin Collins',
            msg: 'This website is a game-changer for game developers like me. The AI tools and blockchain integration make game development a breeze. I have learned so much and even sold my first NFT. The community support is outstanding!'
        },
        {
            image: Avatar2,
            name: 'James Johnson',
            msg: 'I have been exploring blockchain and NFTs for a while now, and this website seemed promising. The resources are quite helpful, but I wish there were more in-depth tutorials on smart contracts. It is a good starting point for beginners, though.'
        },
        {
            image: Avatar3,
            name: 'Ethan Williams',
            msg: 'Excellent platform for AI enthusiasts. The courses and articles on AI implementation are well-structured. It has been a great learning experience. The community discussions add value, and I am looking forward to more advanced content.'
        },
        {
            image: Avatar4,
            name: 'Liam Davis',
            msg: 'I can nott get enough of this site! It iss not just about NFTs; it is a treasure trove of information on digital art, collectibles, and blockchain technology. I have found some amazing NFT artists here, and the marketplace is a hidden gem.'
        },
        {
            image: Avatar,
            name: 'Noah Harris',
            msg: 'As a beginner in the blockchain world, I thought this website would be my go-to resource. It has a lot of information, but it is overwhelming for someone like me. I wish there were more step-by-step guides and interactive tutorials.'
        },
    ]

    return (
        <section className='py-16'>
            <motion.div
                initial={{ y: 5, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }} 
                className='container'
            >
                <div className='relative w-full lg:h-[485px] rounded-2xl bg-cover overflow-hidden' style={{ backgroundImage: `url(${'/imgs/BGWave.png'})` }}>
                    <div className='absolute inset-0 bg-primaryGradient opacity-70'></div>
                    <div className='w-full h-full relative p-8 flex max-lg:flex-col lg:items-center gap-12'>
                        <div className='lg:w-8/12 space-y-8'>
                            <h3 className="text-2xl md:text-6xl font-bold">What Our Clients think about our work </h3>
                            <div className="flex w-full gap-3">
                                <div className="bg-white w-full h-1 rounded-full"></div>
                                <div className="bg-secondaryColor w-10  h-1 rounded-full"></div>
                                <div className="bg-white w-10 h-1 rounded-full"></div>
                            </div>
                            <p className="lg:text-xl">We specialize in crafting interactive AI solutions that redefine user experiences. From intelligent chatbots providing personalized customer interactions to immersive virtual assistants guiding users through dynamic journeys, our interactive AI applications bring technology to life.</p>
                        </div>
                        <div className='md:w-[60%] md:mx-auto lg:w-4/12'>
                            <Swiper
                                modules={[Pagination]}
                                spaceBetween={50}
                                slidesPerView={1}
                                pagination={{
                                    el: '.banner-pagination',
                                    clickable: true,
                                }}
                            >
                                {reviews.map((item, index) => (
                                    <SwiperSlide
                                        key={index}
                                    >
                                        <div className='flex flex-col items-center text-center gap-12'>
                                            <div className='flex flex-col items-center gap-2'>
                                                <Image
                                                    src={item.image}
                                                    alt='img'
                                                    className='w-16 h-16 rounded-full object-cover'
                                                />
                                                <p className='text-xl font-semibold'>{item.name}</p>
                                            </div>
                                            <p className='text-lg'>{item.msg}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <div className='banner-pagination'></div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}