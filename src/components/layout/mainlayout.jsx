import Nav from "../../routes/pages/Nav";
import Home from "../../routes/pages/Home";
import Header from "../home/header";
import Hero from "../home/hero";
import WorkGrid from "../home/workgrid";
import Footer from "../home/footer";

const Mainlayout = () => {
  return (
    <>
      <main>
        <main className="bg-black text-white font-body w-full">
          <Header />
          <Hero />
          <WorkGrid />
        </main>
        {/* <Nav/>
    <Home/> */}
      </main>
    </>
  );
};

export default Mainlayout;
