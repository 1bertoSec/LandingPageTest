"use client";

import { useEffect, useState } from "react";
import SplitText from "@/components/SplitText";
import { cn } from "@/lib/utils";

/**
 * Wrapper do componente SplitText do React Bits (src/components/SplitText.tsx),
 * usado no hero da /v3 para a entrada do título caractere a caractere.
 *
 * Duas decisões importantes aqui:
 *
 * 1. Renderiza sempre dentro de um <span class="block">, porque o SplitText
 *    aplica `inline-block` em si mesmo. Sem o wrapper, duas linhas do mesmo
 *    título disputariam a mesma linha de texto dependendo da largura da tela.
 *
 * 2. O conteúdo é phrasing content (span), então o chamador é quem coloca o
 *    <h1> em volta — mantém a semântica correta e permite animar duas linhas
 *    dentro de um único heading.
 *
 * O SplitText anima a partir de `opacity: 0`. Se a animação não puder rodar
 * (usuário com "prefers-reduced-motion", ou o GSAP falhar em carregar), o texto
 * ficaria invisível — por isso renderizamos o texto estático nesses casos em
 * vez de confiar no fallback do próprio componente.
 *
 * Evite gradiente com `bg-clip-text` no texto animado: o GSAP transforma cada
 * caractere em um span com `transform`, e o recorte do fundo não atravessa
 * esses filhos transformados. Use cor sólida.
 */
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
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setAnimate(true), splitDelayMs);
    return () => window.clearTimeout(timer);
  }, [splitDelayMs]);

  if (!animate) {
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
