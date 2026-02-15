import { works } from "../../data/work";
import WorkCard from "./workcard";

export default function WorkGrid() {
  return (
    <section className="py-24  border-t border-black/5 dark:border-white/5 w-full">
      <div className="max-w-screen-2xl mx-auto">
       <div className="w-full p-1 flex sm:flex-row border-b border-neutral-700 flex-col sm:justify-between items-center">
         <h2 style={{ fontFamily: "Poppins" }} className="font-display text-4xl min-[264px]:text-6xl md:text-8xl uppercase text-center pb-4">
          CURATED <br />
          WORK
        </h2>
        <span style={{ fontFamily: "Poppins" }} className="font-display text-4xl  min-[264px]:text-6xl  md:text-8xl ">12-25</span>
       </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-2 p-2">
          {works.map((work) => (
            <WorkCard key={work.id} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
}
