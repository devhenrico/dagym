import { Zap } from "lucide-react";
import { ButtonPrimary } from "@/components/ButtonPrimary";
import { SectionBadge } from "@/components/SectionBadge";
import { SectionTitle } from "@/components/SectionTitle";
import { Icons } from "@/components/Icons";

export function SectionHome() {
  return (
    <section
      id="home"
      className="relative h-screen bg-[url('./assets/images/bg.png')] bg-cover"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-base h-2/3 w-2/3 rounded-full opacity-3 blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
      <div className="mt-40 flex flex-col items-center gap-6">
        <SectionBadge icon={Zap}>Conectando tecnologia</SectionBadge>
        <SectionTitle className="max-w-6xl">
          Desenvolvimento <span className="gradient-text">inteligente</span>{" "}
          para um mundo em movimento
        </SectionTitle>
        <p className="max-w-4xl text-center text-lg tracking-wide text-neutral-400">
          Nosso compromisso é entregar{" "}
          <span className="text-white">
            projetos inteligentes e personalizados
          </span>
          , que se adaptam às mudanças do mercado e posicionam você à frente da
          concorrência.
        </p>
        <ButtonPrimary href="#about">Saiba mais</ButtonPrimary>

        <div className="relative mt-30 w-full">
          <p className="mb-10 text-center text-lg font-medium tracking-wide text-neutral-500">
            Confiança de <span className="text-white/90">30.000+</span>{" "}
            desenvolvedores e empresas
          </p>

          <div className="flex items-center justify-center gap-32">
            <Icons name="microsoft" className="h-10 opacity-30" />
            <Icons name="amazon" className="h-10 opacity-30" />
            <Icons name="nubank" className="h-10 opacity-30" />
            <Icons name="playstation" className="h-10 opacity-30" />
            <Icons name="uber" className="h-10 opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}
