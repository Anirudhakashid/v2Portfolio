"use client";

import { motion } from "framer-motion";
import { BackButton } from "@/components/back-btn";

const projects = [
  {
    id: "internTrack",
    title: "internTrack",
    description:
      "a multi role internship management system with automated workflows.",
    href: "https://interntrack.devesh.cv/",
  },
  {
    id: "chattio",
    title: "chattio",
    description:
      "a real time chat app with instant messaging using webSockets.",
    href: "https://chattio.anirudhakashid.tech/",
  },
  {
    id: "streamNest",
    title: "streamNest",
    description: "production ready backend for a YouTube like platform.",
    href: "https://github.com/Anirudhakashid/video-Streaming-platform-backend",
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
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function Projects() {
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
          projects
        </motion.h1>

        <motion.div
          className="relative flex flex-col gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.href}
              target="_blank"
              className="relative z-10 flex cursor-pointer flex-col gap-1 rounded-lg border border-secondary-foreground/20 bg-background p-4 transition-colors duration-200 hover:border-secondary-foreground/40 hover:bg-surface/50"
              variants={item}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              rel="noopener noreferrer"
            >
              <h2 className="relative z-10 text-sm font-medium md:text-base">
                {project.title}
              </h2>
              <p className="text-sm text-secondary-foreground relative z-10">
                {project.description}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
