import TitleWave from "./TitleWave";
import Image from "next/image";
import profileImg from "../../public/profile.jpg"; // <- use your actual image path
import TitleText from "./TitleText";

export default function TitleHero() {
  return (
    <div className="relative h-[45vh] w-[80vw] max-w-[1200px] mx-auto mt-[5vh] rounded-[12px] overflow-hidden border border-[#222]">
      <TitleWave />

      <div className="absolute inset-0 z-5 flex max-w-[1000px] items-center justify-between px-10 my-20">
        <div className="flex-grow text-right text-white animate-fade-in-delay">
          {/* <h1 className="text-6xl font-[700] drop-shadow-lg">
            CS Student
          </h1> */}
          <TitleText />
          <p className="mt-4 text-lg drop-shadow-lg">
            I make projects that make sense.
          </p>
        </div>

        <div className="flex-shrink-0 w-[200px] h-[200px] rounded-xl overflow-hidden shadow-2xl animate-fade-in-delay ml-8">
          <Image
            src={profileImg}
            alt="Profile"
            width={200}
            height={200}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
