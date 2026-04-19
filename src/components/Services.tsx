import { aestheticServices, clinicalServices, waLink } from "../data";
import { ArrowRightIcon, LeafIcon, ShieldIcon, SparkleIcon } from "./Icons";

export default function Services() {
  return (
    <section id="servicos" className="py-28 sm:py-36 bg-cream relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-24">
          <span className="text-[11px] tracking-[0.25em] uppercase text-blush-400 font-medium">
            Tratamentos
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Da clínica ao{" "}
            <em className="text-teal-700 not-italic">ritual de cuidado</em>.
          </h2>
          <p className="mt-6 text-ink-soft text-lg leading-relaxed">
            Dois universos que se encontram em um só lugar: a saúde técnica que
            seus pés precisam e a estética que sua autoestima merece.
          </p>
        </div>

        {/* Clínica */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-full bg-teal-700 flex items-center justify-center shadow-lg shadow-teal-700/20">
              <ShieldIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[11px] tracking-[0.22em] uppercase text-teal-500">
                Categoria Clínica
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink leading-tight">
                Podologia Clínica
              </h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clinicalServices.map((s, i) => (
              <article
                key={s.title}
                className="group bg-white rounded-2xl p-7 border border-teal-100/50 hover:border-teal-300/60 hover:shadow-xl hover:shadow-teal-700/8 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] tracking-widest text-teal-500 font-mono">
                    0{i + 1}
                  </span>
                  <LeafIcon className="w-4 h-4 text-teal-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-serif text-xl text-ink leading-snug group-hover:text-teal-700 transition-colors">
                  {s.title}
                </h4>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Estética */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-full bg-blush-400 flex items-center justify-center shadow-lg shadow-blush-400/20">
              <SparkleIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[11px] tracking-[0.22em] uppercase text-blush-400">
                Categoria Estética
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink leading-tight">
                Estética & Bem-estar
              </h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aestheticServices.map((s, i) => (
              <article
                key={s.title}
                className="group bg-white rounded-2xl p-7 border border-blush-100/60 hover:border-blush-300/60 hover:shadow-xl hover:shadow-blush-400/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] tracking-widest text-blush-400 font-mono">
                    0{i + 1}
                  </span>
                  <SparkleIcon className="w-4 h-4 text-blush-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-serif text-xl text-ink leading-snug group-hover:text-blush-500 transition-colors">
                  {s.title}
                </h4>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <a
            href={waLink(
              "Olá Fátima! Gostaria de tirar uma dúvida sobre os tratamentos."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-ink hover:text-teal-700 transition-colors font-medium border-b border-teal-200/60 hover:border-teal-700 pb-1"
          >
            Tem dúvida sobre qual é o ideal para você? Fale comigo
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
