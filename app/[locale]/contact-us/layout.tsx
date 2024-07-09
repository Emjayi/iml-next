"use client"
import { motion } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: .6, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}