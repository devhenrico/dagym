import { Puzzle } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionBadge } from "@/components/SectionBadge";
import { SectionTitle } from "@/components/SectionTitle";
import { TestimonialRow } from "@/components/TestimonialRow";

export function SectionTestimonials() {
  return (
    <section
      id="testimonials"
      className="w-full overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24"
    >
      <div className="mx-auto flex w-full flex-col items-center gap-4 sm:gap-6">
        <SectionBadge icon={Puzzle}>Soluções sob medida</SectionBadge>
        <SectionTitle>
          <span className="gradient-text">Confiança</span> além do serviço
        </SectionTitle>
        <SectionDescription>
          Ajudamos a <span className="text-white/90">transformar desafios</span>{" "}
          em crescimento e sucesso para o seu negócio.
        </SectionDescription>

        <TestimonialRow testimonials={testimonials} />
      </div>
    </section>
  );
}
