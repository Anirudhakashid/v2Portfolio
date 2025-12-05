"use client";

import { motion } from "framer-motion";
import { BackButton } from "@/components/back-btn";

const projects = [
  {
    id: "streamNest",
    title: "streamNest",
    description: "production ready backend for a YouTube like platform.",
    href: "https://github.com/Anirudhakashid/video-Streaming-platform-backend",
  },
  {
    id: "bitSnip",
    title: "bitSnip",
    description:
      "a URL shortener tool with realtime click analytics and safety.",
    href: "https://bitsnip.vercel.app/",
  },
  {
    id: "blog-App",
    title: "blog-App",
    description: "a simple blogging application",
    href: "https://bloga-app.netlify.app/",
  },
];

export default function Projects() {
  return (
    <div className="flex min-h-screen w-full justify-center px-4 py-40 md:py-52">
      <div className="flex w-full max-w-xs flex-col gap-8 md:max-w-lg">
        <div>
          <BackButton />
        </div>
        <motion.div className="relative flex flex-col gap-4">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.href}
              target="_blank"
              className="relative z-10 flex cursor-pointer flex-col gap-1 rounded-lg border border-secondary-foreground/20 bg-background p-4 hover:bg-background/10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              rel="noreferrer"
            >
              <h1 className="relative z-10 text-sm font-medium md:text-base">
                {project.title}
              </h1>
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
