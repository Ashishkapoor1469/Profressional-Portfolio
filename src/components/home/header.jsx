import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

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
      <div className="font-display text-3xl tracking-tighter uppercase text-white">
        Ashish
      </div>

      <nav
        ref={navRef}
        className="flex [&>a]:hover:text-white  flex-col items-end space-y-1 text-sm uppercase tracking-widest text-white/80"
      >
        <a className="nav-item flex">Home</a>
        <a className="nav-item " href="#">
          About
        </a>
        <a className="nav-item " href="#">
          Projects
        </a>
        <a className="nav-item " href="#">
          Contact
        </a>
      </nav>
    </header>
  );
}
