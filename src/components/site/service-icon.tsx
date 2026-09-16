import {
  Activity,
  Flame,
  HeartPulse,
  Layers,
  Microscope,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Stethoscope,
  Sun,
  Syringe,
  Waves,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Mapa nome -> componente. Mantém `src/lib/clinic.ts` livre de JSX, para que os
 * dados possam ser reaproveitados por qualquer uma das três versões.
 */
const icons = {
  flame: Flame,
  waves: Waves,
  sun: Sun,
  snowflake: Snowflake,
  wind: Wind,
  layers: Layers,
  zap: Zap,
  syringe: Syringe,
  sparkles: Sparkles,
  "heart-pulse": HeartPulse,
  stethoscope: Stethoscope,
  microscope: Microscope,
  "shield-check": ShieldCheck,
  activity: Activity,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

export function ServiceIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} strokeWidth={1.5} aria-hidden />;
}
