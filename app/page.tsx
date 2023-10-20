import Image from 'next/image'
import Hero from './_components/Hero'
import Services from './_components/Services'
import About from './_components/About'
import Portfolio from '@/components/shared/Portfolio'
import Banner from './_components/Banner'
import Working from './_components/Working'
import Contacts from '@/components/shared/Contacts'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Banner />
      <Working />
      <Contacts />
    </>
  )
}
