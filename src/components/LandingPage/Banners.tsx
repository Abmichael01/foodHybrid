import React from 'react'
import riceBanner from "@/assets/images/riceBanner.webp"
import beansBanner from "@/assets/images/beansBanner.webp"

const Banners: React.FC = () => {
  return (
    <div className='section-padding mt-20 grid grid-cols-1 sm:grid-cols-2 gap-[30px]'>
        <img src={riceBanner} alt="rice-banner" className='rounded-[20px]' />
        <img src={beansBanner} alt="beans-banner" className='rounded-[20px]' />
    </div>
  )
}

export default Banners