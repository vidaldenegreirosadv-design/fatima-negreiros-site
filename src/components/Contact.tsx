import { SITE, waLink } from "../data";
import { ClockIcon, InstagramIcon, PinIcon, WhatsAppIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contato" className="py-28 sm:py-36 relative bg-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] tracking-[0.25em] uppercase text-blush-400 font-medium">
            Onde nos encontrar
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Venha nos visitar em{" "}
            <em className="text-teal-700 not-italic">Solânea</em>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Map */}
          <div className="lg:col-span-3 rounded-3xl overflow-hidden border border-teal-100/50 shadow-xl shadow-teal-900/8 h-[360px] sm:h-[480px]">
            <iframe
              title="Mapa — Localização de Fátima Negreiros Podóloga"
              src={SITE.mapsEmbed}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, filter: "saturate(0.85) contrast(0.95)" }}
            />
          </div>

          {/* Info cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white border border-teal-100/50 hover:border-blush-300/60 hover:shadow-lg hover:shadow-teal-900/8 hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-teal-700 flex items-center justify-center shrink-0 group-hover:bg-teal-900 transition-colors">
                  <PinIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-mute mb-1">
                    Endereço
                  </div>
                  <div className="font-serif text-lg text-ink leading-snug">
                    {SITE.address}
                  </div>
                  <div className="mt-2 text-xs text-blush-400 group-hover:underline font-medium">
                    Abrir no Google Maps →
                  </div>
                </div>
              </div>
            </a>

            <a
              href={waLink("Olá Fátima! Gostaria de agendar uma consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white border border-teal-100/50 hover:border-blush-300/60 hover:shadow-lg hover:shadow-teal-900/8 hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#1EB858] transition-colors">
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-mute mb-1">
                    WhatsApp
                  </div>
                  <div className="font-serif text-lg text-ink">
                    {SITE.whatsappDisplay}
                  </div>
                  <div className="mt-2 text-xs text-[#1EB858] group-hover:underline font-medium">
                    Iniciar conversa →
                  </div>
                </div>
              </div>
            </a>

            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white border border-teal-100/50 hover:border-blush-300/60 hover:shadow-lg hover:shadow-teal-900/8 hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blush-400 to-teal-500 flex items-center justify-center shrink-0">
                  <InstagramIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-mute mb-1">
                    Instagram
                  </div>
                  <div className="font-serif text-lg text-ink">
                    @{SITE.instagram}
                  </div>
                  <div className="mt-2 text-xs text-blush-400 group-hover:underline font-medium">
                    Ver perfil →
                  </div>
                </div>
              </div>
            </a>

            <div className="p-6 rounded-2xl bg-teal-700 text-white">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                  <ClockIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-white/60 mb-1">
                    Atendimento
                  </div>
                  <div className="font-serif text-base text-white leading-snug">
                    Segunda a sábado · com hora marcada
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
