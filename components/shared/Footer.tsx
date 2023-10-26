import Image from "next/image";
import { AiOutlineDribbble, AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import MailIcon from '../../public/svgs/email-icon.svg'
import PhoneIcon from '../../public/svgs/phone-icon.svg'
import LocationIcon from '../../public/svgs/location-icon.svg'

export default function Footer() {

    const socials = [
        { img: <AiOutlineInstagram />, link: '/' },
        { img: <AiOutlineDribbble />, link: '/' },
        { img: <AiOutlineTwitter />, link: '/' },
        { img: <AiFillYoutube />, link: '/' },
    ]

    const quickLinks = [
        { label: 'Portfolio', links: '' },
        { label: 'Blogs', links: '' },
        { label: 'About', links: '' },
        { label: 'Press', links: '' },
        { label: 'Careers', links: '', highlight: 'We`re Hiring' },
    ]

    const services = [
        { label: 'UX/UI Design', links: '' },
        { label: 'App Development', links: '' },
        { label: 'Web Development', links: '' },
        { label: 'Quality Assurance', links: '' },
        { label: 'Machine Learning', links: '' },
    ]

    const reachUs = [
        { img: MailIcon, content: 'info@kult.games' },
        { img: PhoneIcon, content: '+971521129279' },
        { img: LocationIcon, content: 'Dubai, Trade Center' },
    ]

    return (
        <footer className="relative bg-cover pt-8" style={{ backgroundImage: `url(${'/imgs/BGWave.png'})` }}>
            <div className="absolute inset-0 bg-primaryGradient opacity-70"></div>
            <div className="relative container flex max-md:flex-col items-start justify-between gap-12 py-6">
                <div className="w-full md:1/2 lg:w-1/4 space-y-8">
                    <Image
                        src={`/svgs/kult-brand.svg`}
                        alt='img'
                        width={123}
                        height={37}
                    />
                    <p className="font-medium">At Kult Technologies, we believe in a systematic and collaborative approach to bring your ideas to fruition. Our working process is streamlined into three seamless phases, ensuring transparency, creativity, and innovation at every step of your project.</p>
                    {/* <div className="flex items-center gap-6">
                        {socials.map((item, index) => (
                            <div key={index} className="bg-white bg-opacity-30 p-2 rounded-full text-2xl">
                                {item.img}
                            </div>
                        ))}
                    </div> */}
                </div>
                {/* Quick Links */}
                {/* <div className="space-y-8">
                    <h4 className="text-[1.5rem] font-medium">Quick Links</h4>
                    <ul className="space-y-4">
                        {quickLinks.map((item, index) => (
                            <li key={index} className='text-medium'>{item.label} {item.highlight && (<span>{item.highlight}</span>)}</li>
                        ))}
                    </ul>
                </div> */}
                {/* Services */}
                {/* <div className="space-y-8">
                    <h4 className="text-[1.5rem] font-medium">Services</h4>
                    <ul className="space-y-4">
                        {services.map((item, index) => (
                            <li key={index} className='text-medium'>{item.label}</li>
                        ))}
                    </ul>
                </div> */}
                {/* Reach Us */}
                <div className="w-full md:1/2 lg:w-1/4 space-y-8">
                    <h4 className="text-[1.5rem] font-medium">Reach Us</h4>
                    <div className="space-y-6">
                        {reachUs.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <Image
                                    src={item.img}
                                    alt='img'
                                />
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr className="border-white border-opacity-[0.2]" />
            <div className="container py-6">
                <p className="text-[#D9DBE1]">© 2023 kult tecnologies. All rights reserved</p>
            </div>
        </footer>
    )
}
