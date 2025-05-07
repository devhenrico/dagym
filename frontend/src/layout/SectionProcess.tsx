import { SectionBadge } from "@/components/SectionBadge";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionTitle } from "@/components/SectionTitle";
import { ProcessGrid } from "@/components/ProcessGrid";
import { process } from "@/data/process";
import { Construction } from "lucide-react";

export function SectionProcess() {
  return (
    <section id="process" className="py-24">
      <div className="flex max-w-6xl flex-col items-center gap-6">
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
