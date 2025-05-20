import Image from "next/image";
import TitleText from "./TitleText";
import SocialLinks from "./SocialLinks";

export default function TitleHero() {
  return (
    <div className="relative w-full mt-[5vh] rounded-[12px] shadow-4xl border border-[#222] bg-[#1118] p-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mx-auto w-full max-w-[1200px]">
        <div className="w-full md:w-[60%] text-white text-center md:text-right">
          <TitleText />
        </div>

        <div className="w-full md:w-[40%] flex flex-col md:flex-row items-center gap-4">
          <div className="relative w-[250px] h-[250px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/profile.webp"
              alt="Profile"
              fill
              className="object-cover rounded-xl"
              sizes="(min-width: 768px) 250px"
            />
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
