import { waLink } from "../data";
import { ArrowRightIcon, SparkleIcon } from "./Icons";

const steps = [
  {
    n: "01",
    title: "Avaliação",
    desc: "Escuta atenta e diagnóstico cuidadoso da condição dos seus pés.",
  },
  {
    n: "02",
    title: "Tratamento",
    desc: "Procedimento clínico preciso, indolor e com biossegurança total.",
  },
  {
    n: "03",
    title: "Resultado",
    desc: "Pés saudáveis, leves e bonitos — com orientações para manter.",
  },
];

export default function Transformation() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/aesthetic-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/92 to-teal-50/90 backdrop-blur-[2px]"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-blush-400 font-medium">
            <SparkleIcon className="w-4 h-4" />
            Sua jornada de cuidado
          </span>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Da primeira consulta ao{" "}
            <em className="text-teal-700 not-italic">resultado que transforma</em>.
          </h2>
        </div>

        <ol className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-[42px] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-blush-300/50 to-transparent"
          />
          {steps.map((s) => (
            <li
              key={s.n}
              className="group relative bg-cream/85 backdrop-blur rounded-3xl p-8 sm:p-9 border border-teal-100/40 text-center hover:border-blush-300/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/8 transition-all duration-300"
            >
              <div className="relative mx-auto w-20 h-20 rounded-full bg-teal-50 group-hover:bg-teal-700 flex items-center justify-center mb-6 transition-colors duration-300">
                <span className="font-serif text-2xl text-teal-700 group-hover:text-white transition-colors duration-300">{s.n}</span>
              </div>
              <h3 className="font-serif text-2xl text-ink">{s.title}</h3>
              <p className="mt-3 text-ink-soft text-sm leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 text-center">
          <a
            href={waLink("Olá Fátima! Quero começar minha jornada de cuidado.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#1EB858] hover:-translate-y-0.5 transition-all shadow-lg shadow-emerald-900/25 hover:shadow-xl hover:shadow-emerald-900/30"
          >
            Começar minha jornada
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
