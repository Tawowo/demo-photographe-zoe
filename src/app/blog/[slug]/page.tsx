import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Zoé Thievin Photographe`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="bg-[#FAFAF8]">
      <div className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-5">
          <p className="text-xs tracking-widest uppercase text-white/70 mb-4">{post.date}</p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light max-w-3xl">{post.title}</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-5 md:px-6 py-16">
        <Link
          href="/blog"
          className="text-xs tracking-widest uppercase text-[#C9A96E] hover:text-[#b8935a] transition-colors"
        >
          ← Retour au blog
        </Link>

        <div className="mt-10 space-y-6">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {related.length > 0 && (
        <div className="max-w-6xl mx-auto px-5 md:px-6 pb-24">
          <h2 className="font-cormorant text-3xl font-light text-center mb-10">Vous aimerez aussi</h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {related.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block bg-white border-t-2 border-[#C9A96E]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-[#C9A96E] tracking-widest uppercase mb-2">{p.date}</p>
                  <h3 className="font-cormorant text-lg font-light leading-snug">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
