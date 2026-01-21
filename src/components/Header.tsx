"use client";

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Link from "next/link";

export default function Header() {

    return (
        <AnimatePresence>
            <motion.div className="fixed w-full z-99" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: easeInOut }}>
                <header className="bg-background shadow-tot h-20 flex items-center justify-around">
                    <div className="w-100 h-full flex items-center">
                        <img src={"/TOTlogo.svg"} className="w-50" />
                    </div>
                    <nav className=" w-250 h-full flex items-center justify-between text-primary font-semibold text-md">
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
                    </nav>
                </header>
            </motion.div>
        </AnimatePresence>
    )
};