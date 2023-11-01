"use client"
import { AnimatePresence, motion } from "framer-motion"
import { transitionVariantPage } from '@/utils/motionTransitions'

export function Transition() {
    return (
        <>
            <AnimatePresence mode="wait">
                <div>
                    <motion.div
                        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#ffff]"
                        variants={transitionVariantPage}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
                    >
                    </motion.div>
                    <motion.div
                        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#ffff] opacity-50"
                        variants={transitionVariantPage}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
                    >
                    </motion.div>
                </div>
            </AnimatePresence>
        </>

    )
}