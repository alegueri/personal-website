import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <Footer />
      </div>
    </>
  );
}
