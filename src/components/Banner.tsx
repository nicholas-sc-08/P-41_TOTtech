"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/types/banner";

export default function Banner() {



    return (
        <AnimatePresence>
            <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-primary h-screen w-full flex flex-col items-center justify-center">
                <motion.div animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 left-[10%] w-64 h-64 bg-white rounded-full blur-3xl pointer-events-none"></motion.div>
                <motion.div animate={{ y: [0, 20, 0], opacity: [0.05, 0.15, 0.05] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-20 right-[10%] w-96 h-96 bg-secondary rounded-full blur-3xl pointer-events-none"></motion.div>
                <motion.div variants={itemVariants}>
                    <h1 className="text-4xl font-bold text-center w-250 text-primary-foreground">Soluções educativas, entrega de conhecimento e conexão para a sua organização.</h1>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <p className="text-lg mt-5 mb-5 w-220 text-center text-primary-foreground">Conteúdos estratégicos, desenvolvidos para a sua realidade, adaptados para os seus colaboradores e personalizados para sua empresa. Com a TOT, o cliente nunca anda sozinho.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="secondary" className="cursor-pointer w-50 h-10 rounded-full">Agendar demonstração</Button>
                </motion.div>
            </motion.section>
        </AnimatePresence>
    )
};