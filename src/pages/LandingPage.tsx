import Hero from '@/components/LandingPage/Hero'
import Logo from '@/components/Others/Logo'
import React from 'react'

const LandingPage: React.FC = () => {
  return (
    <div className="section-padding py-10 flex flex-col items-start sm:items-center relative">
        <Logo />
        <Hero />
    </div>
  )
}

export default LandingPage