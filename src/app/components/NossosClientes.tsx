"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants, logos } from "@/types/nossosClientes";



export default function NossosClientes() {

    return (
        <section className="w-full bg-secondary pt-24 flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl w-full flex flex-col items-start mb-16 text-left"
            >
                <h2 className="text-primary text-4xl font-bold">Nossos Clientes</h2>
                <p className="text-muted-foreground text-lg mt-3">
                    As empresas que geramos as experiências desejadas!
                </p>
            </motion.div>

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="w-full max-w-350 flex justify-between items-center">
                {logos.map((logo, index) => (
                    <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} className="w-full flex justify-center cursor-pointer">
                        <img src={logo.src} alt={logo.alt} className="w-35 h-auto grayscale opacity-60 hover:opacity-100 transition-all duration-300" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}