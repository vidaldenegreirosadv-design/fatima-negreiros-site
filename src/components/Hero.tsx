import { SITE, waLink } from "../data";
import { ArrowRightIcon, StarIcon, WhatsAppIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-32 overflow-hidden"
    >
      {/* Decorative soft blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blush-100 blur-3xl opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute top-40 -left-32 w-[28rem] h-[28rem] rounded-full bg-teal-50 blur-3xl opacity-80"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/60 border border-teal-100 text-[11px] tracking-[0.2em] uppercase text-teal-700 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blush-400" />
            Podologia Clínica — {SITE.city}
          </div>

          <h1 className="font-serif text-[2.6rem] sm:text-6xl lg:text-7xl leading-[1.02] text-ink">
            O encontro entre{" "}
            <em className="text-teal-700 not-italic">saúde</em>,{" "}
            <span className="italic text-blush-400">delicadeza</span>
            <br className="hidden sm:block" />
            <span className="text-ink"> e bem-estar para os seus pés.</span>
          </h1>

          <p className="mt-7 text-base sm:text-lg text-ink-soft max-w-xl leading-relaxed">
            Há anos cuidando de quem mais precisa, com técnica clínica precisa e o
            acolhimento que faz toda a diferença — de bebês a idosos, sem dor e
            com a higiene que você merece.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={waLink(
                "Olá Fátima! Vim pelo site e gostaria de agendar uma consulta."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#25D366] text-white font-medium shadow-lg shadow-emerald-900/25 hover:bg-[#1EB858] hover:shadow-xl hover:shadow-emerald-900/30 hover:-translate-y-0.5 transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Agendar consulta no WhatsApp
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-teal-200/70 text-ink hover:border-teal-700 hover:text-teal-700 hover:bg-white/50 transition-all font-medium"
            >
              Conhecer os tratamentos
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2.5">
              <div className="flex text-champagne">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </div>
              <div className="text-xs text-ink-soft">
                <span className="font-medium text-ink">5,0</span> · Avaliações Google
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-teal-200/50" />
            <div className="text-xs text-ink-soft">
              <span className="block font-medium text-ink">Atendimento humanizado</span>
              <span className="text-mute">Sem dor · Higiene rigorosa</span>
            </div>
          </div>
        </div>

        {/* Image card */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute inset-0 rounded-[2rem] bg-blush-200/50 -rotate-3" />
            <div className="absolute inset-0 rounded-[2rem] bg-teal-200/40 rotate-2" />
            <div className="relative h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-teal-900/15 ring-1 ring-teal-100/50">
              <img
                src="/images/hero-spa.jpg"
                alt="Ambiente sereno e elegante de podologia premium com elementos botânicos e tons suaves"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>      
