import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import Reveal from "./Reveal";

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 px-6 bg-[#F5F0E8]">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="font-cormorant text-5xl md:text-6xl font-light mb-4">Le Blog</h2>
          <p className="text-gray-500 text-sm tracking-wide">Conseils, inspirations et coulisses</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-white border-t-2 border-[#C9A96E] hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs text-[#C9A96E] tracking-widest uppercase mb-3">{post.date}</p>
                  <h3 className="font-cormorant text-xl font-light mb-3 leading-snug">{post.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center mt-12" delay={0.3}>
          <Link
            href="/blog"
            className="inline-block border border-[#C9A96E] text-[#C9A96E] px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#C9A96E] hover:text-white transition-colors"
          >
            Voir tous les articles
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
