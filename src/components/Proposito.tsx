"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cardVariants, containerVariants, propositoImages } from "@/types/proposito";

export default function Proposito() {
    return (
        <AnimatePresence>
            <motion.div variants={containerVariants} initial="hidden" whileInView={"visible"} viewport={{ once: true, amount: 0.2 }} className="w-full h-100 bg-primary flex flex-col justify-center items-center">
                <motion.div variants={cardVariants} className="text-left w-full max-w-7xl mb-12">
                    <h1 className="text-secondary text-4xl font-bold mb-2">Soluções com propósito</h1>
                    <p className="text-lg opacity-90">Entender o contexto, personalizar a jornada e caminhar lado a lado.</p>
                </motion.div>
                <motion.div className="flex justify-evenly w-full">
                    {propositoImages.map(card => (
                        <motion.div key={card} variants={cardVariants} whileTap={{ scale: 0.98, y: 0 }} whileHover={{ scale: 1.00, y: -10, transition: { duration: 0.3 } }} className="relative cursor-pointer w-90">
                            <img src={card} alt="proposito" className="w-100 h-full object-cover overflow-hidden rounded-2xl shadow-2xl" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}