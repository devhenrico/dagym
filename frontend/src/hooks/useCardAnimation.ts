import { useEffect, RefObject } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useCardAnimation(gridRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    if (gridRef.current) {
      const leftCards = gridRef.current.querySelectorAll(".card-left");
      const rightCards = gridRef.current.querySelectorAll(".card-right");

      leftCards.forEach((card) => {
        gsap.set(card, {
          x: -200,
          opacity: 0,
        });

        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 50%",
            scrub: 2,
          },
          x: 0,
          opacity: 1,
        });
      });

      rightCards.forEach((card) => {
        gsap.set(card, {
          x: 200,
          opacity: 0,
        });

        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
          },
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [gridRef]);
}
