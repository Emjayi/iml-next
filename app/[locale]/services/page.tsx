'use client'
import React, { useState } from 'react'
import { useTranslations } from "next-intl";
import { Link } from '@/i18n.config';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { unstable_setRequestLocale } from 'next-intl/server';

const Page = ({ params: { locale } }: any) => {
    unstable_setRequestLocale(locale);
    const t = useTranslations('Services');
    const t1 = useTranslations('allServices');
    const services = [
        {
            "title": t1("PlasticInjectionMachines.title"),
            "description": t1("PlasticInjectionMachines.desc"),
            "link": "/services/plastic-injection-machines",
            "image": "/services/1.jpg"
        },
        {
            "title": t1("ThermoformingMachine.title"),
            "description": t1("ThermoformingMachine.desc"),
            "link": "/services/thermoforming-machine",
            "image": "/services/2.jpg"
        },
        {
            "title": t1("PlasticInjectionTemplate.title"),
            "description": t1("PlasticInjectionTemplate.desc"),
            "link": "/services/plastic-injection-template",
            "image": "/services/3.jpg"
        },
        {
            "title": t1("Robots.title"),
            "description": t1("Robots.desc"),
            "link": "/services/robots",
            "image": "/services/4.jpg"
        },
        {
            "title": t1("Accessories.title"),
            "description": t1("Accessories.desc"),
            "link": "/services/accessories",
            "image": "/services/5.jpg"
        },
    ]
    return (
        <div className='h-[120dvh] flex flex-col justify-start items-center mt-8'>
            <h1 className='text-4xl pb-12'>{t('title')}</h1>
            <div className='grid grid-cols-2 gap-2 pb-24'>
                {services.map((s) => (
                    <Serv key={s.title} title={s.title} image={s.image} desc={s.description} link={s.link} />
                ))}
            </div>

        </div>
    )
}

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

export default Page