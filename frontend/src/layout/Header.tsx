import { useState, useEffect } from "react";
import { NavBar } from "@/components/NavBar";
import Logo from "../assets/images/logo.png";

export function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
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
    <header className="fixed z-50 w-full p-4">
      <div className="mx-auto max-w-xl rounded-full border border-neutral-700/50 bg-neutral-950/30 p-3 text-white shadow-md shadow-zinc-800/30 backdrop-blur-xl">
        <nav className="flex items-center justify-between">
          <a href="#home">
            <img src={Logo} alt="DaGym Logo" className="h-10 w-auto pl-2" />
          </a>
          <NavBar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <div>
            <a
              href="#contact"
              className="bg-base rounded-full px-3 py-2 text-sm font-medium tracking-wide text-white opacity-90 transition-opacity duration-300 hover:opacity-100"
            >
              Solicitar
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
