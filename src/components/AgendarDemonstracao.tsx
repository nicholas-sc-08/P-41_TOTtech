"use client";

import { AnimatePresence, motion } from "framer-motion";
import CardDemonstracao from "./CardDemonstracao";

export default function AgendarDemonstracao() {
    return (
        <AnimatePresence>
            <motion.div className="bg-white w-full flex justify-between items-center h-200">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-1/2 h-100 flex flex-col justify-center items-center">
                    <h2 className="text-primary w-110 font-bold text-5xl mb-5">Pronto para dar o próximo passo?</h2>
                    <p className="text-muted-foreground text-xl max-w-md">Nossos especialistas estão prontos para entender seu cenário e desenhar a melhor trilha de conhecimento para sua organização.</p>
                    <motion.div className="w-110 h-30 flex items-center">
                        <div className="flex items-center space-x-3 text-primary font-semibold">
                            <span className="bg-secondary p-2 rounded-full">✉️</span>
                            <span>contato@toteduca.com.br</span>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div className="flex justify-center w-1/2 h-100">
                    <CardDemonstracao />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}