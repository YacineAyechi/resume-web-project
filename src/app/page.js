"use client";

import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div id="home">
      <Toaster />
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <div className="h-20">
        <p>Copyright © 2024. All rights reserved.</p>
      </div>
    </div>
  );
}
