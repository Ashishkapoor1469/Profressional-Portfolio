import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Section } from "../ui/section";

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
          onEnter: () => {
            gsap.to(arrowsRef.current, { autoAlpha: 1 });
          },
          onLeave: () => {
            gsap.to(arrowsRef.current, { autoAlpha: 0 });
          },
          onEnterBack: () => {
            gsap.to(arrowsRef.current, { autoAlpha: 1 });
          },
          onLeaveBack: () => {
            gsap.to(arrowsRef.current, { autoAlpha: 0 });
          },
        },
      },
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
      className="relative scroll-section-outer overflow-hidden bg-black text-white"
    >
      {/* ARROW NAVIGATION */}
      <div
        ref={arrowsRef}
        className="fixed bottom-2 md:bottom-1 md:left-0 w-full z-50 flex justify-center gap-3 opacity-0 pointer-events-auto"
      >
        <button
          onClick={() => goToSection("prev")}
          className="h-12 w-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          ←
        </button>

        <button
          onClick={() => goToSection("next")}
          className="w-12 h-12  rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          →
        </button>
      </div>

      {/* HORIZONTAL SCROLL */}
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="scroll-section-inner h-screen w-[400vw] flex"
        >
          <Section
            title="Fullstack Application"
            role="Full Stack Developer"
            year="2025"
            description="A complete full-stack web application featuring secure authentication, user profiles, content posting, and optimized API performance. Built with scalability, clean architecture, and real-world backend practices in mind."
            image="/assets/z.svg"
            techStack={[
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
              "JWT Authentication",
              "REST APIs",
            ]}
            liveLink="https://minitwitter-psi.vercel.app/"
            githubLink="https://github.com/Ashishkapoor1469/Fullstackapplication"
          />

          <Section
            title="CODEAXE"
            role="Frontend & Logic Developer"
            year="2024"
            description="An interactive coding-focused platform designed to improve problem-solving and logical thinking. Emphasizes clean UI, structured content flow, and smooth user experience."
            image="/assets/code.png"
            techStack={[
              "React",
              "JavaScript",
              "Tailwind CSS",
              "Component-Based Design",
            ]}
            liveLink="https://codeaxe.vercel.app/"
            githubLink="https://github.com/Ashishkapoor1469/CODEAXE"
          />

          <Section
            title="SkillBoost"
            role="Full Stack Developer"
            year="2024"
            description="A skill development platform focused on structured learning and user engagement. Designed with modular components, scalable backend logic, and clean API handling."
            image="/assets/candle.gif"
            techStack={[
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Modular Architecture",
            ]}
            liveLink="https://skill-boost-eight.vercel.app/"
            githubLink="https://github.com/Ashishkapoor1469/SkillBoost"
          />

          <Section
            title="Batekaro"
            role="Frontend Developer"
            year="2024"
            description="A modern communication-focused web application emphasizing clean UI, smooth interactions, and responsive design. Built to deliver a fast and intuitive user experience."
            image="/assets/3.webp"
            techStack={[
              "React",
              "Tailwind CSS",
              "Responsive Design",
              "UI/UX Principles",
            ]}
            liveLink="https://chatttkero.vercel.app/"
            githubLink="https://github.com/Ashishkapoor1469/Batekaro"
          />
        </div>
      </div>
    </section>
  );
}
