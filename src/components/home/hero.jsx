import { useEffect, useRef } from "react";
import gsap from "gsap";
import TextAn from "../ui/textAnimation";

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    // disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;

      const x = (e.clientX / innerWidth - 0.5) * 40; // adjust strength
      const y = (e.clientY / innerHeight - 0.5) * 40;

      gsap.to(bgRef.current, {
        x,
        y,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative h-screen flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary w-full">
        <img
          ref={bgRef}
          src="/assets/3.webp"
          className="w-full h-full object-contain mix-blend-luminosity opacity-90 contrast-125 scale-110"
          alt="background"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent" />
      </div>

      {/* Title */}
      <div className="z-10 px-6 md:px-12 pb-12 absolute top-2/3 -translate-y-1/2 w-full">
        <TextAn>
          <h1
            style={{ fontFamily: "Poppins" }}
            className="text-[10vw] uppercase text-white overlap-text select-none"
          >
            <p>Ashish</p>
            <p>Kapoor</p>
          </h1>
        </TextAn>
      </div>

      {/* Info Card */}
      <div className="z-10 flex lg:flex-row justify-end items-end flex-col-reverse gap-8 text-white px-6 pb-6">
        <div className="lg:block text-right max-w-sm">
          <p className="text-[10px] uppercase tracking-[0.2em] text-center sm:text-end mb-4 opacity-70">
            Creative Full-Stack Developer
          </p>
          <p className="text-xs opacity-90 font-light uppercase text-center sm:text-end">
            Crafting modern web applications with Next.js, React, and Express
            1+ year of hands-on experience
          </p>
          <p className="mt-4 font-mono text-[10px] opacity-50">02 // 25</p>
        </div>

        <div className="p-1">
          <img
            className="w-24 h-32 object-cover grayscale"
            src="/assets/boy.webp"
            alt="profile"
          />
        </div>
      </div>
    </section>
  );
}
