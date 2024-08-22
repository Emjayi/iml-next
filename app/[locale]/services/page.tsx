import React, { useState } from 'react'
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from 'next-intl/server';
import Serv from './service';

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


export default Page