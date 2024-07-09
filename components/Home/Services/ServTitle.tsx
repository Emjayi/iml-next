'use client'
import { motion } from 'framer-motion'
import React from 'react'

const index = ({ text, del }: any) => {
    const newText = text.split("")
    return (
        <motion.h2
            className=' text-bold text-xl lg:text-3xl'
            initial={{ y: -10 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, delay: .2 }}>
            {newText.map((word: string, index: number) => (
                <motion.span
                    className=''
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: del * index }}
                    key={index}
                >
                    <span
                    >
                        {word}
                    </span>
                </motion.span>
            ))}
        </motion.h2>
    )
}

export default index