import { motion } from 'framer-motion'
import React from 'react'

const index = ({ text, del }: any) => {
    const newText = text.split("")
    return (
        <motion.h1
            className=' text-bold text-3xl lg:text-6xl tracking-tight'
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: .2 }}>
            {newText.map((word: string, index: number) => (
                <motion.span
                    className=''
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 0.5, delay: del * index }}
                >
                    <span
                    >
                        {word}
                    </span>
                </motion.span>
            ))}
        </motion.h1>
    )
}

export default index