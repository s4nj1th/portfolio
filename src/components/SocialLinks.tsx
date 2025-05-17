"use client";

import { FaGithub, FaTwitter, FaLinkedin, FaBluesky, FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const links = [
  {
    href: "https://github.com/s4nj1th",
    label: "GitHub",
    icon: FaGithub,
    hoverColor: "#7950f2",
  },
  {
    href: "https://www.linkedin.com/in/sanjith-m-79980a343/",
    label: "LinkedIn",
    icon: FaLinkedin,
    hoverColor: "#136bc5",
  },
  {
    href: "https://leetcode.com/u/s4nj1th/",
    label: "LeetCode",
    icon: SiLeetcode,
    hoverColor: "#ffa30e",
  },
  {
    href: "https://twitter.com/s4nj1th",
    label: "Twitter",
    icon: FaTwitter,
    hoverColor: "#249ef1",
  },
  {
    href: "https://bsky.app/profile/s4nj1th.bsky.social",
    label: "Bluesky",
    icon: FaBluesky,
    hoverColor: "#0683f9",
  },
  {
    href: "https://www.instagram.com/s4nj1th/",
    label: "Instagram",
    icon: FaInstagram,
    hoverColor: "#dd2a7b",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-row md:flex-col gap-4">
      {links.map(({ href, label, icon: Icon, hoverColor }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#fffa] transition-colors duration-300"
          style={{ "--hover-color": hoverColor } as React.CSSProperties}
        >
          <Icon size={25} />
          <style jsx>{`
            a:hover {
              color: var(--hover-color);
            }
          `}</style>
        </a>
      ))}
    </div>
  );
}
