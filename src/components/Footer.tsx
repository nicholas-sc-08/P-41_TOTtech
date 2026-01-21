"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { containerVariants, itemVariants } from "@/types/footer";
import { Instagram, Linkedin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <AnimatePresence>
            <motion.footer className="bg-footer w-full mt-20 pt-20" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                <motion.main className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between px-6 gap-10">
                    <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start space-y-4">
                        <motion.img src="/TOTlogoWhite.svg" alt="logo" className="w-35" />
                        <motion.p className="text-primary-foreground text-center md:text-left max-w-[250px]">Pronto para transformar sua organização?</motion.p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button variant="secondary" className="rounded-full text-footer px-8">Agendar Demonstração</Button>
                        </motion.div>
                    </motion.div>
                    <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-auto border-t md:border-t-0 border-white/20 pt-8 md:pt-0">
                        <nav className="flex justify-end flex-col space-y-2">
                            <h4 className="text-primary-foreground text-xl font-bold mb-2">Explorar</h4>
                            <Link href="/" className="text-primary-foreground mb-2">Cursos</Link>
                            <Link href="/" className="text-primary-foreground mb-2">Plataforma</Link>
                            <Link href="/" className="text-primary-foreground mb-2">Consultoria</Link>
                            <Link href="/" className="text-primary-foreground mb-2">Blog</Link>
                        </nav>
                        <nav className="flex justify-end flex-col space-y-2">
                            <h4 className="text-primary-foreground text-xl font-bold mb-2">Recursos</h4>
                            <Link href="/" className="text-primary-foreground mb-2">Materiais Gratuitos</Link>
                            <Link href="/" className="text-primary-foreground mb-2">Case Studies</Link>
                            <Link href="/" className="text-primary-foreground mb-2">Webinars</Link>
                            <Link href="/" className="text-primary-foreground mb-2">FAQ</Link>
                        </nav>
                        <nav className="flex justify-end flex-col space-y-2">
                            <h4 className="text-primary-foreground text-xl font-bold mb-2">Sobre Nós</h4>                            <Link href="/" className="text-primary-foreground mb-2">Nossa História</Link>
                            <Link href="/" className="text-primary-foreground mb-2">Carreiras</Link>
                            <Link href="/" className="text-primary-foreground mb-2">Contato</Link>
                            <Link href="/" className="text-primary-foreground mb-2">Ajuda</Link>
                        </nav>
                    </motion.div>
                </motion.main>
                <motion.aside className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/20 px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-primary-foreground/60 text-sm text-center">©2024 TOT Educa Todos os direitos reservados</p>
                    <nav className="flex gap-6">
                        <Link href="/" className="text-primary-foreground hover:text-white transition-colors"><Linkedin /></Link>
                        <Link href="/" className="text-primary-foreground hover:text-white transition-colors"><Instagram /></Link>
                        <Link href="/" className="text-primary-foreground hover:text-white transition-colors"><Phone /></Link>
                    </nav>
                </motion.aside>
            </motion.footer>
        </AnimatePresence>
    )
}