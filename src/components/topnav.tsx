"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function TopNav() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`w-screen fixed top-0 transition-colors duration-500 backdrop-filter z-50
        ${
          isScrolled
            ? "bg-black/75  backdrop-blur-sm "
            : "bg-gradient-to-b from-black/70"
        }`}
    >
      <div className=" max-w-7xl w-full mx-auto flex justify-between items-center px-10 md:px-20 py-4 text-white">
        <a
          className="font-kenyan text-5xl cursor-pointer"
          onClick={() => {
            router.push("./");
          }}
        >
          KENYAN
        </a>
        <li className="flex gap-3 text-md font-bold">
          <ul className="p-2 cursor-pointer" onClick={() => {scrollToSection("classesSection")}}>
            AULAS
          </ul>
          <ul className="p-2 cursor-pointer" onClick={() => scrollToSection("experimentalSection")}>
            EXPERIMENTAL
          </ul>
          <Link href={"/planos"} className="p-2">
            PLANOS
          </Link>
        </li>
      </div>
    </div>
  );
}
