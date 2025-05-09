import { LucideIcon } from "lucide-react";

interface SectionBadgeProps {
  icon: LucideIcon;
  children: React.ReactNode;
}

export function SectionBadge({ icon: Icon, children }: SectionBadgeProps) {
  return (
    <h2 className="flex items-center gap-2 rounded-full border border-neutral-700/50 bg-neutral-800/40 px-2.5 py-1.5 text-xs font-medium tracking-wider text-white uppercase shadow-md backdrop-blur-xl sm:px-3.5 sm:py-2.5 sm:text-sm">
      <Icon className="size-3.5 text-base sm:size-4.5" />
      {children}
    </h2>
  );
}
