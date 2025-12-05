"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunMediumIcon } from "../components/ui/sun";
import { MoonIcon } from "../components/ui/moon";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className=" cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <SunMediumIcon size={25} /> : <MoonIcon size={25} />}
    </button>
  );
}
