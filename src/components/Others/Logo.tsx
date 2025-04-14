import React from 'react'
import whiteLogo from "@/assets/svgs/whiteLogo.png"
import blackLogo from "@/assets/svgs/darkLogo.png"

interface LogoProps {
    color?: "white" | "black"
    size?: number
}

const Logo: React.FC<LogoProps> = ({ color }) => {
  return (
    <div className='w-[120px] h-[63.821659088134766px] overflow-hidden'>
        { color === "white" ? (
            <img src={whiteLogo} alt="Logo" className='w-full h-full object-cover '  />
        ) : (
            <img src={blackLogo} alt="Logo" className='w-full h-full object-cover' />
        )}
    </div>
  )
}

export default Logo