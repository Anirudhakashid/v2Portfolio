"use client";

import { motion } from "framer-motion";
import { BackButton } from "@/components/back-btn";
import Link from "next/link";

const blogs = [
  {
    title: "bitSnip — Simplify, Share & Track URLs in Seconds",
    link: "https://bitsnip-blog.hashnode.dev/",
  },
];

const AnimatedDots = () => {
  return (
    <span className="inline-flex">
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
      >
        .
      </motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
      >
        .
      </motion.span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
      >
        .
      </motion.span>
    </span>
  );
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function BlogPage() {
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
          blogs
        </motion.h1>

        <motion.div
          className="relative flex flex-col gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="relative z-10 flex cursor-pointer flex-col gap-1 rounded-lg border border-secondary-foreground/20 bg-background p-4 text-foreground transition-colors duration-200 hover:border-secondary-foreground/40 hover:bg-surface/50"
              variants={item}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={blog.link} target="_blank" rel="noopener noreferrer">
                <h2 className="relative z-10 text-sm">
                  {blog.title || (
                    <>
                      Coming soon
                      <AnimatedDots />
                    </>
                  )}
                </h2>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
