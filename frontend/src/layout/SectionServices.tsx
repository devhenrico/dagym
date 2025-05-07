import { TrendingUp } from "lucide-react";
import { services } from "@/data/services";
import { SectionBadge } from "@/components/SectionBadge";
import { SectionTitle } from "@/components/SectionTitle";
import { SectionDescription } from "@/components/SectionDescription";
import { ServiceCard } from "@/components/ServiceCard";

export function SectionServices() {
  return (
    <section id="services" className="py-24">
      <div className="flex flex-col items-center gap-6">
        <SectionBadge icon={TrendingUp}>Transformando resultados</SectionBadge>
        <SectionTitle>
          Soluções <span className="gradient-text">digitais</span> para o seu
          negócio
        </SectionTitle>
        <SectionDescription>
          Design, estratégia e <span className="text-white/90">tecnologia</span>{" "}
          para impulsionar sua marca no digital.
        </SectionDescription>
        <ServiceCard services={services} />
      </div>
    </section>
  );
}
