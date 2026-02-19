import ReactLenis from "lenis/react";
import Header from "../../components/home/header";
import Hero from "../../components/home/hero";
import WorkGrid from "../../components/home/workgrid";
import PinnedFeatures from "../../components/ui/pinedfeature";
import HrSection from "../../components/home/horizontalscrollsection";
import Footer from "../../components/home/footer";
import Landing from "../../components/home/LandingAnimation";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <main className="bg-black text-white font-body w-full overflow-hidden">
          {/* <Landing/> */}
          <Header />
          <Hero />
          <HrSection/>
           <WorkGrid />
          <div className="w-screen h-screen bg-black flex justify-center items-center">
helooo
          </div>
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
