import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function SplitText({ text, classname, delay, duration }) {
  const textRef = useRef(null);
  useLayoutEffect(()=>{
    const ctx = gsap.context(()=>{

    })
  },[])
  return (
    <>
      <div ref={textRef} className={classname}>
        {text}
      </div>
    </>
  );
}
