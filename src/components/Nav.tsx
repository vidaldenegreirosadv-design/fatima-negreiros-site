import { useEffect, useState } from "react";
import { waLink } from "../data";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";
import Logo from "./Logo";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#infantil", label: "Infantil" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-xl border-b border-ink/5 shadow-sm shadow-ink/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a
          href="#topo"
          className="group focus:outline-none"
          aria-label="Fátima Negreiros — Podologia Especializada — Início"
        >
          <Logo size="md" />
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft hover:text-teal-700 transition-colors relative after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-teal-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink("Olá Fátima! Gostaria de agendar uma consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-medium hover:bg-[#1EB858] transition-all shadow-sm hover:shadow-lg hover:shadow-emerald-900/25 hover:-translate-y-0.5"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Agendar
        </a>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden p-2 -mr-2 text-ink hover:text-teal-700 transition-colors"
          aria-label="Abrir menu"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-cream shadow-2xl p-6 flex flex-col transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-label="Menu de navegação"
        >
          <div className="flex items-center justify-between mb-10">
            <Logo size="sm" />
            <button
              onClick={() => setOpen(false)}
              className="p-2 -mr-2 text-ink hover:text-teal-700 transition-colors"
              aria-label="Fechar menu"
            >
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-4 px-2 border-b border-ink/5 text-ink-soft hover:text-teal-700 text-lg font-serif transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={waLink("Olá Fátima! Gostaria de agendar uma consulta.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EB858] text-white text-sm font-medium transition-colors shadow-lg shadow-emerald-900/20"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Agendar pelo WhatsApp
          </a>
        </aside>
      </div>
    </header>
  );
}
