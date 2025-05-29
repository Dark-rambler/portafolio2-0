'use client'

import { Input, Textarea, Button, Card, CardBody } from "@nextui-org/react"
import { motion } from "framer-motion"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contacto
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-2 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Formulario */}
            <motion.div variants={itemVariants}>
              <Card className="bg-background/70 backdrop-blur-lg border border-primary-500 rounded-2xl hover:scale-[1.02] transition-transform duration-300 shadow-xl">
                <CardBody className="p-8">
                  <motion.h3 
                    className="text-2xl font-bold mb-6 text-primary-500"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Envíame un Mensaje
                  </motion.h3>
                  <form className="space-y-6">
                    <Input
                      type="text"
                      placeholder="Nombre"
                      variant="bordered"
                      color="primary"
                      className="w-full"
                      radius="lg"
                      size="lg"
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      variant="bordered"
                      color="primary"
                      className="w-full"
                      radius="lg"
                      size="lg"
                    />
                    <Textarea
                      label="Mensaje"
                      placeholder="Escribe tu mensaje..."
                      variant="bordered"
                      color="primary"
                      className="w-full"
                      minRows={4}
                      radius="lg"
                    />
                    <Button
                      color="primary"
                      variant="shadow"
                      size="lg"
                      radius="lg"
                      className="w-full bg-gradient-to-r p-3 rounded-sm from-secondary-500 to-primary-500 text-white font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </motion.div>

            {/* Información y redes sociales */}
            <div className="space-y-10">
              {/* Info contacto */}
              <motion.div variants={itemVariants}>
                <Card className="bg-background/70 backdrop-blur-lg border border-secondary-500 rounded-2xl hover:scale-[1.02] transition-transform duration-300 shadow-xl">
                  <CardBody className="p-8">
                    <motion.h3 
                      className="text-2xl font-bold mb-6 text-secondary-500"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      Información de Contacto
                    </motion.h3>
                    <motion.div 
                      className="space-y-5 text-default-500"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <p>
                        Estoy disponible para proyectos freelance y oportunidades de trabajo. No dudes en contactarme.
                      </p>
                      <div>
                        <p className="font-semibold text-primary-500">Email:</p>
                        <p>garciaramiro000@gmail.com</p>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-500">Ubicación:</p>
                        <p>Cochabamba, Bolivia</p>
                      </div>
                    </motion.div>
                  </CardBody>
                </Card>
              </motion.div>

              {/* Redes sociales */}
              <motion.div variants={itemVariants}>
                <Card className="bg-background/70 backdrop-blur-lg border border-primary-500 rounded-2xl hover:scale-[1.02] transition-transform duration-300 shadow-xl">
                  <CardBody className="p-8">
                    <motion.h3 
                      className="text-2xl font-bold mb-6 text-primary-500"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      Redes Sociales
                    </motion.h3>
                    <motion.div 
                      className="flex gap-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {[{
                        href: "https://github.com/Dark-rambler",
                        icon: <FaGithub className="text-2xl" />,
                        label: "GitHub"
                      }, {
                        href: "https://www.linkedin.com/in/edwin-ramiro-garcia-chambilla/",
                        icon: <FaLinkedin className="text-2xl" />,
                        label: "LinkedIn"
                      }, {
                        href: "https://www.facebook.com/edwinramiro.garciachambilla.5/",
                        icon: <FaFacebook className="text-2xl" />,
                        label: "Facebook"
                      },
                      {
                        href: "https://www.instagram.com/edwinramirogarcia/",
                        icon: <FaInstagram className="text-2xl" />,
                        label: "Instagram"
                      }
                    
                    ].map(({ href, icon, label }) => (
                        <Button
                          key={label}
                          isIconOnly
                          variant="flat"
                          as="a"
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          radius="full"
                          className="text-primary-500 hover:text-secondary-500 transition-colors"
                          whileHover={{ scale: 1.15, rotate: 10 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {icon}
                        </Button>
                      ))}
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