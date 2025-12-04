"use client";
import { motion } from "framer-motion";
import { BackButton } from "@/components/back-btn";

const experiences = [
  {
    id: "1",
    title: "Sankalpsphere",
    href: "https://www.linkedin.com/company/namastep/",
    date: "Sept 2025 - Nov 2025",
  },
];

export default function Experience() {
  return (
    <div className="flex min-h-screen w-full justify-center px-4 py-40 md:py-52">
      <div className="flex w-full max-w-xs flex-col gap-8 md:max-w-lg">
        <div>
          <BackButton />
        </div>
        <section className="relative flex flex-col gap-4">
          <div className="space-y-4">
            {experiences.map((experience, index) => (
              <motion.a
                key={experience.id}
                href={experience.href}
                target="_blank"
                rel="noreferrer"
                className="relative z-10 flex cursor-pointer flex-col gap-10 rounded-lg border border-secondary-foreground/20 bg-[#111111] p-4 hover:bg-[#1a1a1a]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.3,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs md:text-base">
                    {experience.date}
                  </span>
                  <h3 className="text-xs md:text-base">
                    {experience.id === "3" ? (
                      <>
                        Frontend Intern at{" "}
                        <span className="underline decoration-dashed underline-offset-[5px]">
                          MythyaVerse
                        </span>
                      </>
                    ) : experience.id === "2" ? (
                      <>
                        Member at{" "}
                        <span className="underline decoration-dashed underline-offset-[5px]">
                          Project Athena
                        </span>
                      </>
                    ) : (
                      experience.title
                    )}
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
