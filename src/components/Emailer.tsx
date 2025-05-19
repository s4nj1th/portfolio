"use client";

import { FaEnvelope } from "react-icons/fa6";

const Emailer = () => {
  const email = "sanjith.develops@gmail.com";

  return (
    <section className="bg-[#1118] border-[#222] border rounded-[12px] shadow-lg p-10 flex flex-col gap-4">
      <div className="flex flex-row justify-center gap-4">
        <h1 className="text-5xl text-center font-black">Contact</h1>
        <a
          href={`mailto:${email}`}
          className="bg-[#111] hover:bg-[#222] border-[#444] border font-semibold px-4 py-2 rounded-[6px] shadow-lg transition-all"
        >
          <FaEnvelope size={25} />
        </a>
      </div>
      <p className="text-md text-[#ccc] text-center">
        I'm always open to new opportunities, collaborations, or just a good
        chat. Feel free to drop me an email anytime.
      </p>
    </section>
  );
};

export default Emailer;
