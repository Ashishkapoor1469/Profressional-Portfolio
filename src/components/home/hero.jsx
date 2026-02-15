export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-end">
      {/* Background */}
      <div className="absolute inset-0 bg-primary w-full">
        <img
          src="/assets/3.webp"
          className="w-full h-full object-contain mix-blend-luminosity opacity-90 contrast-125"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent" />
      </div>

      {/* Title */}
      <div className="z-10 px-6 md:px-12 pb-12">
        <h1
          style={{ fontFamily: "Poppins" }}
          className="font-display text-[10vw] lg:text-[10vw] uppercase text-white overlap-text select-none"
        >
          Ashish <br /> Kapoor
        </h1>
      </div>

      {/* Info Card */}
      <div className="flex lg:flex-row justify-end items-end flex-col-reverse gap-8 text-white">
        <div className="lg:block  text-right max-w-sm">
          <p className="text-[10px] uppercase tracking-[0.2em] text-center sm:text-end px-2 mb-4 opacity-70">
            Creative Full-Stack Developer
          </p>
          <p className="text-xs opacity-90 font-light uppercase p-2 text-center sm:text-end">
            Crafting modern web applications with Next.js, React, and Express 1+
            year of hands-on experience
          </p>
          <p className="mt-4 font-mono text-[10px] opacity-50">02 // 25</p>
        </div>

        <div className="p-1">
          <img
            className="w-24 h-32 object-cover grayscale"
            src="/assets/boy.webp"
          />
        </div>
      </div>
    </section>
  );
}
