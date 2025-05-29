"use client";

import { Card, CardBody, Progress } from "@nextui-org/react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Angular", level: 80 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Java", level: 80 },
  { name: "Spring Boot", level: 75 },
  { name: "SQL", level: 70 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="py-32 bg-background overflow-hidden relative"
    >
      {/* Fondo gradiente similar al Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-100 dark:from-background dark:via-secondary-950 dark:to-background opacity-30 -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Título y subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent leading-tight">
            Sobre Mí
          </h2>
          <p className="mt-4 text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Descubre más sobre mi experiencia y habilidades como desarrollador.
          </p>
        </motion.div>

        {/* Cards "Mi Historia" y "Mi Enfoque" */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Card className="bg-background/70 backdrop-blur-lg rounded-3xl border border-divider shadow-lg dark:shadow-none hover:scale-[1.03] transition-transform duration-300">
              <CardBody className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-center text-text-secondary">
                  Mi Historia
                </h3>
                <p className="text-text-secondary leading-relaxed text-justify">
                  Soy un desarrollador web apasionado con más de 2 años de
                  experiencia creando aplicaciones modernas y responsivas. Me
                  especializo en frontend utilizando tecnologías actuales y
                  buenas prácticas.
                </p>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-background/70 backdrop-blur-lg rounded-3xl border border-divider shadow-lg dark:shadow-none hover:scale-[1.03] transition-transform duration-300">
              <CardBody className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-center text-text-secondary">
                  Mi Enfoque
                </h3>
                <p className="text-text-secondary leading-relaxed text-justify">
                  Me enfoco en crear soluciones elegantes y funcionales que sean
                  intuitivas y mantenibles. Valoro el código limpio, modular y
                  bien documentado para facilitar el crecimiento de cada
                  proyecto.
                </p>
              </CardBody>
            </Card>
          </motion.div>
        </motion.div>

        {/* Sección de habilidades */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-extrabold text-center mb-12 text-text-secondary">
            Mis Habilidades
          </h3>

          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="bg-background/70 backdrop-blur-md rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="flex justify-between mb-2 text-sm font-semibold text-text-secondary">
                  <span>{skill.name}</span>
                  <span className="text-default-500">{skill.level}%</span>
                </div>
                <Progress value={skill.level} color="primary" className="h-2 rounded-full" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
