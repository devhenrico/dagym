import { Icons } from "@/components/Icons";

interface SocialLink {
  name: "github" | "instagram" | "tiktok" | "x" | "youtube";
  href: string;
}

const socialLinks: SocialLink[] = [
  { name: "github", href: "https://github.com" },
  { name: "instagram", href: "https://instagram.com" },
  { name: "tiktok", href: "https://tiktok.com" },
  { name: "x", href: "https://x.com" },
  { name: "youtube", href: "https://youtube.com" },
];

export function FooterSocial() {
  return (
    <ul className="flex items-center gap-6">
      {socialLinks.map(({ name, href }) => (
        <li key={name}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Icons name={name} className="h-5 opacity-40" />
          </a>
        </li>
      ))}
    </ul>
  );
}
