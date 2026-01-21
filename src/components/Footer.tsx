"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { containerVariants, itemVariants } from "@/types/footer";
import { Instagram, Linkedin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <AnimatePresence>
            <motion.footer className="bg-footer w-full h-100" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                <motion.main className="w-full h-full flex justify-between">
                    <motion.div variants={itemVariants} className="flex flex-col items-center justify-center w-200 h-120">
                        <motion.img src="/TOTlogoWhite.svg" alt="logo" className="w-100" />
                        <motion.p className="text-primary-foreground w-80">Pronto para tranformar sua organização?</motion.p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-70 mr-10 mt-5">
                            <Button variant="secondary" className="w-full h-10 rounded-full text-footer cursor-pointer">Agendar Demonstação</Button>
                        </motion.div>
                    </motion.div>
                    <motion.div className="flex justify-between w-full ml-20 mr-20 h-100 pt-20 border-b-white border-b-3">
                        <motion.nav variants={itemVariants} className="flex flex-col justify-center w-50">
                            <motion.h4 className="text-primary-foreground text-2xl font-bold mb-4">Explorar</motion.h4>
                            <Link href="/" className="text-primary-foreground mb-2">Cursos</Link>
                            <Link href="/" className="text-primary-foreground mb-2">Plataforma</Link>
                            <Link href="/" className="text-primary-foreground mb-2">Consultoria</Link>
                            <Link href="/" className="text-primary-foreground mb-2">Blog</Link>
                        </motion.nav>
                        <motion.nav variants={itemVariants} className="flex flex-col justify-center w-50">
                            <motion.h4 className="text-primary-foreground text-2xl font-bold mb-4">Recursos</motion.h4>
                            <Link href="/" className="text-primary-foreground mb-2">Materiais Gratuitos</Link>
                            <Link href="/" className="text-primary-foreground mb-2">Case Studies</Link>
                            <Link href="/" className="text-primary-foreground mb-2">Webinars</Link>
                            <Link href="/" className="text-primary-foreground mb-2">FAQ</Link>
                        </motion.nav>
                        <motion.nav variants={itemVariants} className="flex flex-col justify-center w-50">
                            <motion.h4 className="text-primary-foreground text-2xl font-bold mb-4">Sobre Nós</motion.h4>
                            <Link href="/" className="text-primary-foreground mb-2">Nossa História</Link>
                            <Link href="/" className="text-primary-foreground mb-2">Carreiras</Link>
                            <Link href="/" className="text-primary-foreground mb-2">Contato</Link>
                            <Link href="/" className="text-primary-foreground mb-2">Ajuda</Link>
                        </motion.nav>
                    </motion.div>
                </motion.main>
                <motion.aside className="bg-footer flex justify-end items-center w-full h-30">
                    <motion.div className="flex justify-center items-center w-250 h-full mr-20">
                        <motion.p className="text-primary-foreground">©2024 TOT Educa Todos os direitos reservados</motion.p>
                        <motion.nav variants={itemVariants} className="text-primary-foreground/80 flex justify-end w-100">
                            <Link href="/" className="mr-5 hover:text-primary-foreground transition-color"><Linkedin /></Link>
                            <Link href="/" className="mr-5 hover:text-primary-foreground transition-color"><Instagram /></Link>
                            <Link href="/" className="hover:text-primary-foreground transition-color"><Phone /></Link>
                        </motion.nav>
                    </motion.div>
                </motion.aside>
            </motion.footer>
        </AnimatePresence>
    )
}