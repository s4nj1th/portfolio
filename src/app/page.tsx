import Navbar from "@/components/Navbar";
import StarBackground from "@/components/StarBackground";
import UfoFlyer from "@/components/UfoFlyer";
import TitleHero from "@/components/TitleHero";
import Introduction from "@/components/Introduction";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

const sections = [
  { id: "home", components: [<TitleHero key="title" />, <Introduction key="intro" />] },
  { id: "projects", components: [<ProjectsGrid key="projects" />] },
  { id: "skills", components: [<SkillsSection key="skills" />] },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <StarBackground />
      <UfoFlyer />
      <main className="my-10 w-[80vw] max-w-5xl mx-auto flex flex-col gap-4">
        {sections.map(({ id, components }) => (
          <section
            key={id}
            id={id}
            className="scroll-mt-[80px] flex flex-col gap-4"
          >
            {components}
          </section>
        ))}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
