"use client";

import { motion } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { navLinks } from "../const/ConstantLists";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-default-200 shadow-sm"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Edwin Garcia
          </span>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-default-600 hover:text-primary-500 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Theme + Mobile menu toggle */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          {mounted && (
            <span
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-xl cursor-pointer transition-transform hover:scale-110"
              title={`Cambiar a ${theme === "dark" ? "modo claro" : "modo oscuro"}`}
            >
              {theme === "dark" ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-blue-500" />
              )}
            </span>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <motion.nav
          className="md:hidden bg-background border-t border-default-200 px-4 py-4 flex flex-col gap-4"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-default-600 hover:text-primary-500 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
