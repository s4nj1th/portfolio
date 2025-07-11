import { CgFileDocument } from "react-icons/cg";

export default function Introduction() {
  return (
    <div className="bg-[#1118] border-[#222] border rounded-[12px] shadow-lg p-10 flex flex-col gap-4">
      <h1 className="text-5xl font-black md:text-left text-center">About Me</h1>
      <p className="text-md text-justify text-[#ccc]">
        &#160;&#160;&#160;&#160;I&#39;m a Computer Science student who loves
        building things that actually make sense. Whether it&#39;s a tool, a
        website, or a random idea at 2 AM, I enjoy bringing ideas to life
        through code. I focus on practical, purposeful projects — the kind that
        solve real problems or just make something a little better (and cooler).
      </p>
      <div className="text-right">
        <div className="bg-white text-black px-2 py-2 font-black rounded-xl inline-block">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <CgFileDocument size={20} />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
