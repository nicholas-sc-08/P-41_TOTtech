"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { containerVariants, itemVariants } from "@/types/cardDemonstracao";

export default function CardDemonstracao() {

    return (
        <AnimatePresence>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                <Card className="w-100 flex flex-col justify-between">
                    <CardHeader className="h-10">
                        <motion.h3 variants={itemVariants}>
                            <CardTitle>Agende uma demonstração</CardTitle>
                        </motion.h3>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-between h-80">
                        <motion.div className="mb-2" variants={itemVariants}>
                            <Label className="mb-2">Nome</Label>
                            <Input placeholder="Qual é seu nome?" />
                        </motion.div>
                        <motion.div className="mb-2" variants={itemVariants}>
                            <Label className="mb-2">Email</Label>
                            <Input placeholder="Qual seu email corporativo?" />
                        </motion.div>
                        <motion.div className="mb-2" variants={itemVariants}>
                            <Label className="mb-2">Empresa</Label>
                            <Input placeholder="Qual empresa você trabalha?" />
                        </motion.div>
                        <motion.div className="mb-2" variants={itemVariants}>
                            <Label className="mb-2">Informação</Label>
                            <Input placeholder="Como podemos te ajudar?" />
                        </motion.div>
                        <motion.div className="mt-2" variants={itemVariants} whileHover={{scale: 1.02}} whileTap={{scale: 0.90}}>
                            <Button className="w-full cursor-pointer rounded-full">Enviar</Button>
                        </motion.div>
                    </CardContent>
                </Card>
            </motion.div>
        </AnimatePresence>
    )
}