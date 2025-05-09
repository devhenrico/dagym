import { SectionBadge } from "@/components/SectionBadge";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionTitle } from "@/components/SectionTitle";
import { ProcessGrid } from "@/components/ProcessGrid";
import { process } from "@/data/process";
import { Construction } from "lucide-react";

export function SectionProcess() {
  return (
    <section
      id="process"
      className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:gap-6">
        <SectionBadge icon={Construction}>
          Construção digital inteligente
        </SectionBadge>
        <SectionTitle>
          Do conceito à <span className="gradient-text">conversão</span>
        </SectionTitle>
        <SectionDescription>
          <span className="text-white/90">Soluções personalizadas</span>{" "}
          desenvolvidas para impactar, engajar e converter.
        </SectionDescription>
        <ProcessGrid process={process} />
      </div>
    </section>
  );
}
