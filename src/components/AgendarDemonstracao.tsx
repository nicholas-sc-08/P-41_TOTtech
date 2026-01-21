"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function AgendarDemonstracao() {
    return (
        <AnimatePresence>
            <motion.div className="bg-white h-200">
                <Card className="w-100 h-100 flex flex-col justify-between">
                    <CardHeader className="h-10">
                        <CardTitle>Agende uma demonstração</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-between h-80">
                        <motion.div>
                            <Label className="mb-2">Nome</Label>
                            <Input placeholder="Qual é seu nome?" />
                        </motion.div>
                        <motion.div>
                            <Label className="mb-2">Email</Label>
                            <Input placeholder="Qual seu email corporativo?" />
                        </motion.div>
                        <motion.div>
                            <Label className="mb-2">Empresa</Label>
                            <Input placeholder="Qual empresa você trabalha?" />
                        </motion.div>
                        <motion.div>
                            <Label className="mb-2">Informação</Label>
                            <Input placeholder="Como podemos te ajudar?" />
                        </motion.div>
                        <motion.div>
                            <Button className="w-full cursor-pointer">Enviar</Button>
                        </motion.div>
                    </CardContent>
                </Card>
            </motion.div>
        </AnimatePresence>
    )
}