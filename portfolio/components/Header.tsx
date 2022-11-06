import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between mx-auto max-w-7xl z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.4
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.youtube.com/sonnysangha"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/xenia-onescu"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.twitter.com/xenia-onescu"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.4
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <Link href="#contact">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
        </Link>

        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          <Link href="#contact">Get in Touch </Link>
        </p>
      </motion.div>
    </header>
  )
}

export default Header
