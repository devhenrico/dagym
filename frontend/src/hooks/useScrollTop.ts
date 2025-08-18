import { useState, useEffect } from "react";
import { scrollToTop } from "@/lib/utils";

export function useScrollTop(threshold = 300) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return {
    showScrollTop,
    scrollToTop,
  };
}
