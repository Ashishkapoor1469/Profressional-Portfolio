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
    <section className="h-screen w-screen flex items-center justify-center px-6 md:px-20 bg-black text-white">
      <div className="w-full h-full flex  md:flex-row flex-col justify-between py-7 md:justify-center items-center gap-2">
        {/* LEFT – PROJECT INFO */}
        <div className="flex gap-2 flex-col">
          <p className="text-sm uppercase tracking-widest text-white/60 ">
            {role} • {year}
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            {title}
          </h2>

          <p className="md:text-lg  text-white/75">{description}</p>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-1">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="border border-white/20 px-4 py-1.5 rounded-full text-sm text-white/80"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-1 text-sm">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                className="py-3  px-2 font-medium text-green-500"
              >
                Live Demo →
              </a>
            )}

            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                className="px-2 py-3 font-medium "
              >
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* RIGHT – IMAGE CARD */}
        <div className="relative group p-4">
          <div className="overflow-hidden rounded-3xl border border-white/20">
            <img
              src={image}
              alt={title}
              className="w-100 h-100 object-cover transform group-hover:scale-105 transition duration-700"
            />
          </div>

          {/* subtle glow */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
