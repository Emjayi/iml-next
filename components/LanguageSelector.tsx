'use client'
import * as  React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
export default () => {
    const router = useRouter();
    const pathname = usePathname();
    const langs = [
        { lang: "/en", fullName: "English", shortName: "EN" },
        { lang: "/fa", fullName: "Persian", shortName: "FA" },
    ];
    const [currentLang, setCurrentLang] = useState();
    function handleLangChange({ lang }: { lang: string; fullName: string }) {
        const language = lang ? "/" + lang : "/en";
        router.push(`${language}`);
    }
    return (
        <select>
            {langs.map((lang) => (
                <option
                    key={lang.lang}
                    defaultValue={currentLang}
                    onClick={() => handleLangChange(lang)}
                >
                    {lang.fullName}
                </option>
            ))}
        </select>
    );
};