import Reveal from "./Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#F5F0E8]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-[#C9A96E] mb-4">Ils témoignent</p>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light">Ce qu'ils disent</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="bg-white p-8 h-full flex flex-col">
                <div className="text-[#C9A96E] text-4xl font-cormorant mb-4">"</div>
                <p className="text-gray-600 leading-relaxed flex-1 mb-6 text-sm">{t.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-8 h-px bg-[#C9A96E]" />
                  <p className="text-sm font-medium text-gray-800">{t.name}</p>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-[#C9A96E] text-xs">★</span>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
