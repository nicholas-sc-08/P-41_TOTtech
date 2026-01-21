"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants, logos } from "@/types/nossosClientes";

export default function NossosClientes() {
    return (
        <section className="w-full bg-secondary py-16 md:py-24 flex flex-col items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-7xl w-full px-6 flex flex-col items-center md:items-start mb-12 text-center md:text-left">
                <h2 className="text-primary text-3xl md:text-4xl font-bold">Nossos Clientes</h2>
                <p className="text-muted-foreground text-base md:text-lg mt-3">
                    As empresas que geramos as experiências desejadas!
                </p>
            </motion.div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="w-full max-w-7xl px-6 grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-between items-center gap-10 md:gap-4">
                {logos.map((logo, index) => (
                    <motion.div key={index} variants={itemVariants} className="flex justify-center">
                        <img src={logo.src} alt={logo.alt} className="w-28 md:w-35 h-auto grayscale opacity-60 hover:opacity-100 transition-all" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}