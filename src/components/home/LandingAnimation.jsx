import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
export default function Landing() {
  const sectionRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <div className="flex" ref={sectionRef}>
        
        </div>
      </div>
    </>
  );
}
