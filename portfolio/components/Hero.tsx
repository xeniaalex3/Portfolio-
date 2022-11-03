import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["hi, my name is Xenia","girl-who-loves-Coffee.tsx", "<ButLovesToCodeMore />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img 
      className='relative rounded-full h-32 mx-auto object-cover'
      src="https://avatars.githubusercontent.com/u/78426693?v=4" alt="image" />

      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Web Developer</h2>
      <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
      <span className='mr-3'>{text}</span>
      <Cursor cursorColor='#f7ab0a' />
      </h1> 
      <div className='pt-5'>
        <Link href="#about">
        <button className='heroButton hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>About</button>
        </Link>
        <Link href="#experiences">
        <button className='heroButton hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Experience</button>
        </Link>
        <Link href="#skills">
        <button className='heroButton hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Skills</button>
        </Link>
       <Link href="#projects">
       <button className='heroButton hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Projects</button>
       </Link>
      
      </div>
      </div>
        
    </div>
  )
}