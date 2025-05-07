import {
  BarChart,
  Code,
  HeartPulse,
  Lightbulb,
  Palette,
  Server,
  LucideIcon,
} from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Code,
    title: "Desenvolvimento\nWeb",
    description:
      "Sites responsivos com alta performance, utiliando tecnologias modernas para entregar resultados.",
  },
  {
    icon: Palette,
    title: "Design\nUI/UX",
    description:
      "Interfaces intuitivas, minimalistas e de fácil navegação, focadas em aumentar a conversão e o engajamento.",
  },
  {
    icon: BarChart,
    title: "Marketing\nDigital",
    description:
      "Estratégias para aumentar a visibilidade online, atraindo mais clientes com campanhas eficientes.",
  },
  {
    icon: Lightbulb,
    title: "Consultoria\nTecnológica",
    description:
      "Orientação para otimizar processos e superar a concorrência, com foco em soluções estratégicas.",
  },
  {
    icon: Server,
    title: "Infraestrutura\nCloud",
    description:
      "Soluções em nuvem para escalabilidade e alta disponibilidade, ajustadas para o melhor negócio.",
  },
  {
    icon: HeartPulse,
    title: "Suporte\nContínuo",
    description:
      "Acompanhamento constante para garantir a segurança, priorizando a qualidade e a confiabilidade do serviço.",
  },
];
