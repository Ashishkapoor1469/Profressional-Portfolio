import { Github } from "lucide-react";
export function Section({
  id,
  title,
  description,
  image,
  techStack = [],
  role,
  year,
  liveLink,
  githubLink,
}) {
  return (
    <section
      id={id}
      className="
        min-w-screen h-screen
        flex items-center justify-center
        px-4 md:px-20
        bg-black text-white
        snap-center
      "
    >
      <div
        className="
          w-full max-w-7xl
          h-150
          flex flex-col-reverse md:flex-row
          items-center justify-between
          gap-8 md:gap-10
         rounded-3xl
         border lg:p-15 p-4 border-white/20
        "
      >
        
        {/* LEFT – PROJECT INFO */}
        <div className="flex flex-col gap-3 md:gap-4 max-w-xl">
          {(role || year) && (
            <p className="text-xs md:text-sm uppercase tracking-widest text-white/60">
              {role} {role && year && "•"} {year}
            </p>
          )}

          <h2 className="text-3xl md:text-6xl font-bold leading-tight">
           {title}
          </h2>

          <p className="text-sm md:text-lg text-white/75">{description}</p>

          {/* TECH STACK */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="border border-white/20 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[12px] text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* ACTION BUTTONS */}
          <div className="flex gap-4 text-xs md:text-sm mt-1 md:mt-2">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                className="font-medium text-green-400 hover:underline"
              >
                Live Demo →
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                className="font-medium hover:underline flex items-center gap-1"
              >
               <Github size={14}/> GitHub
              </a>
            )}
          </div>
        </div>

        {/* RIGHT – IMAGE CARD */}
        <div className="relative group w-full md:w-105">
          <div className="overflow-hidden rounded-3xl border p-2 border-white/20">
            <img
              src={image}
              alt={title}
              className="
                w-full h-60 md:h-105
                object-contain
                rounded-3xl
                transform group-hover:scale-105
                transition duration-700
              "
            />
          </div>

          {/* subtle glow */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
