import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Landing() {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);
  const barRef = useRef(null);

  const text = "ASHISH KAPOOR";

  useEffect(() => {
    const letters = lettersRef.current;
    const letterDuration = 0.12;
    const totalDuration = letters.length * letterDuration;

    // Initial states
    gsap.set(letters, { opacity: 0.25 });
    gsap.set(barRef.current, { scaleX: 0 });

    const tl = gsap.timeline();

    // Letters fill one-by-one
    tl.to(letters, {
      opacity: 1,
      stagger: letterDuration,
      duration: 0.01, // instant per letter (stagger controls timing)
      ease: "none",
    });

    //  Progress bar synced EXACTLY
    tl.to(
      barRef.current,
      {
        scaleX: 1,
        duration: totalDuration,
        ease: "none",
      },
      0, // start at same time as letters
    );

    //  Slide screen up after everything
    tl.to(containerRef.current, {
      y: "-100%",
      duration: 1.2,
      ease: "power4.inOut",
      delay: 0.3,
      scale:0.6
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black"
    >
      <div className="w-90 text-center">
        {/* text */}
        <div className="mb-4 flex justify-center">
          {text.split("").map((char, i) => (
            <span
              key={i}
               style={{ fontFamily: "stain" }}
              ref={(el) => (lettersRef.current[i] = el)}
              className="text-[36px] tracking-[6px] text-white font-bold "
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        {/* bar */}
        <div className="h-0.5 w-full overflow-hidden bg-white/20">
          <div ref={barRef} className="h-full origin-left bg-white" />
        </div>
      </div>
    </div>
  );
}
