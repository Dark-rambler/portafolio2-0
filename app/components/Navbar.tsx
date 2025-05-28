'use client'

import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Switch,
  Avatar
} from "@nextui-org/react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <NextUINavbar 
      maxWidth="xl" 
      position="sticky"
      className="bg-background/60 backdrop-blur-md border-b border-divider"
      height="4rem"
    >
      <NavbarBrand className="gap-3">
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="primary"
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
        <p className="font-bold text-inherit text-xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
          Mi Portafolio
        </p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link 
            color="foreground" 
            href="#inicio"
            className="hover:text-primary-500 transition-colors font-medium"
          >
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            color="foreground" 
            href="#proyectos"
            className="hover:text-primary-500 transition-colors font-medium"
          >
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            color="foreground" 
            href="#sobre-mi"
            className="hover:text-primary-500 transition-colors font-medium"
          >
            Sobre Mí
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            color="foreground" 
            href="#contacto"
            className="hover:text-primary-500 transition-colors font-medium"
          >
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-4">
        <NavbarItem className="hidden sm:flex gap-2">
          <Button
            isIconOnly
            as={Link}
            href="https://github.com"
            target="_blank"
            variant="light"
            className="text-default-500 hover:text-primary-500"
          >
            <FaGithub size={20} />
          </Button>
          <Button
            isIconOnly
            as={Link}
            href="https://linkedin.com"
            target="_blank"
            variant="light"
            className="text-default-500 hover:text-primary-500"
          >
            <FaLinkedin size={20} />
          </Button>
          <Button
            isIconOnly
            as={Link}
            href="https://twitter.com"
            target="_blank"
            variant="light"
            className="text-default-500 hover:text-primary-500"
          >
            <FaTwitter size={20} />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Switch
            defaultSelected
            size="sm"
            color="primary"
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            startContent={<span className="text-xs">🌞</span>}
            endContent={<span className="text-xs">🌙</span>}
          />
        </NavbarItem>
        <NavbarItem>
          <Button 
            as={Link} 
            color="primary" 
            href="#" 
            variant="shadow"
            className="font-medium"
            startContent={<span>📄</span>}
          >
            Descargar CV
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  )
} 