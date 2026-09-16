import Link from "next/link";
import { ArrowUpRight, Check, Clock, MapPin, Quote } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedHeadline } from "@/components/site/animated-headline";
import { AuroraBackdrop } from "@/components/site/aurora-backdrop";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/site/brand-icons";
import { MapPlaceholder } from "@/components/site/map-placeholder";
import { Reveal, Stat } from "@/components/site/reveal";
import { cn } from "@/lib/utils";
import { ServiceIcon } from "@/components/site/service-icon";
import { StockImage } from "@/components/site/stock-image";
import {
  clinic,
  differentials,
  faq,
  openingHours,
  services,
  technologies,
  TESTIMONIALS_ARE_FICTIONAL,
  TESTIMONIALS_DISCLAIMER,
  testimonials,
  whatsappUrl,
} from "@/lib/clinic";

/* -------------------------------------------------------------------------- */
/*  V3 — "Moderno-tech"                                                       */
/*  Escuro azulado, ciano elétrico + violeta, tipografia geométrica.           */
/*  Componentes animados do React Bits, todos com fallback para                */
/*  prefers-reduced-motion:                                                    */
/*    - Aurora          shader WebGL de fundo do hero (<AuroraBackdrop />)      */
/*    - SplitText       título entrando caractere a caractere                   */
/*                      (<AnimatedHeadline />)                                  */
/*    - CountUp         números do hero contando ao entrar na tela (<Stat />)   */
/*    - AnimatedContent entrada dos blocos ao rolar (<Reveal />)                */
/* -------------------------------------------------------------------------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5">
      <span
        aria-hidden
        className="size-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]"
      />
      <span className="font-heading text-[0.7rem] font-medium uppercase tracking-[0.18em] text-primary">
        {children}
      </span>
    </div>
  );
}

export default function V3Page() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <span className="font-heading text-lg font-bold tracking-tight sm:text-xl">
            Espaço<span className="text-primary">DuoVitta</span>
          </span>
          <Button asChild size="sm" className="font-heading font-semibold">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Agendar avaliação
            </a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* ---------------------------------------------------------------- */}
        {/* 1. Hero — React Bits: Aurora (fundo) + SplitText (título)        */}
        {/* ---------------------------------------------------------------- */}
        <section className="relative isolate overflow-hidden">
          <AuroraBackdrop />

          {/* Grade técnica sutil por cima do Aurora */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
          />

          <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
            <div className="max-w-3xl">
              <SectionLabel>Tecnologia · Ciência · Autoestima</SectionLabel>

              <h1 className="mt-7 font-heading text-[2.6rem] font-bold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
                <AnimatedHeadline text="Espaço DuoVitta" />
                <AnimatedHeadline
                  text="ciência aplicada à sua pele"
                  className="text-primary"
                  splitDelayMs={420}
                />
              </h1>

              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {clinic.tagline}. Protocolos definidos por avaliação, executados
                com equipamentos de referência e conduzidos por{" "}
                <span className="text-foreground">
                  {clinic.professional.name}
                </span>
                , {clinic.professional.role.toLowerCase()}.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-12 px-8 font-heading text-sm font-semibold shadow-[0_0_28px_-6px_var(--color-primary)]"
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar avaliação
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 border-border bg-card/40 px-8 font-heading text-sm font-semibold backdrop-blur"
                >
                  <a
                    href={clinic.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon size={18} />
                    {clinic.social.instagram.handle}
                  </a>
                </Button>
              </div>

              <div className="mt-14 flex flex-wrap gap-2.5">
                {["CO2 Fracionado", "Ultraformer III", "Jato de Plasma"].map(
                  (item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="border-border bg-card/50 px-3.5 py-1.5 font-heading text-xs font-medium backdrop-blur"
                    >
                      {item}
                    </Badge>
                  ),
                )}
              </div>

              {/* React Bits · CountUp — os números contam ao entrar na tela. */}
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  { to: 10, suffix: "", label: "tratamentos" },
                  { to: 2, suffix: "", label: "tecnologias de ponta" },
                  { to: 100, suffix: "%", label: "protocolo individual" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <Stat
                        to={stat.to}
                        suffix={stat.suffix}
                        className="block font-heading text-3xl font-bold tabular-nums text-primary sm:text-4xl"
                      />
                      <span className="mt-1.5 block text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 2. Sobre                                                         */}
        {/* ---------------------------------------------------------------- */}
        <section
          id="sobre"
          className="border-t border-border px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
            <div>
              <SectionLabel>Sobre</SectionLabel>
              <h2 className="mt-6 font-heading text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                Método antes de{" "}
                <span className="text-primary">promessa</span>
              </h2>

              <div className="mt-7 space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                <p>
                  O Espaço DuoVitta nasceu de uma convicção simples: autoestima
                  não se resgata com promessa, se resgata com método. Por isso
                  cada atendimento começa por uma avaliação — entender a sua
                  pele, o seu histórico e o que é possível alcançar com
                  segurança.
                </p>
                <p>
                  A formação em fisioterapia dermatofuncional coloca a fisiologia
                  no centro: entender como o tecido responde a cada estímulo é o
                  que permite escolher a tecnologia certa, na intensidade certa,
                  no momento certo.
                </p>
                <p>
                  Tecnologia e ciência não são adorno de marketing aqui — são o
                  critério de decisão.
                </p>
              </div>

              <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
                {differentials.map((item) => (
                  <div key={item.title} className="bg-card p-6">
                    <ServiceIcon
                      name={item.icon}
                      className="size-5 text-primary"
                    />
                    <h3 className="mt-3.5 font-heading text-base font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
                {/* TODO: substituir por foto autorizada da clínica (retrato da Dra. Graciele) */}
                <StockImage
                  src={clinic.professional.photo}
                  alt={clinic.professional.photoAlt}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-heading text-lg font-bold">
                    {clinic.professional.name}
                  </p>
                  <p className="mt-1 text-sm text-primary">
                    {clinic.professional.role}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Responsável técnica
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 3. Serviços                                                      */}
        {/* ---------------------------------------------------------------- */}
        <section
          id="servicos"
          className="border-t border-border px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <SectionLabel>Tratamentos</SectionLabel>
              <h2 className="mt-6 font-heading text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                Dez protocolos,
                <br />
                <span className="text-primary">uma indicação por vez</span>
              </h2>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                A combinação entre eles sai da avaliação inicial — não de um
                catálogo.
              </p>
            </div>

            {/*
              Bento de 4 colunas: os 2 carros-chefe ocupam 2 colunas cada
              (1 linha cheia) e os 8 restantes ocupam 1 (2 linhas cheias).
              Fecha exatamente em 3 linhas, sem a célula órfã que a grade de
              3 colunas deixava — e o destaque passa a ser informação.
            */}
            <Reveal className="mt-14">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
                {services.map((service, index) => {
                  const featured = index < 2;
                  return (
                    <Card
                      key={service.slug}
                      className={cn(
                        "group relative rounded-none border-0 bg-card shadow-none transition-colors hover:bg-secondary/60",
                        featured ? "col-span-2" : "col-span-1",
                      )}
                    >
                      <CardContent
                        className={cn(
                          "flex h-full flex-col gap-3",
                          featured ? "gap-4 p-8" : "p-6",
                        )}
                      >
                        <div className="flex items-start justify-between">
                          <span
                            className={cn(
                              "flex items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-shadow group-hover:shadow-[0_0_20px_-4px_var(--color-primary)]",
                              featured ? "size-12" : "size-10",
                            )}
                          >
                            <ServiceIcon
                              name={service.icon}
                              className={featured ? "size-6" : "size-5"}
                            />
                          </span>
                          <span className="font-heading text-xs tabular-nums text-muted-foreground/60">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h3
                          className={cn(
                            "font-heading font-semibold leading-snug",
                            featured ? "text-2xl" : "text-base",
                          )}
                        >
                          {service.name}
                        </h3>
                        <p
                          className={cn(
                            "leading-relaxed text-muted-foreground",
                            featured ? "text-[0.95rem]" : "text-sm",
                          )}
                        >
                          {service.short}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 4. Diferenciais / Tecnologia                                     */}
        {/* ---------------------------------------------------------------- */}
        <section
          id="tecnologia"
          className="relative border-t border-border px-5 py-20 sm:px-8 sm:py-28"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
          />
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <SectionLabel>Equipamentos</SectionLabel>
              <h2 className="mt-6 font-heading text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                A prova do investimento{" "}
                <span className="text-accent">está no aparelho</span>
              </h2>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                Dois equipamentos de referência, escolhidos por literatura e não
                por tendência.
              </p>
            </div>

            <Reveal className="mt-14">
             <div className="grid gap-6 lg:grid-cols-2">
              {technologies.map((tech, index) => (
                <Card
                  key={tech.name}
                  className="relative overflow-hidden rounded-2xl border-border bg-card py-0"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    {/* TODO: substituir por foto autorizada da clínica (equipamento real) */}
                    <StockImage
                      src={tech.image}
                      alt={tech.imageAlt}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    <span className="absolute left-6 top-6 font-heading text-xs tabular-nums text-primary">
                      {String(index + 1).padStart(2, "0")} / TECH
                    </span>
                  </div>
                  <CardContent className="px-7 pb-8 pt-2">
                    <h3 className="font-heading text-2xl font-bold tracking-tight">
                      {tech.headline}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {tech.description}
                    </p>
                    <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                      {tech.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2.5 text-sm"
                        >
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            strokeWidth={2.25}
                            aria-hidden
                          />
                          <span className="text-foreground/85">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
             </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 5. Prova social                                                  */}
        {/* ---------------------------------------------------------------- */}
        <section className="border-t border-border px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionLabel>Depoimentos</SectionLabel>
            <h2 className="mt-6 max-w-2xl font-heading text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Resultado que se conta
            </h2>

            {/* Aviso obrigatório enquanto os depoimentos forem fictícios. */}
            {TESTIMONIALS_ARE_FICTIONAL && (
              <p className="mt-6 max-w-2xl rounded-lg border border-primary/25 bg-primary/10 px-4 py-3 text-xs leading-relaxed text-muted-foreground">
                <span className="font-heading font-semibold uppercase tracking-wider text-primary">
                  Conteúdo fictício ·{" "}
                </span>
                {TESTIMONIALS_DISCLAIMER}
              </p>
            )}

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.quote.slice(0, 50)}
                  className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7"
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary/60 via-accent/40 to-transparent"
                  />
                  <Quote
                    className="size-7 text-primary/50"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground/90">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-5 text-sm">
                    <span className="block font-heading font-semibold">
                      {testimonial.author}
                    </span>
                    <span className="mt-0.5 block text-muted-foreground">
                      {testimonial.detail}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* Dúvidas frequentes                                               */}
        {/* ---------------------------------------------------------------- */}
        <section className="border-t border-border px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div>
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mt-6 font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Antes de agendar
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Não encontrou a sua dúvida? Chame no WhatsApp.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${index}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left font-heading text-base font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 6. CTA final                                                     */}
        {/* ---------------------------------------------------------------- */}
        <section
          id="contato"
          className="relative overflow-hidden border-t border-border px-5 py-20 sm:px-8 sm:py-28"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/12 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionLabel>Próximo passo</SectionLabel>
              <h2 className="mt-6 font-heading text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                Comece pela{" "}
                <span className="text-primary">avaliação</span>
              </h2>
              <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                Uma conversa para entender a sua pele, o seu histórico e o que é
                possível alcançar com segurança. A partir dela, o protocolo.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 px-7 font-heading text-sm font-semibold shadow-[0_0_28px_-6px_var(--color-primary)]"
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon size={18} />
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 border-border bg-card/40 px-7 font-heading text-sm font-semibold"
                >
                  <a
                    href={clinic.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon size={18} />
                    Instagram
                  </a>
                </Button>
              </div>

              <address className="mt-10 space-y-3 not-italic text-sm text-muted-foreground">
                <p className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span>{clinic.address.full}</span>
                </p>
                <p className="flex items-start gap-3">
                  <Clock
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span>
                    {openingHours[0].days}, {openingHours[0].hours}
                    <span className="mt-1 block text-xs opacity-70">
                      [PLACEHOLDER - confirmar horário real]
                    </span>
                  </span>
                </p>
              </address>
            </div>

            <MapPlaceholder className="rounded-2xl border-border bg-card/50" />
          </div>
        </section>
      </main>

      {/* ------------------------------------------------------------------ */}
      {/* 7. Rodapé                                                          */}
      {/* ------------------------------------------------------------------ */}
      <footer className="border-t border-border px-5 pb-28 pt-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <p className="font-heading text-xl font-bold tracking-tight">
                Espaço<span className="text-primary">DuoVitta</span>
              </p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {clinic.tagline}.
              </p>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                {clinic.professional.name} — {clinic.professional.role}
                <br />
                Responsável técnica
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href={clinic.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram ${clinic.social.instagram.handle}`}
                  className="flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                >
                  <InstagramIcon size={17} />
                </a>
                <a
                  href={clinic.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Facebook ${clinic.social.facebook.handle}`}
                  className="flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                >
                  <FacebookIcon size={17} />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                >
                  <WhatsAppIcon size={17} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
                Endereço
              </h3>
              <address className="mt-4 text-sm not-italic leading-relaxed text-muted-foreground">
                {clinic.address.street}
                <br />
                {clinic.address.district}
                <br />
                {clinic.address.city}/{clinic.address.state}
                <br />
                CEP {clinic.address.zip}
              </address>
            </div>

            <div>
              <h3 className="font-heading text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
                Horário
              </h3>
              <dl className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {openingHours.map((entry) => (
                  <div key={entry.days} className="flex justify-between gap-4">
                    <dt>{entry.days}</dt>
                    <dd className="text-right tabular-nums text-foreground/80">
                      {entry.hours}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs opacity-70">
                [PLACEHOLDER - confirmar horário real]
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-border pt-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {clinic.name}. Todos os direitos
              reservados.
            </p>
            <Link href="/" className="transition-colors hover:text-primary">
              Ver outras propostas visuais
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
