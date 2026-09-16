"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/**
 * Wrapper do componente Aurora do React Bits (src/components/Aurora.tsx).
 *
 * O Aurora é um shader WebGL rodando em requestAnimationFrame. Como a maior
 * parte do tráfego desta clínica vem de mobile, ele é:
 *   - carregado só no cliente (sem SSR, evita pagar ogl no HTML inicial);
 *   - desligado quando o sistema pede "prefers-reduced-motion: reduce";
 *   - substituído por um gradiente CSS estático nesses casos, para a seção
 *     nunca ficar visualmente vazia.
 */
const Aurora = dynamic(() => import("@/components/Aurora"), { ssr: false });

export function AuroraBackdrop() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(!query.matches);

    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  if (!enabled) {
    // Sem o shader, o fundo do hero ficava chapado. Duas manchas de cor
    // sobrepostas dão a mesma leitura visual do Aurora, sem nada em movimento.
    return (
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/3 left-1/2 size-[140%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,var(--color-primary)_0%,transparent_60%)] opacity-30" />
        <div className="absolute -top-1/4 left-[15%] size-[90%] bg-[radial-gradient(ellipse_at_center,var(--color-accent)_0%,transparent_65%)] opacity-25" />
      </div>
    );
  }

  return (
    <div aria-hidden className="absolute inset-0 opacity-60">
      <Aurora
        colorStops={["#0ea5a4", "#7c5cff", "#22d3ee"]}
        amplitude={0.9}
        blend={0.6}
        speed={0.4}
      />
    </div>
  );
}
