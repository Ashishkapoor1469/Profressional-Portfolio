import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Loader2 } from "lucide-react";
const digits = [
  { digitF: 0, digitE: 0 },
  { digitF: 6, digitE: 5 },
  { digitF: 9, digitE: 8 },
  { digitF: 9, digitE: 9 },
  { digitF: 2, digitE: 7 },
];
export default function Landing() {
  const sectionRef = useRef(null);
  const countRef = useRef(null);
  useLayoutEffect(() => {}, []);
  return (
    <>
      <div className="w-full fixed z-70 h-screen bg-black text-white flex justify-center items-center">
        <div
          className="flex flex-col w-full items-center justify-center"
          ref={sectionRef}
        >
          <div className="divide absolute top-0 -translate-y-400  transition-all duration-500 h-full w-px bg-neutral-600 content-center"></div>
          <div className="absolute bottom-45">
            <Loader2 size={34} className="animate-spin" />
          </div>
          <div className=" font-semibold font-mono flex gap-1 absolute top-[50%] left-[47%]">
            <h1 className="-translate-x-300 transition-all duration-500">
              <span>Ashish</span>
            </h1>
            <h1 className="translate-x-200 transition-all duration-500">
              <span>Kapoor</span>
            </h1>
          </div>
          <div ref={countRef}>
            {digits.map((digit, i) => {
              return (
                <div key={i}  className="absolute text-8xl top-[50%] left-[50%] -translate-x-13 flex">
                  <h1 className="flex-1">{digit.digitF}</h1>
                  <h1 className="flex-1">{digit.digitF}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
