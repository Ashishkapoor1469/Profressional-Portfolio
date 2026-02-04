import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrubSection() {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      tl.from(boxRef.current, {
        opacity: 0,
        y: 100,
        scale: 0.6,
        rotate:45,
        ease: "none",
      })
      .to(boxRef.current, {
        scale: 1,
        ease: "none",
      }).to(boxRef.current,{
        scale:3,
        delay:0.1,
        ease:"none"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="h-screen p-3 bg-black flex items-center justify-center scale-3d overflow-hidden"
      >
        <div
          ref={boxRef}
          className="w-full h-full rotate-0 bg-white rounded-xl"
        >
          <img src="/assets/1.png" className="w-full h-full object-cover" alt="" />
        </div>
      </section>

    
    </>
  );
}
