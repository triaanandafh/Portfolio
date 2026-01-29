import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { IoMdDownload } from "react-icons/io";

const Contact = () => {
  return (
    <section className="relative w-full py-20 bg-slate-950 text-white overflow-hidden" id="contact">
      

      {/* Background Grid (Opsional, biar senada sama section lain) */}
      <div className="absolute inset-0 h-full w-full opacity-20 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5">
        
        {/* JUDUL */}
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-center mb-16">
            Get <span className="text-purple-500">In Touch</span>
        </h1>
            <p className="text-slate-300 md:text-lg max-w-2xl mx-auto leading-relaxed">
                Feel free to reach me out with any inquiries or just to say hello! 
                <br />
                I appreciate your interest and look forward to connecting with you.
            </p>
        </div>

        {/* FORM */}
        {/* GANTI 'ACTION' DI BAWAH INI DENGAN URL FORMSPREE KAMU */}
        <form 
            action="https://formspree.io/f/GANTI_DENGAN_ID_KAMU" 
            method="POST"
            className="flex flex-col gap-6 max-w-2xl mx-auto"
        >
            
            {/* Input Nama */}
            <input 
                type="text" 
                name="name" 
                placeholder="Your full name" 
                required
                className="w-full p-4 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-teal-500/50 transition-all"
            />

            {/* Input Email */}
            <input 
                type="email" 
                name="email" 
                placeholder="Your e-mail" 
                required
                className="w-full p-4 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-teal-500/50 transition-all"
            />

            {/* Textarea Pesan */}
            <textarea 
                name="message" 
                rows={5} 
                placeholder="Your message" 
                required
                className="w-full p-4 rounded-lg bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-teal-500/50 transition-all resize-none"
            ></textarea>

            {/* Tombol Submit */}
            <div className="flex justify-center mt-4">
                <MagicButton
                    title="Submit"
                    icon={<FaPaperPlane />}
                    position="right"
                />
            </div>

        </form>

      </div>
    </section>
  );
};

export default Contact;