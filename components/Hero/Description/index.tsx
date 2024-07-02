import { motion } from 'framer-motion'
import React from 'react'

const index = ({ text, del }: any) => {
    const newText = text.split("")
    return (
        <motion.p
            className='text-bold text-xl lg:text-2xl tracking-tighter'
            initial={{}}
            animate={{}}
            transition={{ duration: 0.5, delay: .2 }}>
            {newText.map((word: string, index: number) => (
                <motion.span
                    className=''
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{ duration: 0.1, delay: del * index }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.p>
    )
}

export default index