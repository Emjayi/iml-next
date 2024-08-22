import React from 'react'
import ServTitle from './ServTitle';
import { useTranslations } from "next-intl";
import { Link } from '@/i18n.config';
import Service from './Service';
import { unstable_setRequestLocale } from 'next-intl/server';


export default function ServicesHome({ params: { locale } }: any) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('allServices');
    const services = [
        {
            "title": t("PlasticInjectionMachines.title"),
            "description": t("PlasticInjectionMachines.desc"),
            "link": "/services/plastic-injection-machines",
            "image": "/services/1.jpg"
        },
        {
            "title": t("ThermoformingMachine.title"),
            "description": t("ThermoformingMachine.desc"),
            "link": "/services/thermoforming-machine",
            "image": "/services/2.jpg"
        },
        {
            "title": t("PlasticInjectionTemplate.title"),
            "description": t("PlasticInjectionTemplate.desc"),
            "link": "/services/plastic-injection-template",
            "image": "/services/3.jpg"
        },
        {
            "title": t("Robots.title"),
            "description": t("Robots.desc"),
            "link": "/services/robots",
            "image": "/services/4.jpg"
        },
        {
            "title": t("Accessories.title"),
            "description": t("Accessories.desc"),
            "link": "/services/accessories",
            "image": "/services/5.jpg"
        },
    ]
    const title = "Services"
    return (
        <div className="mt-24 flex flex-col justify-start items-center" >
            {/* <ServTitle text={title} del={0.01} /> */}
            <div className='w-full flex flex-col gap-4 justify-center items-center pb-20'>
                {services.map((s, index) => (
                    <Service key={index} title={s.title} image={s.image} desc={s.description} link={s.link} />
                ))}
            </div>
        </div >
    );
}