import Navbar from "@/components/Navbar";
import StarBackground from "@/components/StarBackground";
import UfoFlyer from "@/components/UfoFlyer";
import TitleHero from "@/components/TitleHero";
import Introduction from "@/components/Introduction";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <StarBackground />
    <UfoFlyer />
    <main className="my-10 w-[80vw] max-w-[1200px] mx-auto flex flex-col gap-4">
      <section id="home" className="flex flex-col gap-4 animate-fade-in-delay">
        <TitleHero />
        <Introduction />
      </section>
      <section id="projects" className="animate-fade-in-delay">
        <ProjectsGrid />
      </section>
      <section id="skills" className="animate-fade-in-delay">
        <SkillsSection />
      </section>
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  );
}
