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
            <em className="text-teal-700 not-italic">Solânea e Campina Grande</em>.
          </h2>
        </div>

        {/* Seção de Unidades - Substituindo o Mapa */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Unidade Solânea */}
          <div className="group p-8 rounded-3xl bg-white border border-teal-100/50 hover:border-teal-300/60 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-teal-700 flex items-center justify-center shrink-0 shadow-lg shadow-teal-700/20">
                <PinIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-ink mb-3">Unidade Solânea</h3>
                <p className="text-ink-soft leading-relaxed mb-4">
                  {SITE.address}
                </p>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-teal-700 group-hover:underline font-medium inline-flex items-center gap-1"
                >
                  Ver no Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Unidade Campina Grande */}
          <div className="group p-8 rounded-3xl bg-white border border-blush-100/50 hover:border-blush-300/60 hover:shadow-xl hover:shadow-blush-900/5 transition-all duration-300">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-blush-400 flex items-center justify-center shrink-0 shadow-lg shadow-blush-400/20">
                <PinIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-ink mb-3">Unidade Campina Grande</h3>
                <p className="text-ink-soft leading-relaxed mb-4">
                  Irmã Zuleide Porto 145, bloco 17 / 303 <br />
                  Campina Grande - PB <br />
                  CEP: 58424717
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Irma+Zuleide+Porto+145+Campina+Grande"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blush-400 group-hover:underline font-medium inline-flex items-center gap-1"
                >
                  Ver no Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Contatos e Horários */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

          <div className="p-6 rounded-2xl bg-teal-700 text-white shadow-lg shadow-teal-900/20">
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
    </section>
  );
}
