interface SectionDescriptionProps {
  children: React.ReactNode;
}

export function SectionDescription({ children }: SectionDescriptionProps) {
  return (
    <p className="text-center text-lg tracking-wide text-neutral-400">
      {children}
    </p>
  );
}
