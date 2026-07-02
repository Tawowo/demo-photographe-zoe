import Reveal from "./Reveal";
import Image from "next/image";
import { aboutPhoto } from "@/lib/data";

export default function About() {
  return (
    <section className="py-24 px-6 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src={aboutPhoto} alt="Zoé Thievin" fill className="object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-sm tracking-[0.3em] uppercase text-[#C9A96E] mb-4">Mon univers</p>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-6">
            Capturer l'authenticité
          </h2>
          <div className="w-12 h-px bg-[#C9A96E] mb-8" />
          <p className="text-gray-600 leading-relaxed mb-6">
            Je crois que les plus belles photos naissent quand on oublie qu'on est photographié. Mon rôle ? Créer cet espace de confiance où vous pouvez être pleinement vous-même.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Chaque séance est une rencontre, chaque photo une émotion à conserver. Basée à Tours, je capture vos moments avec douceur, humour et lumière naturelle.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
            {[["6", "Avis 5⭐"], ["Tours", "& région"], ["2024", "Disponible"]].map(([val, label]) => (
              <div key={label}>
                <p className="font-cormorant text-3xl font-light text-[#C9A96E]">{val}</p>
                <p className="text-xs text-gray-500 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
