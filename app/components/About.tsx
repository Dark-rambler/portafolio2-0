'use client'

import { Card, CardBody, Progress } from "@nextui-org/react"
import { motion } from "framer-motion"

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Tailwind CSS", level: 90 },
  { name: "SQL", level: 70 },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-gradient-to-b from-background to-background/80">
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
            Sobre Mí
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <Card className="bg-background/60 backdrop-blur-md h-full hover:scale-105 transition-transform duration-300">
                <CardBody>
                  <h3 className="text-2xl font-bold mb-4">Mi Historia</h3>
                  <p className="text-default-500">
                    Soy un desarrollador web apasionado con más de X años de experiencia en la creación de aplicaciones web modernas y responsivas. Me especializo en el desarrollo full-stack utilizando las últimas tecnologías y mejores prácticas.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card className="bg-background/60 backdrop-blur-md h-full hover:scale-105 transition-transform duration-300">
                <CardBody>
                  <h3 className="text-2xl font-bold mb-4">Mi Enfoque</h3>
                  <p className="text-default-500">
                    Me enfoco en crear soluciones elegantes y eficientes que no solo se vean bien, sino que también sean fáciles de usar y mantener. Creo en la importancia de escribir código limpio y bien documentado.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-bold text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Mis Habilidades
            </motion.h3>
            <motion.div 
              className="grid md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.div 
                  key={skill.name} 
                  className="space-y-2"
                  variants={itemVariants}
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-default-500">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    color="primary"
                    className="h-2"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 