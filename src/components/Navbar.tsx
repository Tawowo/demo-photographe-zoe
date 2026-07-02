"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Accueil", href: "/" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Séances", href: "/#seances" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full h-[60px] md:h-[70px] transition-all duration-300 ${
        scrolled ? "bg-[#FAFAF8] shadow-md" : "bg-[#FAFAF8]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto h-full px-5 md:px-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-cormorant text-2xl md:text-3xl font-medium tracking-wide text-[#2C2C2C]"
        >
          Zoé Thievin
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.label}
              href={l.href}
              className="text-xs tracking-widest uppercase text-[#2C2C2C] hover:text-[#C9A96E] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          className="md:hidden relative flex flex-col justify-center items-center gap-1.5 w-8 h-8 shrink-0"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-[#2C2C2C]"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-px bg-[#2C2C2C]"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-[#2C2C2C]"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#FAFAF8] shadow-md overflow-hidden"
          >
            <div className="flex flex-col px-5 py-4 gap-1">
              {links.map(l => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-widest uppercase text-[#2C2C2C] hover:text-[#C9A96E] transition-colors py-3 border-b border-black/5 last:border-none"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
