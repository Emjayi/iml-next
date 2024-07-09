'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

const Index = (...props: any) => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end center']
    })
    const radius = useTransform(scrollYProgress, [0, 1], [30, 0])
    const scaleX = useTransform(scrollYProgress, [0, 1], ["30dvw", "100dvw"])
    const scaleY = useTransform(scrollYProgress, [0, 1], ["20dvh", "110dvh"])
    const y = useTransform(scrollYProgress, [0, 1], [-630, 500])
    return (
        <div ref={ref} className='h-[200dvh] flex justify-center items-center overflow-hidden'>
            <motion.div
                style={{ backgroundImage: `url("/2.jpg")`, borderRadius: radius, width: scaleX, height: scaleY, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: .1 }}
                className=' overflow-hidden flex justify-center items-center  text-white bg-cover'>
            </motion.div>
        </div >
    )
}

export default Index