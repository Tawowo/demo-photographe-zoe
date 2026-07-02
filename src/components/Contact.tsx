"use client";
import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 px-6 bg-[#2C2C2C] text-white">
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-[#C9A96E] mb-4">Contact</p>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light mb-4">Réservons votre séance</h2>
          <div className="w-12 h-px bg-[#C9A96E] mx-auto" />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-16">
          <Reveal>
            <p className="text-gray-400 leading-relaxed mb-8">Je serai ravie de discuter de votre projet et de créer des images qui vous ressemblent vraiment.</p>
            <div className="space-y-4 text-sm text-gray-400">
              <p>📍 Tours & alentours, Indre-et-Loire</p>
              <p>📧 zoethievinpro@icloud.com</p>
              <p>⭐ 6 avis 5 étoiles Google</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-[#C9A96E] text-5xl mb-4">✓</div>
                <p className="font-cormorant text-2xl">Message envoyé !</p>
                <p className="text-gray-400 text-sm mt-2">Je vous réponds dans les 24h.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <input required placeholder="Votre prénom" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A96E] transition-colors" />
                <input required type="email" placeholder="Votre email" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A96E] transition-colors" />
                <select className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-gray-400 focus:outline-none focus:border-[#C9A96E] transition-colors">
                  <option value="">Type de séance</option>
                  <option>Portrait Solo</option>
                  <option>Couple & Famille</option>
                  <option>Lifestyle & Créateurs</option>
                  <option>Événement</option>
                </select>
                <textarea required rows={4} placeholder="Votre message" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A96E] transition-colors resize-none" />
                <button type="submit" className="w-full bg-[#C9A96E] text-white py-3 text-sm tracking-widest uppercase hover:bg-[#b8935a] transition-colors">
                  Envoyer ma demande
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
