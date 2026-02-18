export function Section({
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
          flex flex-col md:flex-row
          items-center justify-between
          gap-8 md:gap-10
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

          <p className="text-sm md:text-lg text-white/75">
            {description}
          </p>

          {/* TECH STACK */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="border border-white/20 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm text-white/80"
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
                className="font-medium hover:underline"
              >
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* RIGHT – IMAGE CARD */}
        <div className="relative group w-full md:w-[420px]">
          <div className="overflow-hidden rounded-3xl border p-2 border-white/20">
            <img
              src={image}
              alt={title}
              className="
                w-full h-[200px] md:h-[420px]
                object-cover
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
