import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-white selection:bg-white/20">
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Writing />
      <Contact />
    </main>
  );
}
