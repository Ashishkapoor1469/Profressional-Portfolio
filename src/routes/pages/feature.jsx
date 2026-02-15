import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import SplitText from "../../components/ui/splittextanimation";
gsap.registerPlugin(ScrollSmoother);
gsap.registerPlugin(ScrollTrigger);
export default function ScrubSection() {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const [text, setText] = useState("Hello, I am Ashish");

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
        scale: 0.4,
        ease: "none",
      })
        .to(boxRef.current, {
          scale: 1,
          ease: "none",
        })
        .to(boxRef.current, {
          scale: 3,
          ease: "none",
        })
        // .call(() => setText("journy started"))
        .to(boxRef.current, {
          opacity: 0,
          y: -100,
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="h-screen bg-black flex items-center justify-center overflow-hidden"
      >
        <div className="absolute w-full h-full text-white flex flex-col gap-2 justify-center items-center p-4">
          <SplitText
            text={text}
            className="text-8xl font-bold text-center"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            showCallback
          />
          <p className="text-sm font-light">
            <SplitText text={"Scroll down to see my journy"} delay={60} />
          </p>
          <div
            ref={textRef}
            className="w-10 rounded-full text-xl h-10 border animate-bounce border-neutral-800 flex justify-center items-center"
          >
            ↓
          </div>
        </div>
        <div ref={boxRef} className="w-full h-full rotate-0 z-10">
          <img
            src="/assets/1.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
