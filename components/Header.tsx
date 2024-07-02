"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Logo from '@/public/logo.png'
import Image from "next/image";
import LanguageSelector from "./LanguageSelector";
import { motion } from "framer-motion";
export default function App() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .3, delay: 2 }}
        >
            <Navbar>
                <NavbarBrand>
                    <Image src={Logo} alt="logo" className="w-48" />
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="/en">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/en/services">
                            Services
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="/en/production-lines" aria-current="page">
                            Production Lines
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">
                            Contact us
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <LanguageSelector />
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </motion.div>
    );
}
