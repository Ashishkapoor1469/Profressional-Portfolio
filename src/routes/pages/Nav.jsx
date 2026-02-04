import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Nav() {
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
    <nav ref={navRef} className="flex gap-6 bg-black text-white p-6">
      <a className="nav-item" href="#">
        Home
      </a>
      <a className="nav-item" href="#">
        About
      </a>
      <a className="nav-item" href="#">
        Projects
      </a>
      <a className="nav-item" href="#">
        Contact
      </a>
    </nav>
  );
}
