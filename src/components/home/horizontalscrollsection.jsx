import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Section } from "../ui/section";
gsap.registerPlugin(ScrollTrigger);

export default function HrSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const tween = gsap.fromTo(
      sectionRef.current,
      { x: 0 },
      {
        x: "-300vw",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 0.6,
          pin: true,
          snap: {
            snapTo: 1 / 3,
            duration: 0.6,
            delay: 1.5,
            ease: "power1.inOut",
          },
        },
      },
    );

    return () => tween.kill();
  }, []);

  return (
    <section className="scroll-section-outer overflow-hidden bg-black text-white">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="scroll-section-inner h-screen w-[400vw] flex"
        >
          {/* SECTION 1 */}
          <Section
            title="Fast Performance"
            description="Optimized architecture focused on speed, smooth animations, and efficient rendering."
            cardTitle="Performance Highlights"
            cardDescription="Fast load times, smooth interactions, and optimized rendering for a premium experience."
          />

          {/* SECTION 2 */}
          <Section
            title="Scalable Design"
            description="Built to grow effortlessly with modular components and clean structure."
            cardTitle="Scalability Features"
            cardDescription="Modular components, clean architecture, and best practices for easy maintenance and growth."
          />

          {/* SECTION 3 */}
          <Section
            title="Reliable Stack"
            description="Uses proven tools and best practices to ensure stability and consistency."
            cardTitle="Tech Stack"
            cardDescription="React, GSAP, and modern web technologies for a robust and reliable portfolio."
          />

          {/* SECTION 4 */}
          <Section
            title="Modern Experience"
            description="Minimal UI, bold typography, and smooth interactions for premium feel."
            cardTitle="Design Philosophy"
            cardDescription="Minimalistic design, bold typography, and smooth animations for a modern, premium user experience."
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Section Component ---------- */

