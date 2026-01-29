"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number;
    title: string;
    img: string;
    iconLists: string[];
    des: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 py-10 gap-4 lg:gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            {/* CONTAINER UTAMA: Mengatur Layout Kiri (Gambar) & Kanan (Teks) */}
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start h-full">
              
              {/* --- BAGIAN KIRI: GAMBAR --- */}
              <div className="relative w-full md:w-2/5 h-48 md:h-full min-h-[200px] overflow-hidden rounded-xl flex-shrink-0">
                <div
                  className="relative w-full h-full overflow-hidden rounded-xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" className="object-cover w-full h-full opacity-50" />
                </div>
                
                {/* PERBAIKAN 1: Hapus 'rotate-3' supaya lurus */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="z-10 absolute bottom-0 right-0 w-[90%] h-[90%] object-contain"
                />
              </div>

              {/* --- BAGIAN KANAN: TEKS --- */}
              {/* PERBAIKAN 2: Bagian ini sekarang ada DI DALAM container flex, jadi dia akan muncul di sebelah kanan */}
              <div className="flex flex-col justify-between w-full md:w-3/5 h-full py-6">
                <div>
                  <h1 className="text-white font-bold text-xl md:text-xl line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className=" text-sm md:text-base line-clamp-3 text-[#BEC1DD] mt-4"
                  >
                    {item.des}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-8">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black w-10 h-10 md:w-12 md:h-12 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex text-sm md:text-sm text-purple whitespace-nowrap text-gray-50 hover:text-purple-400 transition-colors">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </div>
              
            </div> {/* <-- Tutup Container Flex di sini (Sebelumnya salah tutup di atas) */}
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2 md:p-4">{children}</div>
      </div>
    </div>
  );
};