"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/types/banner";

export default function Banner() {
  return (
    <AnimatePresence>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-primary min-h-screen pt-20 w-full flex flex-col items-center justify-center overflow-hidden relative"
      >
        {/* Blobs decorativos */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-48 h-48 md:w-64 md:h-64 bg-white rounded-full blur-3xl pointer-events-none"
        />

        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-secondary rounded-full blur-3xl pointer-events-none"
        />

        {/* Conteúdo */}
        <motion.div variants={itemVariants}>
          <h1 className="text-3xl md:text-4xl font-bold text-center text-primary-foreground max-w-3xl px-4">
            Soluções educativas, entrega de conhecimento e conexão para a sua
            organização.
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-base md:text-lg mt-5 mb-6 text-center text-primary-foreground max-w-2xl px-4">
            Conteúdos estratégicos, desenvolvidos para a sua realidade,
            adaptados para os seus colaboradores e personalizados para sua
            empresa. Com a TOT, o cliente nunca anda sozinho.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="secondary" className="w-48 h-10 rounded-full">
            Agendar demonstração
          </Button>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
