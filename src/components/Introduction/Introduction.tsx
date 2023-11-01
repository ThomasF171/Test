import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Introduction() {
    return (
        <div className=" w-full z-10 mt-20">
            <div className="w-full h-full">
                <div className="container grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
                    <motion.div className="hidden w-auto h-auto mx-auto md:block"
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <Image src="/assets/introduction.png" priority width="325" height="125" alt="Avatar" />
                    </motion.div>

                    <motion.div variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <h1 className="mb-5 text-4xl leading-tight md:mb-10 text-black">Si puedes pensarlo,  <br />
                            <span className="text-black">podemos diseñarlo</span></h1>
                        <p className="max-w-sm  mb-10 text-xl md:max-w-6xl md:mx-0 md:mb-16 md:text-2xl text-black">
                            Desde renderizados e ilustraciones <br />
                            <span> hasta desarrollo e interfaces webs.</span>
                        </p>

                        <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row">
                            <a href="/projects" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-black text-black">
                                Ver proyectos
                            </a>
                            <a href="/contact" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer border-black rounded-xl hover:shadow-xl hover:shadow-black bg-black">
                                Contacta conmigo
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}