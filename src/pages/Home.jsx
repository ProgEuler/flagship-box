import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import PhonesContainer from '../components/PhonesContainer'

export default function Home() {
  return (
    <div>
        <NavBar />
        <Hero />
        <PhonesContainer />
        <Footer />
    </div>
  )
}
