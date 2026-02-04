import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Landing from "../../components/home/LandingAnimation";
// import ScrollSection from "./Sectionref";
import Features from "./feature";
import PinnedFeatures from "./pinedfeature";

export default function Home() {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1, // 🔁 infinite
        repeatDelay: 0.3, // pause before restarting
      });

      tl.to(boxRef.current, {
        x: 150,
        duration: 0.6,
        ease: "power2.out",
      })
        .to(boxRef.current, {
          y: -150,
          duration: 0.6,
          ease: "power2.out",
        })
        .to(boxRef.current, {
          x: 0,
          duration: 0.6,
          ease: "power2.out",
        })
        .to(boxRef.current, {
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* <div className="h-screen flex items-center justify-center bg-black">
        <div ref={boxRef} className="w-20 h-20 bg-white rounded-lg" />
      <Landing/>
      </div>  */}
       <Features />
       <PinnedFeatures/>
    </>
  );
}
