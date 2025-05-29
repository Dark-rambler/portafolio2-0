"use client";

import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Switch
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react"; // Ícono decorativo para seguridad

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <NextUINavbar
        maxWidth="xl"
        position="sticky"
        className="bg-background/60 backdrop-blur-md border-b border-divider shadow-sm"
        height="4rem"
      >
        {/* Marca o logo */}
        <NavbarBrand className="gap-2 text-primary-600 font-bold tracking-wide">
          <ShieldCheck className="w-6 h-6 text-primary-500" />
          <p className="text-xl">Edwin</p>
        </NavbarBrand>

        {/* Enlaces del centro */}
        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          {["inicio", "proyectos", "sobre-mi", "contacto"].map((item) => (
            <NavbarItem key={item}>
              <Link
                color="foreground"
                href={`#${item}`}
                className="hover:text-primary-500 transition-colors font-medium"
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Acciones del lado derecho */}
        <NavbarContent justify="end" className="gap-3">
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

          {/* Modo claro/oscuro */}
          <NavbarItem>
            <Switch
              defaultSelected={theme === "dark"}
              size="sm"
              color="primary"
              onChange={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              startContent={<span className="text-xs">🌞</span>}
              endContent={<span className="text-xs">🌙</span>}
            />
          </NavbarItem>

          {/* Botón de CV */}
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="/cv.pdf"
              variant="shadow"
              className="font-medium"
              startContent={<span>📄</span>}
            >
              CV
            </Button>
          </NavbarItem>
        </NavbarContent>
      </NextUINavbar>
    </motion.div>
  );
}
