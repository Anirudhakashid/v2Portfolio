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

export default function BlogPage() {
  return (
    <div className="flex min-h-screen w-full justify-center px-4 py-40 md:py-52">
      <div className="flex w-full max-w-xs flex-col gap-8 md:max-w-lg">
        <div>
          <BackButton />
        </div>
        <motion.div className="relative flex flex-col gap-4">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="relative z-10 flex cursor-pointer flex-col gap-1 rounded-lg border border-secondary-foreground/20 bg-[#111111] p-4 text-foreground hover:bg-[#1a1a1a]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={blog.link} target="_blank" rel="noreferrer">
                <h1 className="relative z-10 text-sm">
                  {blog.title || (
                    <>
                      Coming soon
                      <AnimatedDots />
                    </>
                  )}
                </h1>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
