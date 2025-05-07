import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

interface ButtonPrimaryProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export function ButtonPrimary({ href, onClick, children }: ButtonPrimaryProps) {
  const Component = href ? "a" : "button";

  return (
    <Button
      asChild
      className="bg-base hover:bg-base group z-10 mt-4 cursor-pointer rounded-full px-2 py-6 pl-4.5 opacity-90 shadow-xl transition-opacity duration-300 hover:opacity-100"
    >
      <Component
        {...(href ? { href } : { onClick })}
        className="flex items-center gap-4 text-lg font-medium tracking-wide text-white"
      >
        {children}
        <div className="rounded-full bg-zinc-950 p-2">
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-90" />
        </div>
      </Component>
    </Button>
  );
}
