import { footerNav } from "@/data/footer-nav";

export function FooterNav() {
  return (
    <div className="grid grid-cols-4 justify-items-center px-10 py-16">
      {footerNav.map((item) => (
        <div key={item.title}>
          <h2 className="mb-5 text-sm font-medium tracking-wide">
            {item.title}
          </h2>
          <ul className="space-y-2">
            {item.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-neutral-400 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
