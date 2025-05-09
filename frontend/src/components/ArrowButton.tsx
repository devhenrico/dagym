import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";
import { useScrollTop } from "@/hooks/useScrollTop";

export function ArrowButton() {
  const { showScrollTop, scrollToTop } = useScrollTop();

  return (
    <Button
      type="button"
      onClick={scrollToTop}
      className={`bg-base fixed right-4 bottom-4 z-50 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full p-0 text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:bg-orange-600 sm:right-8 sm:bottom-8 sm:h-10 sm:w-10 ${
        showScrollTop
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-4 scale-0 opacity-0"
      }`}
    >
      <ArrowUp className="size-4 sm:size-5" />
    </Button>
  );
}
