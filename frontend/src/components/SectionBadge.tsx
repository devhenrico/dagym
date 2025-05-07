import { LucideIcon } from "lucide-react";

interface SectionBadgeProps {
  icon: LucideIcon;
  children: React.ReactNode;
}

export function SectionBadge({ icon: Icon, children }: SectionBadgeProps) {
  return (
    <h2 className="mt-2 flex items-center gap-2 rounded-full border border-neutral-700/50 bg-neutral-800/40 px-3.5 py-2.5 text-sm font-medium tracking-wider text-white uppercase shadow-md backdrop-blur-xl">
      <Icon className="size-4.5 text-base" />
      {children}
    </h2>
  );
}
