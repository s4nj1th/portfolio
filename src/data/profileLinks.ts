import { SiGithub, SiLinkedin, SiBluesky, SiInstagram, SiLeetcode } from "react-icons/si";
import { FaTwitter } from "react-icons/fa6";

const profileLinks = [
  {
    href: "https://github.com/s4nj1th",
    label: "GitHub",
    icon: SiGithub,
    hoverColor: "#7950f2",
  },
  {
    href: "https://www.linkedin.com/in/sanjith-m-79980a343/",
    label: "LinkedIn",
    icon: SiLinkedin,
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
    hoverColor: "#1da1f2",
  },
  {
    href: "https://bsky.app/profile/s4nj1th.bsky.social",
    label: "Bluesky",
    icon: SiBluesky,
    hoverColor: "#1185fe",
  },
  {
    href: "https://www.instagram.com/s4nj1th/",
    label: "Instagram",
    icon: SiInstagram,
    hoverColor: "#dd2a7b",
  },
];

export default profileLinks;
