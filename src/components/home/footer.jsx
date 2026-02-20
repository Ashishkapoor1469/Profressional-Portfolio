export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-black px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white">
              Ashish Kumar
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Full-Stack Developer · React · Next · UI Motion
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-white/70">
            <button id="#projects" className="hover:text-white transition">
              Projects
            </button>
            <button id="#about" className="hover:text-white transition">
              About
            </button>
            <button id="#contact" className="hover:text-white transition">
              Contact
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Ashish. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              GitHub
            </a>
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition">
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white/5 to-transparent" />
    </footer>
  );
}