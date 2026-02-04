import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",       // animation starts immediately
          end: "bottom top",      // ends when section leaves viewport
          scrub: true,            // follow scroll
          markers: true,          // debug positions
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="h-20 bg-black" />       {/* spacer */}
      <section
        ref={sectionRef}
        className="h-screen flex items-center justify-center bg-white"
      >
        <h2 className="text-4xl font-bold">Scroll Triggered Section</h2>
      </section>
      <div className="h-screen bg-gray-200" /> {/* extra content */}
    </>
  );
}
