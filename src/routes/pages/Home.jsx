import ReactLenis from "lenis/react";
import Header from "../../components/home/header";
import Hero from "../../components/home/hero";
import WorkGrid from "../../components/home/workgrid";
import PinnedFeatures from "../../components/ui/pinedfeature";
import HrSection from "../../components/home/horizontalscrollsection";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <main className="bg-black text-white font-body w-full overflow-hidden">
          <Header />
          <Hero />
          <WorkGrid />
          <HrSection/>
          {/* <PinnedFeatures
            Array={[
              "FAST SYSTEMS ONLY.",
              "NO COMPROMISES.",
              "SCALABILITY FIRST.",
              "USER EXPERIENCE ALWAYS.",
            ]}
          /> */}
        </main>
      </ReactLenis>
    </>
  );
}
