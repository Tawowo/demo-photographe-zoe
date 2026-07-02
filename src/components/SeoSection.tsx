import Reveal from "./Reveal";

export default function SeoSection() {
  const articles = [
    { title: "Comment choisir son photographe de portrait à Tours", date: "Juin 2024", excerpt: "Les critères essentiels pour trouver le photographe qui correspond à votre personnalité et vos attentes..." },
    { title: "Shooting en lumière naturelle : pourquoi c'est magique", date: "Mai 2024", excerpt: "La lumière naturelle révèle les émotions authentiques et donne une chaleur incomparable à vos photos..." },
    { title: "Préparer sa séance photo : mes conseils pour être à l'aise", date: "Avril 2024", excerpt: "Pas besoin d'être un modèle professionnel. Voici comment aborder votre séance avec sérénité..." },
  ];

  return (
    <section className="py-24 px-6 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-[#C9A96E] mb-4">Blog & conseils</p>
          <h2 className="font-cormorant text-5xl md:text-6xl font-light mb-6">Votre visibilité sur Google</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Un site bien référencé sur Google, c'est des clients qui vous trouvent naturellement. Chaque article publié est une nouvelle porte d'entrée vers votre site.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1}>
              <div className="border-t-2 border-[#C9A96E] bg-white p-6 h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <p className="text-xs text-[#C9A96E] tracking-widest uppercase mb-3">{a.date}</p>
                <h3 className="font-cormorant text-xl font-light mb-3 leading-snug">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{a.excerpt}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
