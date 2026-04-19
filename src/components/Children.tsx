import { waLink } from "../data";
import { HeartHandIcon, WhatsAppIcon } from "./Icons";

export default function Children() {
  return (
    <section id="infantil" className="py-28 sm:py-36 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blush-100 to-teal-50 -rotate-2"
              />
              <div className="relative h-full rounded-[2.5rem] overflow-hidden ring-1 ring-blush-200/60 shadow-xl">
                <img
                  src="/images/baby-soft.jpg"
                  alt="Atmosfera delicada de cuidado infantil — manta branca macia com sapatinho rosa"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* tag */}
              <div className="absolute top-6 -right-3 sm:right-4 bg-white rounded-full px-4 py-2 shadow-lg border border-blush-200/60 flex items-center gap-2">
                <HeartHandIcon className="w-4 h-4 text-blush-400" />
                <span className="text-xs font-medium text-ink">Especialidade Infantil</span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-[11px] tracking-[0.25em] uppercase text-blush-400 font-medium">
              Para os Pequenos
            </span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
              A delicadeza que faz{" "}
              <em className="text-blush-400 not-italic">bebês não chorarem</em>.
            </h2>
            <p className="mt-6 text-ink-soft text-lg leading-relaxed max-w-xl">
              Atender crianças exige mais do que técnica — exige sensibilidade,
              ritmo certo e um toque que transmita segurança. Aqui, mães e pais
              encontram um cuidado pediátrico onde cada movimento é pensado para
              o conforto do pequeno.
            </p>

            <ul className="mt-8 space-y-3.5">
              {[
                "Procedimento indolor e sem trauma",
                "Ambiente acolhedor e seguro para a família",
                "Paciência e linguagem afetiva durante todo o atendimento",
                "Higiene clínica rigorosa para a pele sensível",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full bg-blush-400 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={waLink(
                "Olá Fátima! Gostaria de agendar um atendimento para o(a) meu/minha filho(a)."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#1EB858] hover:-translate-y-0.5 transition-all shadow-lg shadow-emerald-900/25 hover:shadow-xl hover:shadow-emerald-900/30"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Agendar atendimento infantil
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
