import React from 'react'
import Navbar from '@/component/nav'
import Footer from '@/component/footer'
import PitchHero from '@/component/competition/hero'
import WhatIsPitchCompetition from '@/component/competition/whatispitch'
import ProgramPhases from '@/component/competition/phase';



export default function Page() {
  return (
    <div>

        <Navbar/>
        <PitchHero/>
        <WhatIsPitchCompetition/>
        <ProgramPhases/>
        <Footer/>

    </div>
  )
}
