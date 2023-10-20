import Image from 'next/image'
import Hero from './_components/Hero'
import Services from './_components/Services'
import About from './_components/About'
import Portfolio from '@/components/shared/Portfolio'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Portfolio />
    </>
  )
}
