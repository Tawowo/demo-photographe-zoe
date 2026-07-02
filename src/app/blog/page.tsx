import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Zoé Thievin Photographe",
  description: "Conseils, inspirations et coulisses de mes séances photo à Tours.",
};

export default function BlogPage() {
  return (
    <main className="pt-[60px] md:pt-[70px] bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-5 md:px-6 py-16 md:py-24">
        <nav className="text-xs tracking-widest uppercase text-gray-500 mb-10">
          <Link href="/" className="hover:text-[#C9A96E] transition-colors">
            Accueil
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#C9A96E]">Blog</span>
        </nav>

        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-[#C9A96E] mb-4">Le Blog</p>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light">Conseils & coulisses</h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article key={post.slug} className="group flex flex-col bg-white border-t-2 border-[#C9A96E]">
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
                <h2 className="font-cormorant text-2xl font-light mb-3 leading-snug">{post.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="self-start text-xs tracking-widest uppercase text-[#C9A96E] border-b border-[#C9A96E] pb-1 hover:text-[#b8935a] hover:border-[#b8935a] transition-colors"
                >
                  Lire l&apos;article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
