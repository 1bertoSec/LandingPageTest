import type { Metadata } from "next";
import { VersionSwitcher } from "@/components/site/version-switcher";

export const metadata: Metadata = {
  title: "Moderno-tech (V3)",
  description:
    "Espaço DuoVitta — proposta visual V3: ousada, escura, com componentes animados reforçando tecnologia e ciência.",
};

export default function V3Layout({ children }: LayoutProps<"/v3">) {
  return (
    <div className="theme-v3 flex min-h-screen flex-col bg-background text-foreground">
      {children}
      <VersionSwitcher />
    </div>
  );
}
