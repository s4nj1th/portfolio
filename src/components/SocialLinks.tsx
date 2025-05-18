"use client";

import profileLinks from "@/data/profileLinks";

export default function SocialLinks() {
  return (
    <div className="flex flex-row md:flex-col gap-4">
      {profileLinks.map(({ href, label, icon: Icon, hoverColor }) => (
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
