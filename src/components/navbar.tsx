"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "blogs", href: "/blogs" },
  { label: "projects", href: "/projects" },
  { label: "experiences", href: "/experiences" },
];

export const Navbar = () => {
  return (
    <nav className="flex flex-col gap-2" aria-label="Main navigation">
      {navItems.map((item, i) => (
        <motion.div
          key={item.href}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: i * 0.08 }}
        >
          <Link
            href={item.href}
            className="group inline-flex items-center gap-1.5 text-foreground underline decoration-dashed underline-offset-[5px] decoration-secondary-foreground/50 transition-all duration-300  "
          >
            <span>{item.label}</span>
          </Link>
        </motion.div>
      ))}
    </nav>
  );
};
