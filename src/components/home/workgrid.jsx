import { works } from "../../data/work";
import TextAn from "../ui/textAnimation";
import WorkCard from "../ui/workcard";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkGrid() {
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    // const isMobile = window.innerWidth < 768;

    // if (!isMobile) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".work-card").forEach((card) => {
        gsap.fromTo(
          card,
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 55%",
              scrub: true, // 👈 progress-based animation
            },
          },
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      className="py-24 border-t project  border-black/5 dark:border-white/5 w-full"
    >
      <div className=" mx-auto">
        <div className="w-full p-1 flex sm:flex-row border-b border-neutral-700 flex-col sm:justify-between items-center">
          <TextAn>
            <h2
              style={{ fontFamily: "stain" }}
              className="font-display text-4xl min-[264px]:text-6xl md:text-8xl uppercase text-center pb-4"
            >
              CURATED <br /> WORK
            </h2>
            <span
              style={{ fontFamily: "Poppins" }}
              className="font-display text-4xl min-[264px]:text-6xl md:text-8xl"
            >
              12-25
            </span>
          </TextAn>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-2 p-2"
        >
          {works.map((work) => (
            <div key={work.id} className="work-card">
              <WorkCard {...work} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
