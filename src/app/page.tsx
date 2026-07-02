import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import SeoSection from "@/components/SeoSection";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <SeoSection />
      <BlogSection />
      <Contact />
      <Footer />
    </main>
  );
}
