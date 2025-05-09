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
    <ul className="flex flex-wrap items-center justify-center gap-5 sm:justify-start sm:gap-6">
      {socialLinks.map(({ name, href }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-300 hover:opacity-100"
          >
            <Icons
              name={name}
              className="h-4 opacity-40 hover:opacity-80 sm:h-5"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
