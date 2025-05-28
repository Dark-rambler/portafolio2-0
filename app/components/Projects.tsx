'use client'

import { Card, CardBody, CardFooter, Button, Chip } from "@nextui-org/react"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    title: "E-commerce Platform",
    description: "Una plataforma de comercio electrónico moderna construida con Next.js y Stripe.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com"
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con autenticación y base de datos en tiempo real.",
    image: "/projects/taskmanager.jpg",
    tags: ["React", "Firebase", "Material UI"],
    github: "https://github.com/yourusername/taskmanager",
    demo: "https://taskmanager-demo.com"
  },
  {
    title: "Portfolio Website",
    description: "Sitio web personal con diseño moderno y animaciones fluidas.",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://portfolio-demo.com"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-gradient-to-b from-background/80 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Mis Proyectos
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-background/60 backdrop-blur-md h-full">
                  <CardBody className="p-0">
                    <motion.div 
                      className="relative h-48"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20" />
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-4xl font-bold text-white/20">
                          {project.title.charAt(0)}
                        </span>
                      </motion.div>
                    </motion.div>
                    <div className="p-6">
                      <motion.h3 
                        className="text-xl font-bold mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-default-500 mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {project.description}
                      </motion.p>
                      <motion.div 
                        className="flex flex-wrap gap-2 mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        {project.tags.map((tag) => (
                          <Chip
                            key={tag}
                            size="sm"
                            variant="flat"
                            className="bg-primary-500/10 text-primary-500"
                          >
                            {tag}
                          </Chip>
                        ))}
                      </motion.div>
                    </div>
                  </CardBody>
                  <CardFooter className="flex gap-2 justify-end">
                    <Button
                      isIconOnly
                      variant="flat"
                      as="a"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub className="text-xl" />
                    </Button>
                    <Button
                      isIconOnly
                      variant="flat"
                      as="a"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 