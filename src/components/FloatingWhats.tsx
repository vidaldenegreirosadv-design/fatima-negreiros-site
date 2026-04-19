import { useEffect, useState } from "react";
import { waLink } from "../data";
import { WhatsAppIcon } from "./Icons";

export default function FloatingWhats() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={waLink("Olá Fátima! Vim pelo site e gostaria de agendar uma consulta.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <div className="relative group">
        <div className="absolute inset-0 rounded-full pulse-ring" aria-hidden="true" />
        <div className="relative flex items-center gap-3 bg-[#25D366] hover:bg-[#1eb858] text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-emerald-900/20 transition-all">
          <WhatsAppIcon className="w-6 h-6" />
          <span className="hidden sm:inline text-sm font-medium">
            Agendar agora
          </span>
        </div>
      </div>
    </a>
  );
}
