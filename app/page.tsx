import Image from "next/image";
import Hero from "../components/Hero";
import { main } from "motion/react-client";
// import { GridBackgrounds } from "../components/GridBackgrounds";
import { FloatingNav } from "../components/ui/FloatingNav";
import Grid from "../components/Grid";
import {BentoGrid} from "../components/ui/BentoGrid";
import RecentProjects from "../components/RecentProjects";
import About from "../components/About";
import Skills from "../components/Skills";
import { navItems } from "@/data";
// import { Contact } from "lucide-react";
import Contact from "../components/Contact";

export default function Home() {
  return (
   <main className="">
    <FloatingNav navItems={navItems} />
    <Hero />
    <About />
    <Skills />
    <RecentProjects />
    <Contact />
   </main>
  );
}
