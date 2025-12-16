import React from 'react'
import Footer from '@/component/footer'
import Navbar from '@/component/nav'
import AboutHero from '@/component/about/hero'
import FounderSection from '@/component/about/info'
import WhyCompetitionSection from '@/component/about/why'

export default function Page() {
  return (
    <div>
      <Navbar/>
      <AboutHero/>
      <FounderSection/>
      <WhyCompetitionSection/>
      <Footer/>
    </div>
  )
}
