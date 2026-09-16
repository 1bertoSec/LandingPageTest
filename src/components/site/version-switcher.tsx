"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const versions = [
  { href: "/v1", label: "V1", name: "Clínico-premium" },
  { href: "/v2", label: "V2", name: "Acolhedor-humano" },
  { href: "/v3", label: "V3", name: "Moderno-tech" },
];

/**
 * Barra de apresentação — permite alternar entre as três propostas durante a
 * reunião com o cliente. Não faz parte do site final: remover antes de publicar
 * a versão escolhida.
 */
export function VersionSwitcher() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] print:hidden">
      <nav
        aria-label="Alternar entre as versões da proposta"
        className="flex items-center gap-1 rounded-full border border-neutral-700/60 bg-neutral-900/90 p-1 text-neutral-300 shadow-xl backdrop-blur-md"
      >
        <Link
          href="/"
          className="rounded-full px-3 py-1.5 text-xs font-medium transition-colors hover:bg-white/10 hover:text-white"
        >
          Índice
        </Link>
        <span aria-hidden className="h-4 w-px bg-white/15" />
        {versions.map((version) => {
          const active = pathname === version.href;
          return (
            <Link
              key={version.href}
              href={version.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                active
                  ? "bg-white text-neutral-900"
                  : "hover:bg-white/10 hover:text-white",
              )}
            >
              <span className="sm:hidden">{version.label}</span>
              <span className="hidden sm:inline">
                {version.label} · {version.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
