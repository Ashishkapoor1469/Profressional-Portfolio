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
    <section className="scroll-section-outer h-auto overflow-hidden bg-black text-white">
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
            image="/assets/boy.webp"
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
            image="/assets/boy.webp"
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
            image="/assets/boy.webp"
            techStack={[
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Modular Architecture",
            ]}
            liveLink="https://skill-boost-eight.vercel.app/"
            githubLink="https://github.com/Ashishkapoor1469/SkillBoost"
          />{" "}
          <Section
            title="Batekaro"
            role="Frontend Developer"
            year="2024"
            description="A modern communication-focused web application emphasizing clean UI, smooth interactions, and responsive design. Built to deliver a fast and intuitive user experience."
            cardTitle="Design Philosophy"
            cardDescription="Focuses on minimal UI, clear typography, responsive layouts, and smooth transitions to create an engaging and user-friendly experience."
            image="/assets/boy.webp"
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

/* ---------- Reusable Section Component ---------- */
