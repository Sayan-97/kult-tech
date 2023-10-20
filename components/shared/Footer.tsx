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
        { img: MailIcon, content: 'hello@kult_tecnologies.co' },
        { img: PhoneIcon, content: '+91 98765 43210' },
        { img: LocationIcon, content: '772 Lyonwood Ave Walnut, CA 91789' },
    ]

    return (
        <footer className="relative bg-cover pt-8" style={{ backgroundImage: `url(${'/imgs/BGWave.png'})` }}>
            <div className="absolute inset-0 bg-primaryGradient opacity-70"></div>
            <div className="relative container grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-6">
                <div className="space-y-8">
                    <Image
                        src={`/svgs/kult-brand.svg`}
                        alt='img'
                        width={123}
                        height={37}
                    />
                    <p className="font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis facere est dolorum, sed et necessitatibus omnis rerum delectus, saepe corrupti laborum mollitia tempore perspiciatis! Qui ipsa exercitationem eius rem rerum.</p>
                    <div className="flex items-center gap-6">
                        {socials.map((item, index) => (
                            <div key={index} className="bg-white bg-opacity-30 p-2 rounded-full text-2xl">
                                {item.img}
                            </div>
                        ))}
                    </div>
                </div>
                {/* Quick Links */}
                <div className="space-y-8">
                    <h4 className="text-[1.5rem] font-medium">Quick Links</h4>
                    <ul className="space-y-4">
                        {quickLinks.map((item, index) => (
                            <li key={index} className='text-medium'>{item.label} {item.highlight && (<span>{item.highlight}</span>)}</li>
                        ))}
                    </ul>
                </div>
                {/* Services */}
                <div className="space-y-8">
                    <h4 className="text-[1.5rem] font-medium">Services</h4>
                    <ul className="space-y-4">
                        {services.map((item, index) => (
                            <li key={index} className='text-medium'>{item.label}</li>
                        ))}
                    </ul>
                </div>
                {/* Reach Us */}
                <div className="space-y-8">
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
