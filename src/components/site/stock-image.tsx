import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Todas as fotos do site são placeholders de banco de imagens livre (Unsplash).
 * Nenhuma delas é foto de paciente — cada ponto de uso carrega um
 * `// TODO: substituir por foto autorizada da clínica`.
 */
export function StockImage({
  src,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={`${src}?auto=format&fit=crop&w=1200&q=70`}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
    />
  );
}
