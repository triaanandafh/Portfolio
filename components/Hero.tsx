import React from 'react'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/TextGenerate'
import MagicButton from './ui/MagicButton'
import { IoMdDownload } from "react-icons/io";

const Hero = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv-tria.pdf"; 
    link.download = "cv-tria.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    // 1. CONTAINER UTAMA: relative, h-screen, center content
    <div className="relative h-screen w-full flex justify-center items-center overflow-hidden bg-slate-950">
      
      {/* 2. BACKGROUND LAYER: Grid Pattern */}
      <div className="absolute inset-0 h-full w-full">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
         </div>
      </div>

      {/* 3. CONTENT LAYER: Posisi di atas background (z-10) */}
      <div className="relative z-10 px-5 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        
        <TextGenerateEffect 
            words="Welcome to my portfolio" 
            className='text-left text-[40px] md:text-5xl lg:text-6xl' 
        />

        <p className='text-white text-left md:tracking-wider mb-4 text-sm md:text-lg'>Hi, I&apos;m Tria, a Front-End Developer based in Indonesia.</p>

       <MagicButton 
            title="Download CV" 
            icon={<IoMdDownload />} 
            position='right' 
            handleClick={handleDownload} 
        />
      </div>
      
    </div> 
  )
}

export default Hero