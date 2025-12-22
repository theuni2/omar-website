import Navbar from '@/component/nav'
import React from 'react'
import Footer from '@/component/footer'
import Comingsoon from '@/component/conference/comingsoon'

export default function Page() {
  return (
    <div>
        <Navbar/>
        <Comingsoon/>

        <Footer/>

    </div>
  )
}
