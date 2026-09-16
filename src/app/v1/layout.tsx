import type { Metadata } from "next";
import { VersionSwitcher } from "@/components/site/version-switcher";

export const metadata: Metadata = {
  title: "Clínico-premium (V1)",
  description:
    "Espaço DuoVitta — proposta visual V1: sóbria, escura, tipografia serifada.",
  // Protótipo de apresentação: três versões quase idênticas indexadas seriam
  // conteúdo duplicado, ainda por cima com fotos de banco e depoimentos
  // fictícios. Remover quando a versão escolhida virar o site definitivo.
  robots: { index: false, follow: false },
};

export default function V1Layout({ children }: LayoutProps<"/v1">) {
  return (
    <div className="theme-v1 flex min-h-screen flex-col bg-background text-foreground">
      {children}
      <VersionSwitcher />
    </div>
  );
}
