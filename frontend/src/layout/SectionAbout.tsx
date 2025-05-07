import { ChevronDown, Fingerprint } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { SectionBadge } from "@/components/SectionBadge";
import { useTextAnimation } from "@/hooks/useTextAnimation";

export function SectionAbout() {
  useTextAnimation();

  return (
    <section id="about" className="py-24">
      <div className="mt-8 flex flex-col items-center gap-6">
        <SectionBadge icon={Fingerprint}>Identidade que conecta</SectionBadge>
        <SectionTitle>
          Conheça nossa <span className="gradient-text">missão</span> e valores
        </SectionTitle>
        <p className="text-animated px-32 text-justify text-4xl leading-16 text-white/90">
          <span className="mr-14 items-center text-xl font-light text-neutral-400 uppercase">
            Sobre a DaGym
          </span>
          Acreditamos que a inovação nasce da combinação entre criatividade e
          estratégia. Por isso, desenvolvemos sites que fogem do comum,
          oferecendo experiências digitais únicas. Cada projeto é pensado para
          fortalecer a presença da sua marca, aumentar sua autoridade no mercado
          e impulsionar seus resultados. Traduzimos a ideia da sua empresa em
          cada detalhe, com{" "}
          <span>
            soluções digitais que unem design, funcionalidade e propósito
          </span>
          . Buscamos estar sempre à frente, com foco em originalidade,
          excelência e impacto real. Valorizamos o que torna cada negócio único,
          e é por isso que cada criação carrega identidade, intenção e um
          cuidado. Porque entendemos que seu negócio tem uma{" "}
          <span>história única — e ela merece ser de forma especial</span>.
        </p>
        <a href="#process" className="animate-float">
          <ChevronDown className="size-8 text-base" />
        </a>
      </div>
    </section>
  );
}
