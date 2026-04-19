import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "../data";
import { ArrowRightIcon, StarIcon } from "./Icons";

const AUTOPLAY_MS = 5000;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;
  const sectionRef = useRef<HTMLElement>(null);

  const next = useCallback(() => setActive((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setActive((p) => (p - 1 + total) % total), [total]);

  // Autoplay com pausa em hover/foco
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [next, paused]);

  // Pausa quando aba não está visível (UX + perf)
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // Navegação por teclado quando seção está em foco
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
  };

  return (
    <section
      ref={sectionRef}
      id="depoimentos"
      className="py-28 sm:py-36 relative bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] tracking-[0.25em] uppercase text-teal-700 font-medium">
              Quem Já Sentiu, Recomenda
            </span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
              Histórias de quem voltou a{" "}
              <em className="text-teal-700 not-italic">caminhar leve</em>.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex text-champagne">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5" />
              ))}
            </div>
            <div className="text-sm">
              <div className="font-medium text-ink">5,0 no Google</div>
              <div className="text-mute text-xs">Avaliações reais de pacientes</div>
            </div>
          </div>
        </div>

        {/* Carrossel controlado */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onKeyDown={onKeyDown}
          tabIndex={0}
          role="region"
          aria-roledescription="carrossel"
          aria-label="Depoimentos de pacientes"
        >
          {/* Viewport */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <article
                  key={t.name}
                  className="w-full shrink-0 px-2 sm:px-4"
                  aria-hidden={active !== i}
                  aria-roledescription="slide"
                  aria-label={`${i + 1} de ${total}`}
                >
                  <div className="mx-auto max-w-3xl bg-cream rounded-3xl p-8 sm:p-12 border border-teal-100/50 shadow-xl shadow-teal-900/8 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="flex text-champagne">
                          {[...Array(5)].map((_, j) => (
                            <StarIcon key={j} className="w-4 h-4" />
                          ))}
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-mute">
                          Google
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-teal-700 bg-teal-50 rounded-full px-3 py-1">
                        {t.highlight}
                      </span>
                    </div>

                    <p className="font-serif text-2xl sm:text-3xl lg:text-[2rem] text-ink leading-[1.25] flex-1">
                      <span className="text-teal-300 font-serif text-5xl leading-none align-top mr-1">"</span>
                      {t.text} <span aria-hidden="true">{t.emoji}</span>
                    </p>

                    <footer className="mt-8 pt-6 border-t border-ink/5 flex items-center justify-between">
                      <div>
                        <div className="font-medium text-ink">{t.name}</div>
                        <div className="text-xs text-mute">{t.when}</div>
                      </div>
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blush-200 to-teal-200 flex items-center justify-center text-teal-700 text-sm font-serif">
                        {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                      </div>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Setas — discretas, sofisticadas */}
          <button
            onClick={prev}
            aria-label="Depoimento anterior"
            className="group absolute left-0 sm:-left-3 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-teal-200/60 shadow-md shadow-teal-900/8 flex items-center justify-center hover:bg-teal-700 hover:border-teal-700 hover:shadow-lg hover:shadow-teal-700/20 transition-all"
          >
            <ArrowRightIcon className="w-4 h-4 text-ink group-hover:text-cream rotate-180 transition-colors" />
          </button>
          <button
            onClick={next}
            aria-label="Próximo depoimento"
            className="group absolute right-0 sm:-right-3 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-teal-200/60 shadow-md shadow-teal-900/8 flex items-center justify-center hover:bg-teal-700 hover:border-teal-700 hover:shadow-lg hover:shadow-teal-700/20 transition-all"
          >
            <ArrowRightIcon className="w-4 h-4 text-ink group-hover:text-cream transition-colors" />
          </button>

          {/* Indicadores discretos + contador */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <div className="flex gap-2" role="tablist" aria-label="Selecionar depoimento">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  role="tab"
                  aria-selected={active === i}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    active === i
                      ? "w-10 bg-teal-700"
                      : "w-1.5 bg-ink/15 hover:bg-ink/30"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-mute font-mono tabular-nums">
              {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
