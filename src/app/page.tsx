import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { clinic } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Propostas visuais — Espaço DuoVitta",
  description:
    "Três conceitos visuais da mesma landing page do Espaço DuoVitta, para apresentação ao cliente.",
  robots: { index: false, follow: false },
};

/**
 * Página de apresentação interna: reúne as três propostas lado a lado.
 * Não faz parte do site final — quando o cliente escolher uma versão, esta
 * rota (e o VersionSwitcher) saem, e a versão escolhida vira a raiz.
 */
const options = [
  {
    href: "/v1" as const,
    version: "V1",
    name: "Clínico-premium",
    pitch:
      "Verde-petróleo escuro como no Instagram da marca, títulos serifados e composição minimalista. Transmite autoridade técnica e ticket alto.",
    swatches: ["#12312f", "#1c4340", "#d8b374", "#f2efe8"],
    traits: ["Paleta escura", "Tipografia serifada", "Quase sem animação"],
  },
  {
    href: "/v2" as const,
    version: "V2",
    name: "Acolhedor-humano",
    pitch:
      "Tons nude e pastel, cantos bem arredondados e texto em primeira pessoa. Aproxima quem tem receio de procedimento estético.",
    swatches: ["#faf6f1", "#f0e2d7", "#c98b74", "#4a3b34"],
    traits: ["Paleta clara", "Tipografia arredondada", "Foco em fotos"],
  },
  {
    href: "/v3" as const,
    version: "V3",
    name: "Moderno-tech",
    pitch:
      "Escuro azulado com ciano elétrico e dois componentes animados do React Bits no hero. Reforça o discurso de tecnologia e ciência.",
    swatches: ["#0b1020", "#171f36", "#22d3ee", "#7c5cff"],
    traits: ["Paleta escura", "Tipografia geométrica", "Hero animado"],
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-5 py-16 sm:px-8 sm:py-24">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
        Apresentação de propostas
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
        {clinic.name}
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
        Três conceitos visuais da <strong>mesma</strong> landing page. Estrutura,
        textos e chamadas são idênticos nas três — o que muda é só a identidade
        visual. Abra cada uma e compare.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {options.map((option) => (
          <Link
            key={option.href}
            href={option.href}
            className="group flex flex-col rounded-2xl border border-neutral-200 p-6 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                {option.version}
              </span>
              <ArrowRight
                className="size-4 text-neutral-400 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </div>

            <h2 className="mt-3 text-xl font-semibold tracking-tight">
              {option.name}
            </h2>

            <div className="mt-4 flex gap-1.5" aria-hidden>
              {option.swatches.map((color) => (
                <span
                  key={color}
                  className="size-6 rounded-full ring-1 ring-black/10 dark:ring-white/15"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {option.pitch}
            </p>

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {option.traits.map((trait) => (
                <li
                  key={trait}
                  className="rounded-full bg-neutral-100 px-2.5 py-1 text-[0.7rem] text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
                >
                  {trait}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-dashed border-neutral-300 p-6 text-sm leading-relaxed text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
        <p className="font-medium text-neutral-900 dark:text-neutral-100">
          Antes de publicar
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>
            Trocar as fotos de banco de imagens pelas fotos autorizadas da
            clínica (cada ponto está marcado com <code>TODO</code>).
          </li>
          <li>
            Substituir os depoimentos fictícios por relatos reais com
            autorização por escrito — e então remover o aviso de
            &ldquo;conteúdo fictício&rdquo; da seção.
          </li>
          <li>Confirmar o horário de funcionamento e inserir o embed do mapa.</li>
        </ul>
      </div>
    </main>
  );
}
