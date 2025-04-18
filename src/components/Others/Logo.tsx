import React from 'react'
import whiteLogo from "@/assets/svgs/whiteLogo.png"
import blackLogo from "@/assets/svgs/darkLogo.svg"
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
    color?: "white" | "black"
    size?: number
}

const Logo: React.FC<LogoProps> = ({ color, className }) => {
  return (
    <Link to="/">
        { color === "white" ? (
            <img src={whiteLogo} alt="Logo" className={cn(
              'w-[120px] h-[60.8px]',
              className
            )}  />
        ) : (
            <img src={blackLogo} alt="Logo" className={cn(
              'w-[120px] h-[60.8px]',
              className
            )} />
        )}
    </Link>
  )
}

export default Logo