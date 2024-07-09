"use client"
import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from "@nextui-org/react";
import Logo from '@/public/logo.png'
import Image from "next/image";
import LocaleSelector from "./LocaleSelector";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Link, type Locale } from "@/i18n.config";
export default function App() {
    const t = useTranslations("Header")
    const pathName = usePathname()
    const locale = useLocale() as Locale;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {
            title: t("services"),
            link: "/services"
        },
        {
            title: t("productionLines"),
            link: "/production-lines"
        },
        {
            title: t("contact"),
            link: "/contact-us"
        }
    ];
    return (
        <>
            {(pathName === "/en-us" || pathName === "/" || pathName === "/fa-ir") ? <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .3, delay: 2 }}
                className="sticky top-0 z-50"
            >
                <Navbar onMenuOpenChange={setIsMenuOpen}>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <Link href="/"><Image src={Logo} alt="logo" className="w-48" /></Link>
                    </NavbarBrand>
                    <NavbarContent className="hidden sm:flex gap-4 capitalize" justify="center">
                        <NavbarItem>
                            <Link color="foreground" href="/services">
                                {t("services")}
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="/production-lines" aria-current="page">
                                {t("productionLines")}
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="/contact-us">
                                {t("contact")}
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarContent justify="end">
                        <NavbarItem>
                            <Button as={Link} className="hidden lg:flex capitalize bg-blue-500 text-white" href="tel:+5136126622" variant="flat">
                                {t("number")}
                            </Button>
                        </NavbarItem>
                        <NavbarItem>
                            <LocaleSelector locale={locale} />
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarMenu className="bg-white flex items-start flex-col gap-10 pt-10 px-10">
                        {menuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    color={
                                        index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                    }
                                    className="w-full"
                                    href={item.link}
                                >
                                    {item.title}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                        <NavbarItem>
                            <Button as={Link} className="flex lg:hidden capitalize bg-blue-500 mx-0 text-white" href="tel:+5136126622" variant="flat">
                                {t("number")}
                            </Button>
                        </NavbarItem>
                    </NavbarMenu>
                </Navbar>
            </motion.div> :
                <Navbar onMenuOpenChange={setIsMenuOpen}>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <Link href="/"><Image src={Logo} alt="logo" className="w-48" /></Link>
                    </NavbarBrand>
                    <NavbarContent className="hidden sm:flex gap-4 capitalize" justify="center">
                        <NavbarItem>
                            <Link color="foreground" href="/services">
                                {t("services")}
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="/production-lines" aria-current="page">
                                {t("productionLines")}
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="/contact-us">
                                {t("contact")}
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarContent justify="end">
                        <NavbarItem>
                            <Button as={Link} color="primary" className="hidden lg:flex capitalize bg-blue-500 text-white" href="tel:+5136126622" variant="flat">
                                {t("number")}
                            </Button>
                        </NavbarItem>
                        <NavbarItem>
                            <LocaleSelector locale={locale} />
                        </NavbarItem>
                    </NavbarContent>

                    <NavbarMenu className="bg-white flex items-start flex-col gap-10 pt-10 px-10">
                        {menuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    color={
                                        index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                    }
                                    className="w-full"
                                    href={item.link}
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    {item.title}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                        <NavbarItem>
                            <Button as={Link} className="flex lg:hidden capitalize bg-blue-500 mx-0 text-white" href="tel:+5136126622" variant="flat">
                                {t("number")}
                            </Button>
                        </NavbarItem>
                    </NavbarMenu>
                </Navbar>}
        </>
    );
}
