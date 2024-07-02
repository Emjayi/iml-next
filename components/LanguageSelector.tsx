'use client'
import * as  React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
export default () => {
    const router = useRouter();
    const pathname = usePathname();
    const langs = [
        { lang: "/en" },
        { lang: "/fa" },
    ];
    const [currentLang, setCurrentLang] = useState("");
    useEffect(() => {
        if (pathname.includes(langs[0].lang)) setCurrentLang("English")
        else setCurrentLang("Persian")
    })
    function handleLangChange() {
        const language = "/en";
        router.push(`${language}`);
    }
    return (
        <Select>
            <SelectTrigger className="w-[120px]" onChange={console.log("clicked")}>
                <SelectValue placeholder={currentLang} />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="fa">Persian</SelectItem>
            </SelectContent>
        </Select>
    );
};