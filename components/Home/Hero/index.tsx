"use client"
import { motion } from 'framer-motion'
import React from 'react'
import Title from './Title'
import { useTranslations } from "next-intl";
import { Link } from '@/i18n.config';
const Hero = ({ title, title2, description }: any) => {
    const t = useTranslations('allServices')

    return (
        <div className="lg:w-[60%] h-[90dvh] flex flex-col items-center justify-center mx-auto text-justify">
            <motion.div
                animate={{ y: -40 }}
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
            <motion.div
                initial={{ opacity: 0, y: 1 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: .2 }}
                className='flex gap-2 py-4 justify-center flex-wrap'>
                <Link href="/services/plastic-injection-machines"><button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                    {t("PlasticInjectionMachines.title")}
                </button></Link>
                <Link href="/services/thermoforming-machine"><button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                    {t("ThermoformingMachine.title")}
                </button></Link>
                <Link href="/services/plastic-injection-template"><button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                    {t("PlasticInjectionTemplate.title")}
                </button></Link>
                <Link href="/services/robots"><button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                    {t("Robots.title")}
                </button></Link>
                <Link href="/services/accessories"><button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                    {t("Accessories.title")}
                </button></Link>
            </motion.div>

        </div >
    )
}

export default Hero