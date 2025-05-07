import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";
import { useScrollTop } from "@/hooks/useScrollTop";

export function ArrowButton() {
  const { showScrollTop, scrollToTop } = useScrollTop();

  return (
    <Button
      type="button"
      onClick={scrollToTop}
      className={`bg-base fixed right-8 bottom-8 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-0 text-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:bg-orange-600 ${
        showScrollTop
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-4 scale-0 opacity-0"
      }`}
    >
      <ArrowUp className="size-5" />
    </Button>
  );
}
