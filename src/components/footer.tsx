"use client";

import { Github, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Time from "./time";

const socials = [
  {
    href: "https://x.com/anirudha_kashid",
    label: "Twitter / X",
    icon: FaXTwitter,
  },
  {
    href: "https://github.com/Anirudhakashid",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "mailto:kashidanirudha@gmail.com",
    label: "Email",
    icon: Mail,
  },
];

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {socials.map((social) => (
          <a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-secondary-foreground transition-colors duration-300 hover:text-foreground"
          >
            <social.icon className="size-4" />
          </a>
        ))}
      </div>
      <div className="text-sm">
        <div className="text-secondary-foreground">
          <Time />
        </div>
      </div>
    </footer>
  );
};
