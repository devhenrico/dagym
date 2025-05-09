import { useState, useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import Logo from "../assets/images/logo.png";
import { Text, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);

      const sections = ["home", "about", "services", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top <= 100 && rect.bottom >= 100;
          if (isVisible) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 w-full p-4 transition-colors duration-300 ${
        scrolled ? "bg-neutral-950/30 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-xl rounded-full bg-transparent p-1 text-white md:border md:border-neutral-700/50 md:bg-neutral-950/30 md:p-3 md:shadow-md md:shadow-zinc-800/30 md:backdrop-blur-xl">
        <nav className="flex items-center justify-between">
          <a href="#home">
            <img
              src={Logo}
              alt="DaGym Logo"
              className="h-11 w-auto md:h-10 md:pl-2"
            />
          </a>

          <div className="hidden md:block">
            <NavBar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-base rounded-full px-3 py-2 text-sm font-medium tracking-wide text-white opacity-90 transition-opacity duration-300 hover:opacity-100"
            >
              Solicitar
            </a>
          </div>

          <div className="md:hidden">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button className="rounded-md border border-neutral-700/50 bg-black py-6">
                  <Text className="size-6 scale-x-[-1] text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-neutral-800 bg-neutral-950/80 text-white backdrop-blur-md [&>button]:hidden"
              >
                <div className="absolute top-6 right-5">
                  <SheetClose asChild>
                    <Button className="rounded-md border border-neutral-700/50 bg-black py-6">
                      <X className="size-6 text-white" />
                    </Button>
                  </SheetClose>
                </div>

                <div className="mt-30 flex flex-col px-10">
                  <div className="flex flex-col space-y-10">
                    <SheetClose asChild>
                      <a
                        href="#home"
                        className={`font-medium ${
                          activeSection === "home" ? "text-base" : "text-white"
                        }`}
                        onClick={() => setActiveSection("home")}
                      >
                        Início
                      </a>
                    </SheetClose>

                    <SheetClose asChild>
                      <a
                        href="#about"
                        className={`font-medium ${
                          activeSection === "about" ? "text-base" : "text-white"
                        }`}
                        onClick={() => setActiveSection("about")}
                      >
                        Sobre
                      </a>
                    </SheetClose>

                    <SheetClose asChild>
                      <a
                        href="#services"
                        className={`font-medium ${
                          activeSection === "services"
                            ? "text-base"
                            : "text-white"
                        }`}
                        onClick={() => setActiveSection("services")}
                      >
                        Serviços
                      </a>
                    </SheetClose>

                    <SheetClose asChild>
                      <a
                        href="#contact"
                        className={`font-medium ${
                          activeSection === "contact"
                            ? "text-base"
                            : "text-white"
                        }`}
                        onClick={() => setActiveSection("contact")}
                      >
                        Contato
                      </a>
                    </SheetClose>

                    <Separator className="bg-gradient-to-r from-neutral-800/10 via-neutral-800 to-neutral-800/10" />

                    <SheetClose asChild>
                      <a
                        href="#contact"
                        className="bg-base mt-1 rounded-full py-2.5 text-center text-sm font-medium tracking-wide text-white opacity-90 transition-opacity duration-300 hover:opacity-100"
                      >
                        Solicitar
                      </a>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
