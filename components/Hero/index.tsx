"use client"
import { motion, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { slideUp, opacity } from "./animation"
import Title from './Title'
import Description from './Description'
const Hero = ({ title, title2, description }: any) => {
    return (
        <div className="w-[60%] h-[90dvh] flex flex-col items-center justify-center mx-auto text-center">
            <motion.div
                animate={{ y: -60 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <Title text={title} del={0.03} />
                <Title text={title2} del={0.04} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <p>{description}</p>
            </motion.div>

        </div >
    )
}

export default Hero