"use client";

import { useEffect, useState } from "react";
import AnimatedContent from "@/components/AnimatedContent";
import CountUp from "@/components/CountUp";

/**
 * Wrappers dos componentes do React Bits usados na /v3.
 *
 * Os dois animam a partir de `opacity: 0`. Se a animação não rodar — usuário
 * com "prefers-reduced-motion", GSAP/motion falhando ao carregar — o conteúdo
 * ficaria invisível. Por isso cada wrapper decide no cliente se anima ou se
 * renderiza direto o conteúdo final, em vez de confiar no fallback interno.
 */
function usePrefersMotion() {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const q = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setOk(!q.matches);
    sync();
    q.addEventListener("change", sync);
    return () => q.removeEventListener("change", sync);
  }, []);

  return ok;
}

/** Entrada suave do bloco ao entrar na viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 40,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}) {
  const animate = usePrefersMotion();

  if (!animate) return <div className={className}>{children}</div>;

  return (
    <AnimatedContent
      className={className}
      distance={distance}
      direction="vertical"
      duration={0.7}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      threshold={0.15}
      delay={delay}
    >
      {children}
    </AnimatedContent>
  );
}

/** Numeral que conta até o valor quando entra na viewport. */
export function Stat({
  to,
  suffix = "",
  className,
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const animate = usePrefersMotion();

  if (!animate) {
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
