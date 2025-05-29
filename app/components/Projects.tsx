"use client";

import { Card, CardBody, CardFooter, Button, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../const/ConstantLists";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export default function Projects() {
  return (
    <section
      id="proyectos"
      aria-label="Sección de Proyectos"
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent select-none"
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
            {projects.map((project,idx) => (
              <motion.article
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="border border-default-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 focus-within:scale-105 outline-none"
                tabIndex={0}
                aria-label={`Proyecto: ${project.title}`}
              >
                <Card className="bg-background/60 backdrop-blur-md h-full flex flex-col">
                  <CardBody className="p-0 flex-1 flex flex-col">
                    <motion.div
                      className="relative h-48 rounded-t-lg overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Usar un <img> oculto para accesibilidad si es posible */}
                      <Image
                        width={600}
                        height={400}
                        src={project.image}
                        alt={`Imagen del proyecto ${project.title}`}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-4xl font-bold text-white/20 select-none">
                          {project.title.charAt(0)}
                        </span>
                      </motion.div>
                    </motion.div>

                    <div className="p-6 flex flex-col flex-1">
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
                        className="text-default-500 mb-4 flex-grow"
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
                            className="bg-primary-500/20 text-primary-600"
                            aria-label={`Etiqueta: ${tag}`}
                          >
                            {tag}
                          </Chip>
                        ))}
                      </motion.div>
                    </div>
                  </CardBody>

                  <CardFooter className="flex gap-2 justify-end">
                    {project.github && (
                      <Button
                      isIconOnly
                      variant="flat"
                      as="a"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver código fuente de ${project.title} en GitHub`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub className="text-xl" />
                    </Button>
                    )}
                    
                    <Button
                      isIconOnly
                      variant="flat"
                      as="a"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver demo de ${project.title}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
