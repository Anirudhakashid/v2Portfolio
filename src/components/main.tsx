"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["engineer", "software developer", "full-stack", "shitposter"];

const textVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export const Main = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grow">
      <div className="flex items-center justify-between mb-2">
        <div className="flex flex-col">
          <h1 className="font-ppModwest text-2xl">Anirudha Kashid</h1>
          <h2 className="text-secondary-foreground mb-4 font-sm overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[index]}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.7 }}
                className="block"
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
          </h2>
        </div>
        {/* <a
          href="{LINK_TO_RESUME_PDF}"
          className="hidden md:flex items-center gap-1 text-base text-secondary-foreground"
          download="Anirudha_kashid_resume.pdf"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Download Resume"
        >
          resume <ExternalLink size={12} />
        </a> */}
      </div>

      <p className="mb-2">
        21 y/o CS undergrad exploring the full-stack space, pushing commits
        along the way.
      </p>

      <p>
        in my downtime, i drift between tech podcasts and the occasional sci-fi
        movies.
      </p>
    </section>
  );
};
