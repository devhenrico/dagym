import { Search, Laptop, Layers, Shield, Rocket } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Process {
  title: string;
  description: string;
  icon: LucideIcon;
  step: string;
  position: "left" | "right";
}

export const process: Process[] = [
  {
    title: "Planejamento",
    description:
      "Análise completa do projeto, definição de objetivos e criação de um plano estratégico personalizado para as necessidades específicas do seu negócio",
    icon: Search,
    step: "Etapa 1",
    position: "left",
  },
  {
    title: "Protótipo",
    description:
      "Desenvolvimento do protótipo, estruturação da arquitetura do site e implementação das funcionalidades com foco na experiência do usuário",
    icon: Laptop,
    step: "Etapa 2",
    position: "right",
  },
  {
    title: "Desenvolvimento",
    description:
      "Implementação avançada, integração de APIs, otimização de performance e aplicação de técnicas modernas para maximizar a eficiência do projeto",
    icon: Layers,
    step: "Etapa 3",
    position: "left",
  },
  {
    title: "Qualidade",
    description:
      "Testes de qualidade, otimização SEO, implementação de estratégias de segurança e preparação para lançamento com foco em estabilidade e desempenho",
    icon: Shield,
    step: "Etapa 4",
    position: "right",
  },
  {
    title: "Lançamento",
    description:
      "Lançamento, monitoramento contínuo, suporte técnico e implementação de melhorias baseadas em análise de dados para garantir evolução constante",
    icon: Rocket,
    step: "Etapa 5",
    position: "left",
  },
];
