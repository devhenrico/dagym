import { Separator } from "@/components/ui/separator";
import Logo from "../assets/images/logo.png";
import { FooterSocial } from "@/components/FooterSocial";
import { FooterNav } from "@/components/FooterNav";

export function Footer() {
  return (
    <footer className="w-full bg-black px-32 py-5 text-white">
      <div className="rounded-2xl border border-neutral-800/50">
        <div className="mx-auto max-w-6xl pt-10">
          <div className="flex items-center justify-between py-8">
            <div>
              <a href="#home">
                <img src={Logo} alt="DaGym Logo" className="h-10 w-auto" />
              </a>
            </div>
            <FooterSocial />
          </div>

          <Separator className="bg-gradient-to-r from-neutral-800/10 via-neutral-800 to-neutral-800/10" />

          <FooterNav />

          <Separator className="bg-gradient-to-r from-neutral-800/10 via-neutral-800 to-neutral-800/10" />

          <h2 className="py-12 text-center text-sm font-medium text-neutral-500">
            © 2025{" "}
            <span className="transition-colors duration-300 hover:text-white/90">
              DaGym
            </span>
            . Todos os direitos reservados.
          </h2>
        </div>
      </div>
    </footer>
  );
}
