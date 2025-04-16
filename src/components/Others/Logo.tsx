import React from 'react'
import whiteLogo from "@/assets/svgs/whiteLogo.png"
import blackLogo from "@/assets/svgs/darkLogo.png"
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
    color?: "white" | "black"
    size?: number
}

const Logo: React.FC<LogoProps> = ({ color, className }) => {
  return (
    <Link to="/" className={cn(
      'w-[120px] h-[60.8px] overflow-hidden object-center',
      className
    )}>
        { color === "white" ? (
            <img src={whiteLogo} alt="Logo" className='w-full h-full object-cover '  />
        ) : (
            <img src={blackLogo} alt="Logo" className='w-full h-full object-cover' />
        )}
    </Link>
  )
}

export default Logo