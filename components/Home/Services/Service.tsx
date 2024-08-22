"use client"
import { Link } from "@/i18n.config";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Service({ title, desc, image, link }: any) {
    const [hover, isHover] = useState(false)
    return (
        <Link href={link}><motion.div
            animate={hover ? { width: "60vw", height: "400px", filter: "grayscale(0%)" } : { width: "30vw", height: "250px", filter: "grayscale(100%)" }}
            initial={{ width: "30vw", height: "250px" }}
            onMouseEnter={() => isHover(true)}
            onMouseLeave={() => isHover(false)}
            transition={{ duration: .3 }}
            className="flex flex-col p-4 justify-center items-center grayscale" >
            <motion.h2
                animate={hover ? { fontSize: "2rem", y: 0 } : { fontSize: "1rem", y: 10 }}
                initial={{ fontSize: "1rem", y: 10 }}
                transition={{ duration: 0.3 }}
            >{title}</motion.h2>
            <motion.h3
                animate={hover ? { opacity: 1, y: 0 } : { opacity: 0, y: -5 }}
                initial={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
            >{desc}</motion.h3>
            <Image src={image} width={1000} height={600} alt={title} className="w-[100%] overflow-hidden object-cover object-center rounded-xl"></Image>
        </motion.div></Link>
    );
}