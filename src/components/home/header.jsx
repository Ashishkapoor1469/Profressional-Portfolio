import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const navItems = [
  { name: "Home", target: "#home" },
  { name: "About", target: "#about" },
  { name: "Projects", target: "#projects" },
  { name: "Contact", target: "#contact" },
];
export default function Header() {
  const navRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-item", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        stagger: {
          each: 0.1,
          from: "start", // or "center", "end", "edges"
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);
  return (
    <header className="absolute top-0 w-full z-50 px-8 py-6 flex justify-between items-start">
      <div className="font-display text-3xl tracking-tighter font-mono uppercase text-white">
        Ashish
      </div>

      <nav
        ref={navRef}
        className="flex [&>a]:hover:text-white cursor-pointer  flex-col items-end space-y-1 text-sm uppercase tracking-widest text-white/80"
      >
        {navItems.map((k, i) => {
          return (
            <a
              key={i}
              onClick={() => {
                gsap.to(window, {
                  scrollTo: k.target,
                  duration: 1,
                  ease: "power3.inOut",
                });
              }}
              className="nav-item"
            >
              {k.name}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
