"use client";

import { AnimatePresence, motion } from "framer-motion";
import CardDemonstracao from "./CardDemonstracao";

export default function AgendarDemonstracao() {
    return (
        <AnimatePresence>
            <motion.div className="bg-white w-full md:flex justify-between items-center md:h-150">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex w-full text-center md:flex w-1/2 h-100 flex-col justify-center items-center">
                    <h2 className="text-center md:text-left text-primary w-110 font-bold text-5xl mb-5">Pronto para dar o próximo passo?</h2>
                    <p className="text-center md:text-left text-muted-foreground text-xl max-w-md">Nossos especialistas estão prontos para entender seu cenário e desenhar a melhor trilha de conhecimento para sua organização.</p>
                    <motion.div className="w-full flex justify-center md:justify-start md:flex md:w-110 h-30 items-center">
                        <div className="flex items-center space-x-3 text-primary font-semibold">
                            <span className="bg-secondary p-2 rounded-full">✉️</span>
                            <span>contato@toteduca.com.br</span>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div className="flex w-full md:flex justify-center md:w-1/2">
                    <CardDemonstracao />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}