'use client'

import { Input, Textarea, Button, Card, CardBody } from "@nextui-org/react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Contacto
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-background/60 backdrop-blur-md hover:scale-105 transition-transform duration-300">
                <CardBody className="p-6">
                  <motion.h3 
                    className="text-2xl font-bold mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Envíame un Mensaje
                  </motion.h3>
                  <form className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Input
                        type="text"
                        label="Nombre"
                        variant="bordered"
                        className="w-full"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Input
                        type="email"
                        label="Email"
                        variant="bordered"
                        className="w-full"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Textarea
                        label="Mensaje"
                        variant="bordered"
                        className="w-full"
                        minRows={4}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        color="primary"
                        variant="shadow"
                        className="w-full"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Enviar Mensaje
                      </Button>
                    </motion.div>
                  </form>
                </CardBody>
              </Card>
            </motion.div>

            <div className="space-y-8">
              <motion.div variants={itemVariants}>
                <Card className="bg-background/60 backdrop-blur-md hover:scale-105 transition-transform duration-300">
                  <CardBody className="p-6">
                    <motion.h3 
                      className="text-2xl font-bold mb-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      Información de Contacto
                    </motion.h3>
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-default-500">
                        Estoy disponible para proyectos freelance y oportunidades de trabajo. No dudes en contactarme.
                      </p>
                      <div className="space-y-2">
                        <p className="font-medium">Email:</p>
                        <p className="text-default-500">tu.email@ejemplo.com</p>
                      </div>
                      <div className="space-y-2">
                        <p className="font-medium">Ubicación:</p>
                        <p className="text-default-500">Ciudad, País</p>
                      </div>
                    </motion.div>
                  </CardBody>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="bg-background/60 backdrop-blur-md hover:scale-105 transition-transform duration-300">
                  <CardBody className="p-6">
                    <motion.h3 
                      className="text-2xl font-bold mb-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      Redes Sociales
                    </motion.h3>
                    <motion.div 
                      className="flex gap-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        isIconOnly
                        variant="flat"
                        as="a"
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub className="text-xl" />
                      </Button>
                      <Button
                        isIconOnly
                        variant="flat"
                        as="a"
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaLinkedin className="text-xl" />
                      </Button>
                      <Button
                        isIconOnly
                        variant="flat"
                        as="a"
                        href="https://twitter.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaTwitter className="text-xl" />
                      </Button>
                    </motion.div>
                  </CardBody>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 