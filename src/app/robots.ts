import type { MetadataRoute } from "next";

/**
 * Enquanto o deploy for o protótipo de apresentação, nenhuma rota deve ser
 * indexada: são três versões quase idênticas da mesma página, com fotos de
 * banco de imagens e depoimentos fictícios. Indexar isso geraria conteúdo
 * duplicado e colocaria material de rascunho no nome da clínica.
 *
 * TODO: quando a versão escolhida virar o site definitivo, liberar a indexação
 * aqui e remover o `robots` dos layouts de rota.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
  };
}
