interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h1
      className={`text-center text-7xl font-semibold text-white/90 ${className}`}
    >
      {children}
    </h1>
  );
}
