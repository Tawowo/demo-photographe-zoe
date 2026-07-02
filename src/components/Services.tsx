import Reveal from "./Reveal";
import { services } from "@/lib/data";

const icons: Record<string, string> = {
  portrait: "◉",
  family: "◎",
  lifestyle: "◈",
  event: "◇",
};

export default function Services() {
  return (
    <section id="seances" className="py-24 px-6 bg-[#F5F0E8]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-[#C9A96E] mb-4">Mes séances</p>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light">Ce que je propose</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="bg-white p-8 group hover:-translate-y-1 transition-transform duration-300">
                <span className="text-3xl text-[#C9A96E] mb-6 block">{icons[s.icon]}</span>
                <h3 className="font-cormorant text-2xl font-light mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.description}</p>
                <p className="text-[#C9A96E] font-medium text-sm border-t border-gray-100 pt-4">{s.price}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
