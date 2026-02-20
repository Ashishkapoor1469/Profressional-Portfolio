import Section from "../ui/section";
export default function Projects() {
  return (
    <div className="w-screen h-full text-center bg-black flex flex-col gap-4 p-2  justify-center items-center">
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
  );
}