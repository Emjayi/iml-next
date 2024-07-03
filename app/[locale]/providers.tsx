"use client"
import { NextUIProvider } from '@nextui-org/react'
import Lenis from 'lenis'
import { useEffect } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis()
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}