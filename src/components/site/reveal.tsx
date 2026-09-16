"use client";

import { useEffect, useState } from "react";
import AnimatedContent from "@/components/AnimatedContent";
import CountUp from "@/components/CountUp";

/**
 * Camada de movimento das três versões, sobre o AnimatedContent do React Bits.
 *
 * Cada versão tem um perfil próprio — o movimento é parte da identidade, não
 * um efeito genérico aplicado por igual:
 *
 *   "sober" (/v1)  deslocamento mínimo e duração longa. Lembra página impressa
 *                  sendo virada; combina com o conceito sóbrio e serifado.
 *   "warm"  (/v2)  entra crescendo de leve, com easing que ultrapassa e volta,
 *                  como algo se acomodando. Combina com o tom acolhedor.
 *   "tech"  (/v3)  deslocamento maior e saída rápida, mais assertivo.
 *
 * Em `prefers-reduced-motion: reduce` nada disso roda e o conteúdo é entregue
 * direto e visível — nunca deixamos texto presente e invisível esperando JS.
 */
type MotionLevel = "unknown" | "full" | "reduced";
export type MotionVariant = "sober" | "warm" | "tech";

const VARIANTS: Record<
  MotionVariant,
  { distance: number; duration: number; ease: string; scale: number }
> = {
  sober: { distance: 16, duration: 1, ease: "power2.out", scale: 1 },
  warm: { distance: 26, duration: 0.85, ease: "back.out(1.4)", scale: 0.97 },
  tech: { distance: 40, duration: 0.7, ease: "power3.out", scale: 1 },
};

function useMotionLevel(): MotionLevel {
  const [level, setLevel] = useState<MotionLevel>("unknown");

  useEffect(() => {
    const q = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setLevel(q.matches ? "reduced" : "full");
    sync();
    q.addEventListener("change", sync);
    return () => q.removeEventListener("change", sync);
  }, []);

  return level;
}

export function Reveal({
  children,
  className,
  variant = "tech",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: MotionVariant;
  /** Atraso em ms — use com o índice do item para escalonar uma lista. */
  delay?: number;
}) {
  const level = useMotionLevel();
  const preset = VARIANTS[variant];

  if (level !== "full") return <div className={className}>{children}</div>;

  return (
    <AnimatedContent
      className={className}
      distance={preset.distance}
      direction="vertical"
      duration={preset.duration}
      ease={preset.ease}
      scale={preset.scale}
      initialOpacity={0}
      animateOpacity
      threshold={0.12}
      delay={delay}
    >
      {children}
    </AnimatedContent>
  );
}

/**
 * Numeral que conta até o valor ao entrar na viewport (/v3).
 *
 * Em movimento reduzido renderiza o número final direto: a lib `motion`
 * respeita a preferência e pula a animação, o que deixaria o contador parado
 * no valor inicial — a página exibiria "0 tratamentos".
 */
export function Stat({
  to,
  suffix = "",
  className,
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const level = useMotionLevel();

  if (level !== "full") {
    return (
      <span className={className}>
        {to}
        {suffix}
      </span>
    );
  }

  return (
    <span className={className}>
      <CountUp to={to} duration={1.6} />
      {suffix}
    </span>
  );
}
