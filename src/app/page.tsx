import Navbar from "@/components/Navbar";
import StarBackground from "@/components/StarBackground";
import TitleHero from "@/components/TitleHero";
import Introduction from "@/components/Introduction";
import ProjectsGrid from "@/components/ProjectsGrid";

export default function Home() {
  return (
    <>
    <Navbar />
    <StarBackground />
    <main className="mt-10 w-[80vw] max-w-[1200px] mx-auto flex flex-col gap-4">
      <section id="home" className="flex flex-col gap-4 animate-fade-in-delay">
        <TitleHero />
        <Introduction />
      </section>
      <section id="projects" className="animate-fade-in-delay">
        <ProjectsGrid />
      </section>
      <section id="experiences"></section>
      <section id="skills"></section>
      <section id="contact"></section>
    </main>
    </>
  );
}
