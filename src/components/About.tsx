import { BotanicalDivider, ClockIcon, HeartHandIcon, ShieldIcon } from "./Icons";

const pillars = [
  {
    icon: ClockIcon,
    title: "Anos de Experiência",
    desc: "Trajetória consolidada e centenas de pacientes atendidos com excelência.",
  },
  {
    icon: HeartHandIcon,
    title: "Cuidado Humanizado",
    desc: "Escuta atenta e procedimentos conduzidos com paciência e empatia.",
  },
  {
    icon: ShieldIcon,
    title: "Biossegurança Total",
    desc: "Instrumental esterilizado e protocolos clínicos rigorosos a cada atendimento.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-28 sm:py-36 relative bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <span className="text-[11px] tracking-[0.25em] uppercase text-blush-400 font-medium">
              A Profissional
            </span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
              Cuidar dos seus pés é, antes de tudo,
              <em className="text-teal-700 not-italic"> cuidar de você</em>.
            </h2>
            <BotanicalDivider className="w-44 my-8 text-blush-300/70" />
            <div className="space-y-5 text-ink-soft text-base sm:text-lg leading-relaxed max-w-2xl">
              <p>
                Sou <strong className="text-ink font-medium">Fátima Negreiros</strong>,
                podóloga em Solânea — PB, dedicada a oferecer um atendimento que une
                a precisão da técnica clínica ao acolhimento que cada pessoa merece.
              </p>
              <p>
                Acredito que cada pé carrega uma história — de cansaço, de dor,
                de busca por bem-estar. Meu compromisso é tratar essa história com
                respeito, paciência e resultado, seja você adulto, idoso ou bebê.
              </p>
            </div>

            <div className="mt-14 grid sm:grid-cols-3 gap-5">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="p-6 rounded-2xl bg-cream border border-teal-100/40 hover:border-blush-300/60 hover:shadow-lg hover:shadow-teal-900/5 hover:-translate-y-0.5 transition-all"
                >
                  <p.icon className="w-7 h-7 text-blush-400 mb-3" />
                  <h3 className="font-serif text-lg text-ink">{p.title}</h3>
                  <p className="text-sm text-ink-soft mt-1.5 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — quote / signature */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blush-100 via-white to-teal-100"
                aria-hidden="true"
              />
              <blockquote className="relative p-8 sm:p-10 rounded-[2rem] border border-teal-100/50">
                <span
                  className="font-serif text-7xl text-blush-300 leading-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="font-serif italic text-2xl sm:text-3xl text-ink leading-snug -mt-6">
                  Quando o paciente sai sorrindo e sem dor, sei que cumpri minha
                  missão — e isso é o que me move todos os dias.
                </p>
                <footer className="mt-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-700 to-blush-400 flex items-center justify-center text-white font-serif">
                    f
                  </div>
                  <div>
                    <div className="font-serif text-ink">Fátima Negreiros</div>
                    <div className="text-[11px] tracking-[0.18em] uppercase text-mute">
                      Podóloga
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
