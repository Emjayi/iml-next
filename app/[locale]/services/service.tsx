'use client'
import { motion } from "framer-motion";
import { Link } from '@/i18n.config';
import { useState } from "react";
import Image from "next/image";

const Serv = ({ title, image, desc, link }: any) => {
    const [hover, setHover] = useState(false);
    return (
        <Link href={link}>
            <motion.div
                animate={hover ? { filter: "grayscale(0%)" } : { filter: "grayscale(100%)" }}
                initial={{ width: "30vw", height: "250px" }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                transition={{ duration: .3 }}
                className="flex flex-col border-1 grayscale rounded-xl overflow-hidden border-zinc-300 justify-center items-center" >
                <Image src={image} width={1000} height={600} alt={title} className="w-[100%] overflow-hidden object-cover object-center"></Image>
                <motion.h2
                    // animate={hover ? { fontSize: "2rem", y: 0 } : { fontSize: "1rem", y: 10 }}
                    initial={{ fontSize: "1rem", y: 10 }}
                    transition={{ duration: 0.3 }}
                >{title}</motion.h2>
                <motion.h3
                    // animate={hover ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
                    initial={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                >{desc}</motion.h3>
            </motion.div></Link>
    )
}

export default Serv