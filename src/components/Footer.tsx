import { SITE } from "../data";
import { BotanicalDivider, InstagramIcon, WhatsAppIcon } from "./Icons";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-cream/80 pt-24 pb-12 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14 flex flex-col items-center">
          <Logo variant="light" size="lg" />
          <BotanicalDivider className="w-44 mx-auto my-8 text-teal-300/60" />
          <p className="max-w-md mx-auto text-cream/60 text-sm leading-relaxed">
            Saúde, estética e bem-estar para os seus pés — com a delicadeza e a
            técnica que você merece.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-14">
          <a
            href={`https://wa.me/${SITE.whatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-12 h-12 rounded-full bg-[#25D366] border border-[#25D366] flex items-center justify-center text-white hover:bg-[#1EB858] hover:border-[#1EB858] hover:-translate-y-0.5 transition-all shadow-md shadow-emerald-900/20"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-12 h-12 rounded-full border border-cream/15 flex items-center justify-center hover:bg-cream hover:text-teal-900 hover:border-cream transition-all"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <div>
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </div>
          <div className="text-cream/40">
            Feito com cuidado · {SITE.addressShort}
          </div>
        </div>
      </div>
    </footer>
  );
}
