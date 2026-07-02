"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { galleryPhotos, type Category } from "@/lib/data";
import Reveal from "./Reveal";

const filters: ("Tous" | Category)[] = ["Tous", "Portrait", "Couple & Famille", "Lifestyle"];

export default function Gallery() {
  const [active, setActive] = useState<"Tous" | Category>("Tous");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "Tous" ? galleryPhotos : galleryPhotos.filter(p => p.category === active);

  return (
    <section id="portfolio" className="py-24 px-6 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-[#C9A96E] mb-4">Portfolio</p>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light mb-10">Mes réalisations</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-xs tracking-widest uppercase px-4 py-2 border transition-colors ${
                  active === f
                    ? "bg-[#C9A96E] text-white border-[#C9A96E]"
                    : "border-gray-300 text-gray-500 hover:border-[#C9A96E] hover:text-[#C9A96E]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>
        <motion.div layout className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map(photo => (
              <motion.div
                key={photo.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`relative overflow-hidden cursor-pointer group ${photo.large ? "aspect-[3/4]" : "aspect-square"} break-inside-avoid`}
                onClick={() => setLightbox(photo.src)}
              >
                <Image src={photo.src} alt={photo.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-end p-4">
                  <span className="text-white text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">{photo.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-3xl aspect-[3/4] md:aspect-video"
              onClick={e => e.stopPropagation()}
            >
              <Image src={lightbox} alt="Photo agrandie" fill className="object-contain" />
            </motion.div>
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-white text-3xl hover:text-[#C9A96E]">✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
