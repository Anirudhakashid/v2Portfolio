"use client";

import { motion } from "framer-motion";
import { BackButton } from "@/components/back-btn";

const experiences = [
  {
    id: "1",
    title: "Sankalpsphere",
    designation: "Frontend Developer Intern",
    href: "https://www.linkedin.com/company/namastep/",
    date: "Sept 2025 - Nov 2025",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
} as const;

export default function Experience() {
  return (
    <div className="flex min-h-screen w-full justify-center px-4 py-40 md:py-52">
      <div className="flex w-full max-w-xs flex-col gap-8 md:max-w-lg">
        <div>
          <BackButton />
        </div>

        <motion.h1
          className="text-lg font-mono text-foreground"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          experiences
        </motion.h1>

        <section className="relative flex flex-col gap-4">
          <motion.div
            className="space-y-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {experiences.map((experience) => (
              <motion.a
                key={experience.id}
                href={experience.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex cursor-pointer flex-col gap-10 rounded-lg border border-secondary-foreground/20 bg-background p-4 transition-colors duration-200 hover:border-secondary-foreground/40 hover:bg-surface/50"
                variants={item}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xs md:text-base">{experience.title}</h2>
                    <span className="text-xs text-secondary-foreground md:text-sm">
                      {experience.date}
                    </span>
                  </div>
                  {experience.designation && (
                    <p className="text-xs text-secondary-foreground md:text-sm text-left">
                      {experience.designation}
                    </p>
                  )}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
