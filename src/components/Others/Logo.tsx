import React from 'react'
import whiteLogo from "@/assets/svgs/whiteLogo.png"
import blackLogo from "@/assets/svgs/darkLogo.png"

interface LogoProps {
    color?: "white" | "black"
    size?: number
}

const Logo: React.FC<LogoProps> = ({ color }) => {
  return (
    <div className='w-30 overflow-hidden'>
        { color === "white" ? (
            <img src={whiteLogo} alt="Logo" className='w-full h-8 object-cover '  />
        ) : (
            <img src={blackLogo} alt="Logo" className='w-full h-8 object-cover' />
        )}
    </div>
  )
}

export default Logo