import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BigTextSlide({ title, subtitle }) {
  const itemsRef = useRef([]);

  useEffect(() => {
    // ===== ENTRY =====
    gsap.fromTo(
      itemsRef.current,
      {
        opacity: 0,
        scale: 0.7,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        duration: 1.6,
        ease: "power4.out",
        stagger: 0.15,
        onComplete: startIdleMotion,
      },
    );

    function startIdleMotion() {
      itemsRef.current.forEach((el, i) => {
        const direction = i % 2 === 0 ? 1 : -1;

        // 🌬 FLOAT (very slow)
        gsap.to(el, {
          y: `+=${10 + i * 2}`,
          duration: 4 + i,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        //  MICRO ROTATION
        gsap.to(el, {
          rotation: direction * (10 + i * 2),
          duration: 6 + i,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        //  BREATH SCALE
        gsap.to(el, {
          scale: 1.1,
          duration: 3 + i * 0.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    }
  }, []);

  return (
    <div  className="relative [&>img]:grayscale flex h-screen w-screen items-center justify-center bg-black overflow-hidden px-6">
      {/* TOP LEFT */}
      <img
        ref={(el) => (itemsRef.current[0] = el)}
        src="/assets/2.png"
        className="absolute top-24 md:left-24 left-6 w-24 -rotate-45  md:w-44 opacity-70"
        style={{ transform: "translate(-180px, -180px)" }}
        alt=""
      />

      {/* TOP RIGHT */}
      <img
        ref={(el) => (itemsRef.current[1] = el)}
        src="/assets/2.png"
        className="absolute top-28 right-6 md:right-28 -rotate-45  w-24  md:w-44 opacity-70"
        style={{ transform: "translate(180px, -180px)" }}
        alt=""
      />

      {/* BOTTOM LEFT */}
      <img
        ref={(el) => (itemsRef.current[2] = el)}
        src="/assets/2.png"
        className="absolute bottom-28 left-6 md:left-28 w-24 -rotate-45  md:w-44 opacity-70"
        style={{ transform: "translate(-180px, 180px)" }}
        alt=""
      />

      {/* BOTTOM RIGHT */}
      <img
        ref={(el) => (itemsRef.current[3] = el)}
        src="/assets/2.png"
        className="absolute bottom-24 right-6 md:right-24  w-24 -rotate-45  md:w-44 opacity-70"
        style={{ transform: "translate(180px, 180px)" }}
        alt=""
      />

      {/* TEXT */}
      <div className="relative z-10 max-w-5xl text-center">
        <h1 style={{ fontFamily: "bulgia" }}  className="text-[clamp(2rem,8vw,7rem)] font-bold leading-none space-y-0.5 tracking-tight text-white">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-white/60">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
