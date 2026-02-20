import ReactLenis from "lenis/react";
import {
  Footer,
  Header,
  Hero,
  HrSection,
  Landing,
  Projects,
  WorkGrid,
} from "../../components/home";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <main className="bg-black text-white font-body w-full h-full overflow-hidden">
          <Landing />
          <Header />
          <Hero />
          <WorkGrid />
          <HrSection />
          <Projects />
          <Footer />
        </main>
      </ReactLenis>
    </>
  );
}
