import Image from "next/image";
import TitleText from "./TitleText";
import SocialLinks from "./SocialLinks";

export default function TitleHero() {
  return (
    <div className="relative w-full mt-[5vh] rounded-[12px] shadow-4xl border border-[#222] bg-[#1118] p-10">
      <div className="w-[80%] min-w-[300px] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-x-16 mx-auto align-center">
        <div className="text-white text-center md:text-right md:flex-grow max-w-[900px]">
          <TitleText />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 shadow-2xl">
          <Image
            src="/assets/profile.webp"
            alt="Profile"
            width={250}
            height={250}
            className="rounded-xl object-contain"
          />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
