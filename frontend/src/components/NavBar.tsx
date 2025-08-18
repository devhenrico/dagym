import { scrollToSection } from "@/lib/utils";

interface NavLink {
  name: string;
  section: string;
}

interface NavBarProps {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

const navLinks: NavLink[] = [
  { name: "Início", section: "home" },
  { name: "Sobre", section: "about" },
  { name: "Serviços", section: "services" },
  { name: "Contato", section: "contact" },
];

export function NavBar({ activeSection, setActiveSection }: NavBarProps) {
  return (
    <ul className="flex gap-7">
      {navLinks.map(({ name, section }) => (
        <li key={section}>
          <button
            type="button"
            className={`group relative cursor-pointer text-sm font-medium tracking-wide transition-colors duration-300 ${
              activeSection === section ? "text-white" : "text-neutral-400"
            }`}
            onClick={() => {
              scrollToSection(section);
              setActiveSection(section);
            }}
          >
            <h2 className="group-hover:text-white">{name}</h2>
            <div
              className={`absolute -bottom-1 left-0 h-0.5 bg-white/80 transition-all duration-300 ease-out ${
                activeSection === section ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></div>
          </button>
        </li>
      ))}
    </ul>
  );
}
