"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { socialNetworks } from './dataHeader'

export function Header() {
    return (
        <div className='absolute z-20 inline-block w-full -top-5 -md:top-10'>
            <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden">
                <div className="container justify-between mx-auto md:flex">
                    <Link href="/">
                        <img src='/assets/LOGO.png'
                            alt="Logo de la empresa"
                            style={{ width: '100px', height: '100px' }}
                            className="my-3 text-4xl text-center md:text-left mx-auto md:mx-0" />
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({ logo, src }) => (
                            <Link key={src} href={src} target="_blank" className="transition-all duration-300 hover:text-black text-gray-500">
                                {logo} 
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}