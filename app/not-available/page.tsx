'use client';

import { motion } from 'framer-motion';
import { Lock } from 'lucide-react'; 

export default function NotAvailablePage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-background px-6 text-center overflow-hidden">
      {/* Fondo con candado grande y desenfocado */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <Lock className="w-72 h-72 text-primary-300" />
      </div>

      {/* Contenido principal */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-text-primary mb-4 z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Esta sección está protegida
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-text-secondary max-w-2xl mb-8 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Por respeto a acuerdos de confidencialidad con el cliente, no puedo mostrar esta sección.  
        La información está segura conmigo. Pero no te preocupes, ¡aún puedes descubrir mucho más!
      </motion.p>

      <motion.a
        href="/"
        className="z-10 px-6 py-3 rounded-xl bg-secondary-500 text-white font-semibold hover:bg-secondary-600 transition-colors duration-300 shadow-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Volver al inicio
      </motion.a>
    </div>
  );
}
