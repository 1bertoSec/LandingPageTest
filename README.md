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

### Por que não usamos o 21st.dev

O plano inicial previa os componentes de estrutura via CLI do 21st.dev, mas o
registry deles passou a exigir autenticação: qualquer
`npx shadcn add https://21st.dev/r/...` responde `403
authentication_required`, mesmo em componentes públicos. A chave sai de
<https://21st.dev/mcp> e o plano gratuito limita a 2 instalações por dia.

**Decisão: seguir sem o 21st.dev.** Os componentes vêm do registry oficial do
shadcn/ui — que é a mesma base sobre a qual o 21st.dev distribui, então não há
perda de qualidade nos primitivos (`button`, `card`, `accordion`, `badge`,
`separator`). O que o 21st.dev agregaria seriam blocos prontos mais elaborados,
não esses primitivos.

Se um dia fizer sentido puxar um bloco de lá, o caminho é gerar a chave e rodar
`npx shadcn@latest add "https://21st.dev/r/<autor>/<componente>"` — nada na
estrutura atual impede isso.

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
