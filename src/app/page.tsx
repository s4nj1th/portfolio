import StarBackground from "@/components/StarBackground";
import TitleHero from "@/components/TitleHero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <StarBackground />
    <main className="mt-20">
      <section id="home">
        <TitleHero />
      </section>
      <section id="projects"></section>
      <section id="experiences"></section>
      <section id="skills"></section>
      <section id="contact"></section>
    </main>
    </>
  );
}
