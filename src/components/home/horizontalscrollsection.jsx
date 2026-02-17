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
            title="Eduvibe"
            role="Full Stack Developer"
            year="2025"
            description="A modern language-learning platform with authentication, progress tracking, and interactive UI focused on performance and accessibility."
            image="/assets/boy.webp"
            techStack={["React", "Tailwind CSS", "Node.js", "MongoDB"]}
            liveLink="https://eduvibe.vercel.app"
            githubLink="https://github.com/yourusername/eduvibe"
          />

          {/* SECTION 2 */}
          <Section
            title="Scalable Design"
            role="Scalable Architecture"
            description="Built to grow effortlessly with modular components and clean structure."
            image="/assets/boy.webp"
            techStack={[
              "Component-Based Design",
              "Clean Code",
              "Modular Architecture",
            ]}
            liveLink=""
            githubLink=""
          />

          {/* SECTION 3 */}
          <Section
            title="Reliable Stack"
            role=""
            description="Uses proven tools and best practices to ensure stability and consistency."
            image="/assets/boy.webp"
            techStack={[]}
          />

          {/* SECTION 4 */}
          <Section
            title="Modern Experience"
            description="Minimal UI, bold typography, and smooth interactions for premium feel."
            cardTitle="Design Philosophy"
            cardDescription="Minimalistic design, bold typography, and smooth animations for a modern, premium user experience."
            image="/assets/boy.webp"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Section Component ---------- */
