import { MapPin } from "lucide-react";
import { clinic } from "@/lib/clinic";
import { cn } from "@/lib/utils";

/**
 * Placeholder do embed de mapa.
 *
 * TODO: substituir pelo iframe do Google Maps da clínica, por exemplo:
 *   <iframe
 *     src="https://www.google.com/maps/embed?pb=..."
 *     className="absolute inset-0 h-full w-full border-0"
 *     loading="lazy"
 *     title="Mapa do Espaço DuoVitta"
 *     referrerPolicy="no-referrer-when-downgrade"
 *   />
 * O embed do Google Maps não exige chave de API nem variável de ambiente.
 */
export function MapPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-lg border border-dashed bg-muted/40 sm:aspect-[16/9]",
        className,
      )}
    >
      {/* Grade decorativa, só para o placeholder parecer um mapa na apresentação */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:40px_40px]"
      />
      <div className="relative flex max-w-xs flex-col items-center gap-2 px-6 text-center">
        <MapPin className="size-7 text-primary" strokeWidth={1.5} aria-hidden />
        <p className="text-sm font-medium">[PLACEHOLDER - embed do mapa]</p>
        <p className="text-xs text-muted-foreground">{clinic.address.full}</p>
      </div>
    </div>
  );
}
