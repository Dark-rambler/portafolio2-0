'use client'

import { Button} from "@nextui-org/react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaSun, FaMoon } from "react-icons/fa"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-default-200"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            [Tu Nombre]
          </span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-6">
          <motion.a 
            href="#inicio"
            className="text-default-600 hover:text-primary-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Inicio
          </motion.a>
          <motion.a 
            href="#sobre-mi"
            className="text-default-600 hover:text-primary-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sobre Mí
          </motion.a>
          <motion.a 
            href="#proyectos"
            className="text-default-600 hover:text-primary-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Proyectos
          </motion.a>
          <motion.a 
            href="#contacto"
            className="text-default-600 hover:text-primary-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contacto
          </motion.a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-2">
            <Button
              isIconOnly
              variant="flat"
              as="a"
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl   " />
            </Button>
            <Button
              isIconOnly
              variant="flat"
              as="a"
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
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
            >
              <FaTwitter className="text-xl" />
            </Button>
          </div>

          {/* Theme Switch */}
          {mounted && (
            <span
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-xl cursor-pointer"
              title={`Cambiar a ${theme === "dark" ? "modo claro" : "modo oscuro"}`}
            >
              {theme === "dark" ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-blue-500" />
              )}
            </span>
          )}
        </div>
      </div>
    </motion.header>
  )
} 