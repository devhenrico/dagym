import { ChevronDown, Fingerprint } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { SectionBadge } from "@/components/SectionBadge";
import { useTextAnimation } from "@/hooks/useTextAnimation";

export function SectionAbout() {
  useTextAnimation();

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24">
      <div className="mt-4 flex flex-col items-center gap-4 sm:mt-8 sm:gap-6">
        <SectionBadge icon={Fingerprint}>Identidade que conecta</SectionBadge>
        <SectionTitle>
          Conheça nossa <span className="gradient-text">missão</span> e valores
        </SectionTitle>
        <p className="text-animated px-4 text-justify text-lg leading-relaxed text-white/90 sm:px-8 sm:text-2xl md:px-16 md:text-3xl lg:text-4xl">
          <span className="mr-12 text-center text-xs font-light text-neutral-400 uppercase sm:mr-14 sm:text-xl">
            Sobre a DaGym
          </span>
          Acreditamos que a inovação nasce da combinação entre criatividade e
          estratégia. Por isso, desenvolvemos sites que fogem do comum,
          oferecendo experiências digitais únicas. Cada projeto é pensado para
          fortalecer a presença da sua marca, aumentar sua autoridade no mercado
          e impulsionar seus resultados. Traduzimos a ideia da sua empresa em
          cada detalhe, com soluções digitais que unem design, funcionalidade e
          propósito . Buscamos estar sempre à frente, com foco em originalidade,
          excelência e impacto real. Valorizamos o que torna cada negócio único,
          e é por isso que cada criação carrega identidade, intenção e um
          cuidado. Porque entendemos que seu negócio tem uma história única — e
          ela merece ser de forma especial.
        </p>
        <a href="#process" className="animate-float mt-4 sm:mt-6">
          <ChevronDown className="size-6 text-base sm:size-8" />
        </a>
      </div>
    </section>
  );
}
