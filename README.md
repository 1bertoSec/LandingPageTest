# Espaço DuoVitta — 3 propostas de landing page

Três conceitos visuais da **mesma** landing page, cada um em uma rota, para
apresentação ao cliente.

| Rota  | Conceito         | Identidade                                                                         |
| ----- | ---------------- | ---------------------------------------------------------------------------------- |
| `/`   | Índice           | Comparativo das três propostas (uso interno, `noindex`)                             |
| `/v1` | Clínico-premium  | Verde-petróleo escuro + dourado, títulos serifados (Cormorant), quase sem animação  |
| `/v2` | Acolhedor-humano | Claro em tons nude, cantos arredondados (Quicksand/Nunito), foco em fotos           |
| `/v3` | Moderno-tech     | Escuro azulado + ciano, geométrico (Space Grotesk), hero animado (React Bits)       |

As três compartilham estrutura, textos e CTAs — o que muda é só a identidade
visual. Uma barra flutuante no rodapé permite alternar entre elas durante a
apresentação.

## Rodando

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run lint
```

## Como o tema funciona

Todo o conteúdo vive em [`src/lib/clinic.ts`](src/lib/clinic.ts) — uma única
fonte para as três versões. A troca de identidade visual acontece por escopo de
CSS: cada layout de rota envolve a página em `.theme-v1` / `.theme-v2` /
`.theme-v3`, definidos em [`src/app/globals.css`](src/app/globals.css). Como os
componentes shadcn leem `var(--primary)`, `var(--card)`, `var(--radius)` etc.,
redefinir essas variáveis dentro do escopo re-tematiza a página inteira sem
duplicar um único componente. As fontes seguem o mesmo mecanismo, via
`--font-sans` e `--font-heading-family`.

## Componentes

**shadcn/ui** (`npx shadcn@latest add`): `button`, `card`, `accordion`, `badge`,
`separator`, `avatar` — em `src/components/ui/`.

**React Bits** (via registry do shadcn CLI), em `src/components/`:

```bash
npx shadcn@latest add "https://reactbits.dev/r/SplitText-TS-TW"
npx shadcn@latest add "https://reactbits.dev/r/Aurora-TS-TW"
```

Ambos são usados só no hero da `/v3`, através de wrappers em
`src/components/site/` que adicionam `"use client"`, carregamento client-only e
fallback para `prefers-reduced-motion`:

- `AnimatedHeadline` → SplitText (entrada do título caractere a caractere)
- `AuroraBackdrop` → Aurora (shader WebGL de fundo)

> O SplitText depende do plugin `SplitText` do GSAP, gratuito para uso comercial
> desde o GSAP 3.13.

### 21st.dev — não instalado

A regra original pedia os componentes de estrutura via CLI do 21st.dev. **O
registry do 21st.dev passou a exigir autenticação** e responde `403
authentication_required` a qualquer `npx shadcn add https://21st.dev/r/...`,
inclusive nos componentes públicos. Não há chave no ambiente, e o plano gratuito
limita a 2 instalações por dia.

Os componentes de estrutura foram instalados do **registry oficial do
shadcn/ui** — a mesma base sobre a qual o 21st.dev distribui. Para trocar por
blocos do 21st.dev depois, gere uma chave em <https://21st.dev/mcp> e rode:

```bash
npx shadcn@latest add "https://21st.dev/r/<autor>/<componente>"
```

## Pendências antes de publicar

| O quê                                                                             | Onde                                                                     |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Fotos** — todas de banco de imagens livre (Unsplash), nenhuma é de paciente      | cada uso tem `// TODO: substituir por foto autorizada da clínica`         |
| **Depoimentos** — fictícios, marcados `[PLACEHOLDER]`                              | `testimonials` em `src/lib/clinic.ts`                                     |
| **Horário de funcionamento** — suposição, marcada como placeholder                 | `openingHours` em `src/lib/clinic.ts`                                     |
| **Mapa** — placeholder no lugar do embed                                           | `src/components/site/map-placeholder.tsx` (instruções no comentário)      |

Quando o cliente escolher uma versão: remova as outras duas rotas, o
`VersionSwitcher` e a página índice, e promova a escolhida para `/`.

## Deploy (Netlify)

Sem variáveis de ambiente obrigatórias. `netlify.toml` já define build e versão
do Node; o Netlify detecta o Next.js e aplica o `@netlify/plugin-nextjs`
sozinho.

As imagens vêm de `images.unsplash.com`, liberado em `next.config.ts`
(`remotePatterns`). Quando as fotos da clínica entrarem em `public/`, esse bloco
pode sair.

## Privacidade

Sem formulário, sem captura de dados e sem gateway de pagamento — todos os CTAs
levam para WhatsApp ou Instagram, como pedido.
