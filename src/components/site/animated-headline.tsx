"use client";

import { useEffect, useState } from "react";
import SplitText from "@/components/SplitText";
import { cn } from "@/lib/utils";

/**
 * Wrapper do componente SplitText do React Bits (src/components/SplitText.tsx),
 * usado no hero da /v3 para a entrada do título.
 *
 * Três estados, nesta ordem:
 *
 *   "static"  — antes de conhecer a preferência do usuário (inclui o HTML do
 *               servidor). O texto já está visível: nunca deixamos um título
 *               presente e invisível esperando JavaScript.
 *   "split"   — movimento completo, caractere a caractere via GSAP.
 *   "fade-in" / "fade-done" — com `prefers-reduced-motion: reduce`, o título
 *               não se divide (isso é movimento), mas entra com um fade de
 *               opacidade. Zerar toda a animação deixava o hero inerte para
 *               quem tem a preferência ligada — comum em Windows corporativo.
 *
 * Duas decisões de estrutura:
 *
 * 1. Renderiza dentro de <span class="block">, porque o SplitText aplica
 *    `inline-block` em si mesmo; sem isso duas linhas do mesmo título
 *    disputariam a mesma linha de texto.
 * 2. O conteúdo é phrasing content, então quem põe o <h1> em volta é o
 *    chamador — permite animar duas linhas dentro de um único heading.
 *
 * Evite gradiente com `bg-clip-text` no texto animado: o GSAP transforma cada
 * caractere em um span com `transform`, e o recorte do fundo não atravessa
 * esses filhos transformados. Use cor sólida.
 */
type State = "static" | "split";

export function AnimatedHeadline({
  text,
  className,
  delay = 28,
  splitDelayMs = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
  /** Atraso inicial, em ms, para encadear duas linhas do mesmo título. */
  splitDelayMs?: number;
}) {
  const [state, setState] = useState<State>("static");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const t = window.setTimeout(() => setState("split"), splitDelayMs);
    return () => window.clearTimeout(t);
  }, [splitDelayMs]);

  if (state !== "split") {
    return <span className={cn("block", className)}>{text}</span>;
  }

  return (
    <span className="block">
      <SplitText
        text={text}
        tag="span"
        className={className}
        delay={delay}
        duration={0.8}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 28 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="0px"
        textAlign="left"
      />
    </span>
  );
}
