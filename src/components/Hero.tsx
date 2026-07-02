"use client";
import { motion } from "framer-motion";
import { heroPhoto } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src={heroPhoto}
        alt="Zoé Thievin photographe"
        fill
        className="object-cover object-center scale-105"
        priority
        quality={85}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.3em] uppercase mb-6 text-white/70 font-inter"
        >
          Photographe · Tours & alentours
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-cormorant text-7xl md:text-9xl font-light leading-none mb-4"
        >
          Zoé Thievin
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-24 h-px bg-[#C9A96E] mx-auto mb-6 origin-left"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg md:text-xl font-light text-white/80 mb-10"
        >
          Photographe de vos instants précieux
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.03 }}
          className="inline-block bg-[#C9A96E] text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#b8935a] transition-colors"
        >
          Réserver une séance
        </motion.a>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Défiler</span>
        <motion.div
          animate={{ scaleY: [1, 0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-[#C9A96E] origin-top"
        />
      </motion.div>
    </section>
  );
}
