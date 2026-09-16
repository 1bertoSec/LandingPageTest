import type { Metadata } from "next";
import { VersionSwitcher } from "@/components/site/version-switcher";

export const metadata: Metadata = {
  title: "Acolhedor-humano (V2)",
  description:
    "Espaço DuoVitta — proposta visual V2: clara, em tons nude, com tom próximo e caloroso.",
};

export default function V2Layout({ children }: LayoutProps<"/v2">) {
  return (
    <div className="theme-v2 flex min-h-screen flex-col bg-background text-foreground">
      {children}
      <VersionSwitcher />
    </div>
  );
}
