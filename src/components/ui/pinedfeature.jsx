import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PinnedFeatures({ Array }) {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const imgRef = useRef(null);
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
        
       
      itemsRef.current.forEach((item) => {
        tl.fromTo(
          item,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, ease: "none" },
        ).to(item, { opacity: 0, y: -40, ease: "none" });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="about"
        ref={sectionRef}
        className="h-screen bg-black text-white flex items-center justify-center"
      >
        <div className="absolute h-screen w-full z-0">
          <img
            ref={imgRef}
            className="w-full h-full object-cover mix-blend-luminosity opacity-10 grayscale"
            src="/assets/1.webp"
            alt=""
          />
        </div>
        <div className="relative w-full max-w-xl text-center">
          {Array.map((text, i) => (
            <h2
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="absolute inset-0 text-5xl font-bold opacity-0 z-10"
            >
              {text}
            </h2>
          ))}
        </div>
      </section>
    </>
  );
}
