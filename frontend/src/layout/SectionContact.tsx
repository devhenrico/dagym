import { ButtonPrimary } from "@/components/ButtonPrimary";
import { SectionTitle } from "@/components/SectionTitle";
import { useNavigate } from "react-router-dom";

export function SectionContact() {
  const navigate = useNavigate();

  return (
    <section
      id="contact"
      className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-24"
    >
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-4 rounded-2xl border border-neutral-800/50 bg-[url('./assets/images/bg.png')] bg-cover p-6 sm:gap-5 sm:p-12 md:gap-7 md:p-16 lg:p-24">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-base h-2/3 w-2/3 rounded-full opacity-3 blur-3xl"></div>
        </div>
        <SectionTitle>
          Pronto para <span className="gradient-text">impulsionar</span> sua
          empresa?
        </SectionTitle>
        <p className="sm:text-md max-w-2xl px-2 text-center text-sm leading-relaxed text-neutral-300">
          Alcance mais com soluções digitais focadas em resultados. Automatize
          processos e conquiste performance com inteligência e criatividade.
        </p>
        <ButtonPrimary onClick={() => navigate("/form")}>
          Solicitar Orçamento
        </ButtonPrimary>
      </div>
    </section>
  );
}
