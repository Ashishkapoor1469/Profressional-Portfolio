import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedFeatures({Array}) {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
        },
      });

      itemsRef.current.forEach((item, i) => {
        tl.fromTo(
          item,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, ease: "none" }
        ).to(item, { opacity: 0, y: -40, ease: "none" });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="h-screen bg-black text-white flex items-center justify-center"
      >
        <div className="relative w-full max-w-xl text-center">
          {Array.map((text, i) => (
            <h2
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="absolute inset-0 text-5xl font-bold opacity-0"
            >
              {text}
            </h2>
          ))}
        </div>
      </section>
    </>
  );
}
