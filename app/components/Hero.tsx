"use client";

import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center min-h-screen bg-background overflow-hidden pb-0"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 dark:bg-gradient-to-b  dark:to-background dark:from-background dark:via-secondary-950  bg-gradient-to-br from-primary-50 via-white to-secondary-100" />

      {/* Contenido */}
      <div className="container relative z-10 mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex justify-center items-center gap-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Sparkles className="text-primary-500 w-6 h-6" />
            <span className="text-sm uppercase tracking-wide text-text-secondary">
              Portafolio personal
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            ¡Hola! Soy Edwin Garcia
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-2xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Desarrollador Full Stack apasionado por construir experiencias web
            intuitivas, rápidas y visualmente atractivas.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              as="a"
              href="#proyectos"
              color="primary"
              variant="shadow"
              size="lg"
              className="font-semibold rounded-xl px-6 py-3 text-text-primary bg-primary-600/80 hover:bg-primary-500 transition"
            >
              Ver Proyectos
            </Button>
            <Button
              as="a"
              href="#contacto"
              color="secondary"
              variant="shadow"
              size="lg"
              className="font-semibold rounded-xl px-6 py-3 text-text-primary bg-secondary-600/80 hover:bg-secondary-500 transition"
            >
              Contactar
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
