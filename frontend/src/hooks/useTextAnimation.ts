import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export function useTextAnimation(selector: string = ".text-animated") {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    elements.forEach((char) => {
      const split = new SplitType(char as HTMLElement, { types: "chars" });

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top top",
          scrub: 2,
        },
        opacity: 0.3,
        stagger: 0.1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector]);
}
