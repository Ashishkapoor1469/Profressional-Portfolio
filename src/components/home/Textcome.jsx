import TextAn from "../ui/textAnimation";

export default function TextC() {
  return (
    <div className="w-screen h-screen text-center bg-black flex   justify-center items-center">
      <TextAn className={'w-full md:flex-col flex-col'}>
        <h1> Hi, I’m Ashish 👋</h1>
        <h1>
          A passionate Full-Stack Developer who loves building modern,
          interactive, and user-friendly web applications.
        </h1>
        <h1>
          I enjoy turning ideas into real products using clean code, smooth
          animations, and thoughtful design. From frontend experiences to
          backend logic, I like working across the full stack and continuously
          improving my skills.
        </h1>
        <p>
          What I do Build responsive and interactive web apps Create clean UI
          with smooth animations Develop scalable backend systems Solve problems
          with efficient logic Tech I work with React, Next.js Tailwind CSS,
          Framer Motion Node.js, Express MongoDB
        </p>
        <p>
          When I’m not coding, you’ll find me exploring new music 🎧, playing
          games 🎮, or planning my next trip 🌍.
        </p>
        <span>
          I believe in learning by building, staying curious, and always
          leveling up.
        </span>
      </TextAn>
    </div>
  );
}
