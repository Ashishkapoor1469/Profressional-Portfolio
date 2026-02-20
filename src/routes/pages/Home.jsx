import ReactLenis from "lenis/react";
import Header from "../../components/home/header";
import Hero from "../../components/home/hero";
import WorkGrid from "../../components/home/workgrid";
import PinnedFeatures from "../../components/ui/pinedfeature";
import HrSection from "../../components/home/horizontalscrollsection";
import Footer from "../../components/home/footer";
import Landing from "../../components/home/LandingAnimation";
import TextC from "../../components/home/Textcome";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <main className="bg-black text-white font-body w-full overflow-hidden">
          {/* <Landing/> */}
          <Header />
          <Hero />
          <WorkGrid />
          <HrSection/>
           <TextC/>
          
          {/* <PinnedFeatures
            Array={[
              "FAST SYSTEMS ONLY.",
              "NO COMPROMISES.",
              "SCALABILITY FIRST.",
              "USER EXPERIENCE ALWAYS.",
            ]}
          /> */}
          <Footer/>
        </main>
      </ReactLenis>
    </>
  );
}
