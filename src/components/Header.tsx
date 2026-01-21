"use client";

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <AnimatePresence>
            <motion.div className="fixed md:fixed w-full z-50" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: easeInOut }}>
                <header className="flex bg-background shadow-tot h-20 items-center justify-between px-4 md:px-10 w-full">
                    <div className="w-100 h-full flex items-center">
                        <img src={"/TOTlogo.svg"} className="w-32 md:w-50" />
                        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}><Menu className="w-6 h-6 text-primary" /></Button>
                    </div>
                    <motion.nav className="hidden md:flex w-250 h-full items-center justify-between text-primary font-semibold text-md">
                        <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
                            <Link href={"/"}>Cursos Personalizados</Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
                            <Link href={"/"}>Cursos da Prateleira</Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
                            <Link href={"/"}>Plataforma de Aprendizagem</Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
                            <Link href={"/"}>Consultoria</Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
                            <Link href={"/"}>Blog</Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
                            <Link href={"/"}>eBooks</Link>
                        </motion.div>
                    </motion.nav>
                </header>
                <AnimatePresence>
                    {isOpen &&
                        <motion.div className="md:hidden bg-background shadow-tot px-6 py-4 flex flex-col text-primary gap-4" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                            <Link href="/" onClick={() => setIsOpen(false)}>Cursos Personalizados</Link>
                            <Link href="/" onClick={() => setIsOpen(false)}>Cursos da Prateleira</Link>
                            <Link href="/" onClick={() => setIsOpen(false)}>Plataforma</Link>
                            <Link href="/" onClick={() => setIsOpen(false)}>Consultoria</Link>
                            <Link href="/" onClick={() => setIsOpen(false)}>Blog</Link>
                            <Link href="/" onClick={() => setIsOpen(false)}>eBooks</Link>
                        </motion.div>
                    }
                </AnimatePresence>
            </motion.div>
        </AnimatePresence>
    )
};