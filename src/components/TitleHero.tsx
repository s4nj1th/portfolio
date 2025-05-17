import Image from "next/image";
import profileImg from "../../public/profile.jpg";
import TitleText from "./TitleText";
import SocialLinks from "./SocialLinks";

export default function TitleHero() {
  return (
    <div className="relative h-[60vh] md:h-[45vh] w-[80vw] max-w-[1200px] mx-auto mt-[5vh] rounded-[12px] shadow-4xl border border-[#222] bg-[#2228] p-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-x-16">
      
      <div className="text-white text-center md:text-right md:flex-grow animate-fade-in-delay max-w-[900px]">
        <TitleText />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 shadow-2xl animate-fade-in-delay">
        <Image
          src={profileImg}
          alt="Profile"
          width={250}
          height={250}
          className="rounded-xl object-cover"
        />
        <SocialLinks />
      </div>
    </div>
  );
}
