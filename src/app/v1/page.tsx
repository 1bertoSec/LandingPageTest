import Link from "next/link";
import { ArrowRight, Check, Clock, MapPin } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/site/brand-icons";
import { MapPlaceholder } from "@/components/site/map-placeholder";
import { ServiceIcon } from "@/components/site/service-icon";
import { StockImage } from "@/components/site/stock-image";
import {
  aboutParagraphs,
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
/*  V1 — "Clínico-premium"                                                    */
/*  Verde-petróleo escuro, dourado, títulos serifados, poucos elementos        */
/*  animados. A hierarquia é construída por espaço e tipografia, não por cor.  */
/* -------------------------------------------------------------------------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-primary">
      {children}
    </p>
  );
}

export default function V1Page() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <span className="font-heading text-lg tracking-wide sm:text-xl">
            Espaço <span className="text-primary">DuoVitta</span>
          </span>
          <Button asChild size="sm" className="rounded-none">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Agendar avaliação
            </a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* ---------------------------------------------------------------- */}
        {/* 1. Hero                                                          */}
        {/* ---------------------------------------------------------------- */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            {/* TODO: substituir por foto autorizada da clínica (ambiente ou equipamento) */}
            <StockImage
              src="https://images.unsplash.com/photo-1631730486572-226d1f595b68"
              alt=""
              sizes="100vw"
              priority
              className="opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/92 to-background" />
          </div>

          <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
            <div className="max-w-2xl">
              <SectionLabel>Estética avançada · São Caetano do Sul</SectionLabel>

              <h1 className="mt-6 font-heading text-[2.75rem] font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Espaço
                <br />
                <span className="text-primary">DuoVitta</span>
              </h1>

              <p className="mt-7 max-w-lg font-heading text-xl italic leading-relaxed text-foreground/85 sm:text-2xl">
                “{clinic.tagline}”
              </p>

              <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">
                Protocolos conduzidos por {clinic.professional.name},{" "}
                {clinic.professional.role.toLowerCase()}. Cada tratamento começa
                por uma avaliação — nunca por um pacote pronto.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-none px-8 text-sm tracking-wide"
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agendar avaliação
                    <ArrowRight className="size-4" aria-hidden />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-none border-border px-8 text-sm tracking-wide"
                >
                  <a
                    href={clinic.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver no Instagram
                  </a>
                </Button>
              </div>

              <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-8">
                {[
                  { value: "10", label: "tratamentos" },
                  { value: "2", label: "tecnologias de ponta" },
                  { value: "1:1", label: "avaliação individual" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-heading text-3xl text-primary">
                        {stat.value}
                      </span>
                      <span className="mt-1 block text-[0.7rem] uppercase tracking-[0.15em] text-muted-foreground">
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
          className="border-t border-border/60 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden lg:sticky lg:top-28 lg:self-start">
              {/* TODO: substituir por foto autorizada da clínica (retrato da Dra. Graciele) */}
              <StockImage
                src={clinic.professional.photo}
                alt={clinic.professional.photoAlt}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="grayscale-[35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>

            <div>
              <SectionLabel>Sobre</SectionLabel>
              <h2 className="mt-5 font-heading text-4xl font-light leading-tight sm:text-5xl">
                Autoestima não se resgata com promessa.
                <br />
                <span className="text-primary">Resgata-se com método.</span>
              </h2>

              <div className="mt-8 space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>

              <Separator className="my-10 bg-border/60" />

              <div className="flex items-start gap-4">
                <div className="mt-1 h-px w-10 shrink-0 bg-primary" aria-hidden />
                <div>
                  <p className="font-heading text-xl">
                    {clinic.professional.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {clinic.professional.role} · Responsável técnica
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
          className="border-t border-border/60 bg-secondary/25 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <SectionLabel>Tratamentos</SectionLabel>
              <h2 className="mt-5 font-heading text-4xl font-light leading-tight sm:text-5xl">
                O que fazemos
              </h2>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                Dez linhas de tratamento facial e corporal. A indicação — e a
                combinação entre elas — sai da avaliação inicial.
              </p>
            </div>

            {/*
              Lista editorial em vez de grade de cards: 10 itens numa grade de 3
              colunas deixariam 2 células vazias, e cards de tamanho idêntico
              achatam a hierarquia. Aqui o numeral e a régua fina fazem o ritmo,
              e o nome do tratamento ganha escala tipográfica de verdade.
            */}
            <ol className="mt-14">
              {services.map((service, index) => (
                <li key={service.slug}>
                  <article className="group grid grid-cols-[2.5rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-2 border-t border-border/60 py-7 transition-colors hover:border-primary/40 sm:grid-cols-[3.5rem_minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-x-8 lg:grid-cols-[4.5rem_minmax(0,0.8fr)_minmax(0,1.2fr)]">
                    <span
                      aria-hidden
                      className="font-heading text-sm tabular-nums text-primary/70 transition-colors group-hover:text-primary"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="flex items-baseline gap-3 font-heading text-2xl font-light leading-snug sm:text-[1.75rem]">
                      {service.name}
                      <ServiceIcon
                        name={service.icon}
                        className="size-4 shrink-0 translate-y-px text-primary/50 transition-colors group-hover:text-primary"
                      />
                    </h3>

                    <p className="col-start-2 text-sm leading-relaxed text-muted-foreground sm:col-start-3">
                      {service.short}
                    </p>
                  </article>
                </li>
              ))}
            </ol>
            <div className="border-t border-border/60" />
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 4. Diferenciais / Tecnologia                                     */}
        {/* ---------------------------------------------------------------- */}
        <section
          id="tecnologia"
          className="border-t border-border/60 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <SectionLabel>Tecnologia</SectionLabel>
              <h2 className="mt-5 font-heading text-4xl font-light leading-tight sm:text-5xl">
                Equipamento não é adorno.
                <br />
                <span className="text-primary">É critério.</span>
              </h2>
            </div>

            <div className="mt-14 space-y-px">
              {technologies.map((tech, index) => (
                <article
                  key={tech.name}
                  className="grid items-center gap-8 border-t border-border/60 py-12 lg:grid-cols-2 lg:gap-16"
                >
                  <div
                    className={
                      index % 2 === 1 ? "lg:order-2" : undefined
                    }
                  >
                    <p className="font-heading text-sm uppercase tracking-[0.2em] text-primary">
                      0{index + 1}
                    </p>
                    <h3 className="mt-4 font-heading text-3xl font-light sm:text-4xl">
                      {tech.headline}
                    </h3>
                    <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                      {tech.description}
                    </p>
                    <ul className="mt-7 space-y-3">
                      {tech.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-sm"
                        >
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            strokeWidth={2}
                            aria-hidden
                          />
                          <span className="text-foreground/85">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* TODO: substituir por foto autorizada da clínica (equipamento real) */}
                    <StockImage
                      src={tech.image}
                      alt={tech.imageAlt}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="grayscale-[25%]"
                    />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-px border-t border-border/60 pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {differentials.map((item) => (
                <div key={item.title} className="py-4">
                  <ServiceIcon
                    name={item.icon}
                    className="size-5 text-primary"
                  />
                  <h3 className="mt-4 font-heading text-xl font-light">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 5. Prova social                                                  */}
        {/* ---------------------------------------------------------------- */}
        <section className="border-t border-border/60 bg-secondary/25 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionLabel>Depoimentos</SectionLabel>
            <h2 className="mt-5 max-w-2xl font-heading text-4xl font-light leading-tight sm:text-5xl">
              Quem passou por aqui
            </h2>

            {/* Aviso obrigatório enquanto os depoimentos forem fictícios. */}
            {TESTIMONIALS_ARE_FICTIONAL && (
              <p className="mt-6 max-w-2xl border-l-2 border-primary/50 py-1 pl-4 text-xs leading-relaxed text-muted-foreground">
                <span className="font-medium text-primary">
                  Conteúdo fictício ·{" "}
                </span>
                {TESTIMONIALS_DISCLAIMER}
              </p>
            )}

            <div className="mt-12 grid gap-10 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.quote.slice(0, 50)}
                  className="border-t border-primary/40 pt-7"
                >
                  <blockquote className="font-heading text-lg font-light italic leading-relaxed text-foreground/90">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="mt-6 text-sm">
                    <span className="block font-medium">
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
        {/* Dúvidas frequentes (accordion shadcn)                            */}
        {/* ---------------------------------------------------------------- */}
        <section className="border-t border-border/60 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <div>
              <SectionLabel>Dúvidas frequentes</SectionLabel>
              <h2 className="mt-5 font-heading text-4xl font-light leading-tight sm:text-5xl">
                Antes de agendar
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Não encontrou a sua dúvida? Chame no WhatsApp — a resposta vem
                da própria responsável técnica.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${index}`}
                  className="border-border/60"
                >
                  <AccordionTrigger className="text-left font-heading text-lg font-light hover:no-underline">
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
          className="border-t border-border/60 bg-secondary/25 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionLabel>Agende</SectionLabel>
              <h2 className="mt-5 font-heading text-4xl font-light leading-tight sm:text-5xl">
                Comece pela avaliação
              </h2>
              <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                Uma conversa para entender a sua pele, o seu histórico e o que é
                possível alcançar com segurança. A partir dela, o protocolo.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-none px-7 text-sm tracking-wide"
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
                  className="h-12 rounded-none border-border px-7 text-sm tracking-wide"
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

              <address className="mt-10 space-y-3 not-italic text-sm text-muted-foreground">
                <p className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <span>{clinic.address.full}</span>
                </p>
                <p className="flex items-start gap-3">
                  <Clock
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    strokeWidth={1.5}
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

            <MapPlaceholder className="rounded-none" />
          </div>
        </section>
      </main>

      {/* ------------------------------------------------------------------ */}
      {/* 7. Rodapé                                                          */}
      {/* ------------------------------------------------------------------ */}
      <footer className="border-t border-border/60 px-5 pb-28 pt-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <p className="font-heading text-xl">
                Espaço <span className="text-primary">DuoVitta</span>
              </p>
              <p className="mt-3 max-w-xs font-heading text-sm italic text-muted-foreground">
                “{clinic.tagline}”
              </p>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                {clinic.professional.name} — {clinic.professional.role}
                <br />
                Responsável técnica
              </p>
            </div>

            <div>
              <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-primary">
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
              <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-primary">
                Horário
              </h3>
              <dl className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {openingHours.map((entry) => (
                  <div key={entry.days} className="flex justify-between gap-4">
                    <dt>{entry.days}</dt>
                    <dd className="text-right text-foreground/80">
                      {entry.hours}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs opacity-70">
                [PLACEHOLDER - confirmar horário real]
              </p>

              <h3 className="mt-8 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-primary">
                Redes
              </h3>
              <div className="mt-4 flex gap-3">
                <a
                  href={clinic.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram ${clinic.social.instagram.handle}`}
                  className="flex size-9 items-center justify-center border border-border/60 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <InstagramIcon size={17} />
                </a>
                <a
                  href={clinic.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Facebook ${clinic.social.facebook.handle}`}
                  className="flex size-9 items-center justify-center border border-border/60 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <FacebookIcon size={17} />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex size-9 items-center justify-center border border-border/60 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <WhatsAppIcon size={17} />
                </a>
              </div>
            </div>
          </div>

          <Separator className="my-10 bg-border/60" />

          <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
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
