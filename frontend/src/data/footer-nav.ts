export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterItems {
  title: string;
  links: FooterLink[];
}

export const footerNav: FooterItems[] = [
  {
    title: "Navegação",
    links: [
      { label: "Início", href: "#home" },
      { label: "Sobre", href: "#about" },
      { label: "Serviços", href: "#services" },
      { label: "Contato", href: "#contact" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { label: "Desenvolvimento Web", href: "#services" },
      { label: "Design UI/UX", href: "#services" },
      { label: "Cloud & Marketing", href: "#services" },
      { label: "Suporte Técnico", href: "#services" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Metologia", href: "#process" },
      { label: "Projetos", href: "#projects" },
      { label: "Casos de Sucesso", href: "#testimonials" },
      { label: "FAQ", href: "#testimonials" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "Orçamento", href: "#contact" },
      { label: "Consultoria", href: "#contact" },
      { label: "Termos de Uso", href: "#home" },
      { label: "Política de Privacidade", href: "#home" },
    ],
  },
];
