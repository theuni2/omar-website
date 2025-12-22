import React from 'react'
import Footer from '@/component/footer'
import Navbar from '@/component/nav'
import PitchCompetition from '@/component/competition/hero'
import ProgramPhases from '@/component/competition/phase'
import WhatIsPitchCompetition from '@/component/competition/whatispitch'

export default function Page() {
  return (
    <div>
        <Navbar/>
        <PitchCompetition/>
        <WhatIsPitchCompetition/>
        <ProgramPhases/>
        <Footer/>
    </div>
  )
}
