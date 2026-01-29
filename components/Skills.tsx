import React from "react";
// Import icon dari react-icons
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiWordpress, SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiJavascript } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc"; // Untuk DevOps icon

const Skills = () => {
  return (
    <section className="relative w-full py-20 bg-slate-950 text-white overflow-hidden" id="skills">
      
      {/* Background Grid Pattern (Biar konsisten sama section lain) */}
      <div className="absolute inset-0 h-full w-full opacity-50 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        
        {/* JUDUL SECTION */}
        <h1 className="text-4xl font-bold text-center mb-16">
            My <span className="text-purple-500">Skills</span>
        </h1>

        {/* GRID KARTU SKILL */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {skillsData.map((skill) => (
                <div 
                    key={skill.name}
                    className="group relative flex flex-col items-center justify-center p-6 h-40 md:h-48 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500 hover:bg-slate-800 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-2"
                >
                    {/* Icon */}
                    <div className="text-4xl md:text-5xl text-slate-300 group-hover:text-purple-400 transition-colors duration-300 mb-4">
                        {skill.icon}
                    </div>
                    
                    {/* Nama Skill */}
                    <h3 className="font-semibold text-lg md:text-xl text-slate-200 group-hover:text-white">
                        {skill.name}
                    </h3>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

// DATA SKILL (Bisa kamu tambah/kurang di sini)
const skillsData = [
    {
        name: "Git & Github",
        icon: <FaGithub />,
    },
    {
        name: "TypeScript",
        icon: <SiTypescript />,
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs />,
    },
    {
        name: "React.js",
        icon: <FaReact />,
    },
    {
        name: "TailwindCSS",
        icon: <SiTailwindcss />,
    },
    {
        name: "Javascript",
        icon: <SiJavascript />,
    },
    {
        name: "Wordpress",
        icon: <SiWordpress />,
    },
];

export default Skills;