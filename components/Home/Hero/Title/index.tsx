import { motion } from 'framer-motion'
import React from 'react'

const index = ({ text, del }: any) => {
    const words = text.split(" ")
    const newText = text.split("")
    return (
        <>
            <motion.h1
                className=' text-bold text-3xl lg:text-6xl'
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: .2 }}>
                {newText.map((word: string, index: number) => (
                    <motion.span
                        className='hidden lg:inline'
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{ duration: 0.5, delay: del * index }}
                        key={index}
                    >
                        <span
                        >
                            {word}
                        </span>
                    </motion.span>
                ))}
            </motion.h1>
            <motion.h1
                className=' text-bold text-3xl lg:text-6xl'
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: .2 }}>
                {words.map((word: string, index: number) => (
                    <motion.span
                        className='px-1 lg:hidden inline'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: .8, delay: (del * index) + .9 }}
                        key={index}
                    >
                        <span
                        >
                            {word}
                        </span>
                    </motion.span>
                ))}
            </motion.h1>
        </>
    )
}

export default index