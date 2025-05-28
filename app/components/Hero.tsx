'use client'

import { Button } from "@nextui-org/react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen relative flex items-center justify-center">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Contenido */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ¡Hola! Soy [Tu Nombre]
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-default-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Desarrollador Full Stack apasionado por crear experiencias web únicas y funcionales.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              as="a"
              href="#proyectos"
              color="primary"
              variant="shadow"
              size="lg"
              className="font-medium"
            >
              Ver Proyectos
            </Button>
            <Button
              as="a"
              href="#contacto"
              variant="flat"
              size="lg"
              className="font-medium"
            >
              Contactar
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 