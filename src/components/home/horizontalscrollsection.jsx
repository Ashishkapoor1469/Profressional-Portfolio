import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import BigTextSlide from "../ui/BigTextSlide";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function HrSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const arrowsRef = useRef(null);

  const sectionsCount = 4;

  useEffect(() => {
    const tween = gsap.fromTo(
      sectionRef.current,
      { x: 0 },
      {
        x: `-${(sectionsCount - 1) * 100}vw`,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: true,
          snap: {
            snapTo: 1 / (sectionsCount - 1),
            duration: 0.6,
            ease: "power1.inOut",
          },
          onUpdate: (self) => {
            scrollTriggerRef.current = self;
          },
          onEnter: () => gsap.to(arrowsRef.current, { autoAlpha: 1 }),
          onLeave: () => gsap.to(arrowsRef.current, { autoAlpha: 0 }),
          onEnterBack: () => gsap.to(arrowsRef.current, { autoAlpha: 1 }),
          onLeaveBack: () => gsap.to(arrowsRef.current, { autoAlpha: 0 }),
        },
      }
    );

    return () => tween.kill();
  }, []);

  const goToSection = (direction) => {
    const st = scrollTriggerRef.current;
    if (!st) return;

    const snap = 1 / (sectionsCount - 1);
    const current = Math.round(st.progress / snap) * snap;

    const target =
      direction === "next"
        ? Math.min(current + snap, 1)
        : Math.max(current - snap, 0);

    gsap.to(window, {
      scrollTo: st.start + target * (st.end - st.start),
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* ARROWS */}
      <div
        ref={arrowsRef}
        className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 gap-4 opacity-0"
      >
        <button
          onClick={() => goToSection("prev")}
          className="h-12 w-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          ←
        </button>
        <button
          onClick={() => goToSection("next")}
          className="h-12 w-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          →
        </button>
      </div>

      {/* HORIZONTAL SCROLL */}
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="flex h-screen w-[400vw]"
        >
          <BigTextSlide
            title="I BUILD EXPERIENCES"
            subtitle="Not just websites — digital products with purpose."
          />

          <BigTextSlide
            title="FULL STACK THINKING"
            subtitle="Frontend polish meets backend architecture."
          />

          <BigTextSlide
            title="DESIGN × CODE"
            subtitle="Where performance and aesthetics coexist."
          />

          <BigTextSlide
            title="LET’S CREATE IMPACT"
            subtitle="Projects that people actually love to use."
          />
        </div>
      </div>
    </section>
  );
}