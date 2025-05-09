import { Zap } from "lucide-react";
import { ButtonPrimary } from "@/components/ButtonPrimary";
import { SectionBadge } from "@/components/SectionBadge";
import { SectionTitle } from "@/components/SectionTitle";
import { Icons } from "@/components/Icons";

export function SectionHome() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[url('./assets/images/bg.png')] bg-cover bg-center"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-base h-2/3 w-2/3 rounded-full opacity-3 blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      <div className="mx-auto mt-20 flex flex-col items-center gap-4 px-4 md:mt-40 md:gap-6">
        <SectionBadge icon={Zap}>Conectando tecnologia</SectionBadge>
        <SectionTitle className="max-w-6xl text-center text-3xl md:text-5xl">
          Desenvolvimento <span className="gradient-text">inteligente</span>{" "}
          para um mundo em movimento
        </SectionTitle>
        <p className="max-w-4xl px-4 text-center text-sm tracking-wide text-neutral-400 md:text-lg">
          Nosso compromisso é entregar{" "}
          <span className="text-white">
            projetos inteligentes e personalizados
          </span>
          , que se adaptam às mudanças do mercado e posicionam você à frente da
          concorrência.
        </p>
        <ButtonPrimary href="#about">Saiba mais</ButtonPrimary>

        <div className="relative mt-10 w-full md:mt-30">
          <p className="mb-6 text-center text-sm font-medium tracking-wide text-neutral-500 md:mb-10 md:text-lg">
            Confiança de <span className="text-white/90">30.000+</span>{" "}
            desenvolvedores e empresas
          </p>

          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-28">
            <Icons
              name="amazon"
              className="hidden h-7 opacity-30 md:block md:h-10"
            />
            <Icons name="microsoft" className="h-7 opacity-30 md:h-10" />
            <Icons name="nubank" className="h-7 opacity-30 md:h-10" />
            <Icons name="playstation" className="h-7 opacity-30 md:h-10" />
            <Icons
              name="uber"
              className="hidden h-7 opacity-30 md:block md:h-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
