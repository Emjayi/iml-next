'use client'
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Page() {
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
    const router = useRouter();
    const serviceName = usePathname();
    const service: any = services.find(service => (service.link === serviceName) || (`/en-us${service.link}` === serviceName));
    const serviceIndex = services.indexOf(service)

    const getNextService = (index: number, services: any) => {
        if (index < (services.length - 1)) {
            return services[index + 1]
        }
        return services[0]
    }
    const nextService: any = getNextService(serviceIndex, services)

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const [hookedYPostion, setHookedYPosition] = useState("0%");
    useMotionValueEvent(y, "change", (latest) => {
        setHookedYPosition(latest);
    })
    if (hookedYPostion > "99%") {
        setTimeout(() => {
            router.push(nextService.link);
        }, 1000);
    }

    return (
        <motion.div
            ref={ref}
        >
            <motion.div
                initial={{ opacity: .8, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0, ease: "easeOut" }}
                className="h-[150vh] flex flex-col items-center"
            >
                <Image src={`${service?.image}`} width={1000} height={1000} alt="hero" className="w-screen h-96"></Image>
                <h1 className="text-xl">{service.title}</h1>
                <p className="mt-2">{service.description}</p>
            </motion.div>
            <motion.div
                className="flex flex-col h-[50dvh] justify-start items-center"
            >
                <h1>بعدی</h1>
                <h1 className="text-xl text-center w-[100dvh]">{nextService.title}</h1>
            </motion.div>
        </motion.div>
    );
}