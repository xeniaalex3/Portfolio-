import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import react from '../assets/images/react.png'
type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img 
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true
      }}
      className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      src="https://pbs.twimg.com/profile_images/745191739586154496/K81NHwiA_400x400.jpg" 
      alt="logo o'clock" />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>
          Front-end Developer
        </h4>

        <p className='font-bold text-2xl mt-1'> O'Clock</p>

        <div className='flex space-x-2 my-2'>
        <Image 
        src={react}
        alt="logo JS"
        className='h-10 w-10 rounded-full'
        />
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
        </div>

        <p className='uppercase py-5 text-gray-300'> Started work ... - ended... </p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
        </ul>

      </div>
    </article>
  )
}

export default ExperienceCard