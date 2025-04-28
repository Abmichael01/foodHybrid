import React from 'react'
import megaphone from "@/assets/images/megaphone.webp"
import { Button } from '@/components/ui/button'

const NewsLetter: React.FC = () => {
  return (
    <div className='section-padding mt-[80px] sm:mt-40 flex flex-col items-center'>
        <img src={megaphone} alt="" className='size-[204px]' />
        <div className='text-center flex flex-col items-center'>
            <h1 className='sm:text-[24px] lg:text-[32px] font-semibold'>Stay up to date</h1>
            <p className='sm:text-[18px] lg:text-[20px] text-[#15221B] w-[80%]'>Subscribe to our Newsletter to get updates on products and happenings with us.</p>
        </div>
        <div className='mt-[60px] flex justify-between h-fit w-fit sm:w-[500px] lg:w-[650px]'>
            <input type="text" placeholder='Enter your email address' className='border text-[16px] px-[20px] w-full outline-none bg-[#F5F5F5] rounded-l-sm'  />
            <Button className='rounded-none py-[18px]'>
                Subscribe
            </Button>
        </div>
    </div>
  )
}

export default NewsLetter