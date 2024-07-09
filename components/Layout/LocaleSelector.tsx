"use client";

import {
    localeNames,
    locales,
    usePathname,
    useRouter,
    type Locale,
} from "@/i18n.config";
import { Select, SelectItem, SelectSection } from "@nextui-org/react";
import Image from "next/image";
import iran from "@/public/flags/iran.webp"
import usa from "@/public/flags/usa.png"
import { useState } from "react";

export default function LocaleSwitcher({
    locale,
}: {
    locale: Locale;
}) {
    // `pathname` will contain the current
    // route without the locale e.g. `/about`...
    const pathname = usePathname();
    const router = useRouter();

    const changeLocale = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        const newLocale = event.target.value as Locale;
        router.replace(pathname, { locale: newLocale });
    };

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Select
                placeholder={localeNames[locale]}
                onChange={changeLocale}
                className="w-32"
                isOpen={isOpen}
                onClick={() => setIsOpen(true)}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <SelectSection className="" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                    {locales.map((loc) => (
                        <SelectItem className="" key={loc} value={loc} aria-label={localeNames[loc]}>
                            <Image className="inline w-6 px-1" src={(localeNames[loc] === "English") ? usa : iran} alt="lang"></Image> {localeNames[loc]}
                        </SelectItem>
                    ))}
                </SelectSection>
            </Select>
        </div>
    );
}