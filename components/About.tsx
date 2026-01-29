import React from "react";
import Image from "next/image"; // Pastikan pakai Next Image
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"; // Pastikan punya react-icons
import profile from '../public/me.jpeg'
const About = () => {
  return (
    // Container Utama dengan background gelap yang sama
    <div className="relative w-full py-20 bg-slate-950 text-white overflow-hidden" id="about">
      
      {/* Background Grid Pattern (Opsional, biar seragam sama Hero) */}
      <div className="absolute inset-0 h-full w-full opacity-50">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* --- KOLOM KIRI (TEKS) --- */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
            <div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Hello I&apos;am <span className="text-purple-500">Tria</span>
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold mt-2 text-slate-300">
                    Frontend Developer <br /> Based in <span className="text-white">Indonesia</span>
                </h2>
            </div>

            <p className="text-slate-400 leading-relaxed text-sm md:text-base max-w-lg mx-auto md:mx-0">
                I&apos;m Tria Ananda Fadillah, a Business Information Systems student at Politeknik Negeri Malang with a strong passion for software development, specifically in Web Development. Currently, I am focusing myself in modern web technologies and refining my technical skills to build efficient, user-centric solutions.
            </p>

            {/* Tombol Sosial Media */}
            <div className="flex gap-4 justify-center md:justify-start mt-2">
                <SocialButton icon={<FaLinkedin size={24} />} link="https://www.linkedin.com/in/tria-ananda-fadillah/" />
                <SocialButton icon={<FaGithub size={24} />} link="https://github.com/triaanandafh" />
                <SocialButton icon={<FaInstagram size={24} />} link="https://instagram.com" />
            </div>
        </div>

        {/* --- KOLOM KANAN (GAMBAR) --- */}
        <div className="flex-1 flex justify-center md:justify-end relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-slate-800 bg-slate-900">
                 <Image 
                    src={profile} 
                    alt="Profile Picture"
                    fill
                    className="object-cover object-center"
                 />
            </div>
        </div>

      </div>
    </div>
  );
};

// Komponen Kecil untuk Tombol Sosmed biar rapi
const SocialButton = ({ icon, link }: { icon: React.ReactNode; link: string }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 md:p-4 rounded-lg border border-slate-700 bg-slate-800 text-white hover:bg-purple-500 hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1"
    >
      {icon}
    </a>
  );
};

export default About;
