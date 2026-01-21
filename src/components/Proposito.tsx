"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cardVariants, containerVariants, propositoImages } from "@/types/proposito";

export default function Proposito() {
    return (
        <AnimatePresence>
            <motion.div variants={containerVariants} initial="hidden" whileInView={"visible"} viewport={{ once: true, amount: 0.1 }} className="w-full py-16 md:py-24 bg-primary flex flex-col justify-center items-center px-6">
                <motion.div variants={cardVariants} className="text-center md:text-left w-full max-w-7xl mb-12">
                    <h1 className="text-secondary text-3xl md:text-4xl font-bold mb-4">Soluções com propósito</h1>
                    <p className="text-base md:text-lg opacity-90 text-white">Entender o contexto, personalizar a jornada e caminhar lado a lado.</p>
                </motion.div>
                <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-7xl">
                    {propositoImages.map((card, index) => (
                        <motion.div key={index} variants={cardVariants} whileTap={{ scale: 0.98 }} whileHover={{ scale: 1.02, y: -10 }} className="relative cursor-pointer w-full">
                            <img src={card} alt="proposito" className="w-70 md:w-full h-auto object-cover rounded-2xl shadow-2xl" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}