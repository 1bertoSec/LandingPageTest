import Link from "next/link";
import { ArrowRight, Clock, Heart, MapPin, Quote } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/site/brand-icons";
import { MapPlaceholder } from "@/components/site/map-placeholder";
import { ServiceIcon } from "@/components/site/service-icon";
import { StockImage } from "@/components/site/stock-image";
import {
  ambience,
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
/*  V2 — "Acolhedor-humano"                                                   */
/*  Paleta clara em tons nude, cantos muito arredondados, tipografia           */
/*  arredondada (Quicksand/Nunito) e texto em primeira pessoa. O peso visual   */
/*  vai para fotos de ambiente e equipe, não para o equipamento.               */
/* -------------------------------------------------------------------------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Badge
      variant="secondary"
      className="rounded-full bg-accent px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wider text-accent-foreground"
    >
      {children}
    </Badge>
  );
}

export default function V2Page() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <span className="font-heading text-lg font-bold tracking-tight sm:text-xl">
            Espaço <span className="text-primary">DuoVitta</span>
          </span>
          <Button asChild size="sm" className="rounded-full font-semibold">
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
        <section className="relative overflow-hidden px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
          {/* Manchas pastel de fundo — o "aconchego" vem daqui */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-32 size-[28rem] rounded-full bg-accent/60 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 top-40 size-[24rem] rounded-full bg-primary/10 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionLabel>São Caetano do Sul · SP</SectionLabel>

              <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Você merece se olhar no espelho e{" "}
                <span className="text-primary">gostar do que vê</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                No Espaço DuoVitta a gente acredita que autoestima se resgata com
                cuidado de verdade: {clinic.tagline.toLowerCase()}. Vem tomar um
                café e conversar sobre a sua pele — sem compromisso.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  asChild
                  size="lg"
                  className="h-13 rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/20"
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
                  variant="ghost"
                  className="h-13 rounded-full px-6 text-base font-semibold text-foreground hover:bg-accent/60"
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

              <div className="mt-10 flex items-center gap-4 rounded-3xl bg-card p-4 shadow-sm ring-1 ring-border/70 sm:max-w-md">
                <div className="relative size-14 shrink-0 overflow-hidden rounded-full">
                  {/* TODO: substituir por foto autorizada da clínica (retrato da Dra. Graciele) */}
                  <StockImage
                    src={clinic.professional.photo}
                    alt={clinic.professional.photoAlt}
                    sizes="56px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold">{clinic.professional.name}</p>
                  <p className="text-xs leading-snug text-muted-foreground">
                    {clinic.professional.role} · quem vai cuidar de você
                  </p>
                </div>
              </div>
            </div>

            {/* Colagem de fotos de ambiente */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-[2rem] shadow-md">
                {/* TODO: substituir por foto autorizada da clínica (recepção real) */}
                <StockImage
                  src={ambience[0].image}
                  alt={ambience[0].alt}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-md">
                {/* TODO: substituir por foto autorizada da clínica (sala de procedimentos real) */}
                <StockImage
                  src={ambience[1].image}
                  alt={ambience[1].alt}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-md">
                {/* TODO: substituir por foto autorizada da clínica (equipe real) */}
                <StockImage
                  src={ambience[2].image}
                  alt={ambience[2].alt}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 2. Sobre                                                         */}
        {/* ---------------------------------------------------------------- */}
        <section id="sobre" className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-secondary/70 p-7 sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
              <div>
                <SectionLabel>Prazer, somos o DuoVitta</SectionLabel>
                <h2 className="mt-6 font-heading text-3xl font-bold leading-tight sm:text-4xl">
                  Aqui ninguém te vende um pacote.{" "}
                  <span className="text-primary">A gente te escuta antes.</span>
                </h2>
                <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                  Sua primeira visita é uma conversa. Queremos entender a sua
                  rotina, o seu histórico e o que te incomoda de verdade — só
                  depois disso a gente fala em tratamento.
                </p>

                <div className="mt-8 flex items-center gap-3 rounded-2xl bg-card p-4 ring-1 ring-border/70">
                  <Heart
                    className="size-5 shrink-0 text-primary"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <p className="text-sm font-medium">
                    Avaliação sem compromisso, no seu tempo.
                  </p>
                </div>
              </div>

              <div className="space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                <p className="font-heading text-lg font-semibold text-foreground">
                  {clinic.professional.name}, {clinic.professional.role}
                </p>
                <p>
                  A formação em dermatofuncional coloca a fisiologia no centro:
                  entender como a sua pele responde a cada estímulo é o que
                  permite escolher o caminho certo, na intensidade certa, no
                  momento certo.
                </p>
                <p>
                  Tecnologia e ciência estão aqui a serviço de uma coisa só —
                  você sair daqui se sentindo bem. Equipamentos como CO2
                  Fracionado e Ultraformer III entram no plano quando fazem
                  sentido para o seu caso, nunca por padrão.
                </p>
                <p>
                  E se a resposta certa for &ldquo;esse tratamento não é para
                  você agora&rdquo;, é isso que a gente vai te dizer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 3. Serviços                                                      */}
        {/* ---------------------------------------------------------------- */}
        <section id="servicos" className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <SectionLabel>Nossos cuidados</SectionLabel>
              <h2 className="mt-6 font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Como a gente pode te ajudar
              </h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                São dez linhas de tratamento para rosto e corpo. Não precisa
                saber de qual você precisa — é justamente isso que a avaliação
                resolve.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.slug}
                  className="group overflow-hidden rounded-[1.75rem] border-border/70 bg-card py-0 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* TODO: substituir por foto autorizada da clínica */}
                    <StockImage
                      src={service.image}
                      alt={service.imageAlt}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="flex flex-col gap-3 px-6 pb-7 pt-5">
                    <div className="flex items-center gap-2.5">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <ServiceIcon name={service.icon} className="size-4.5" />
                      </span>
                      <h3 className="font-heading text-lg font-bold leading-snug">
                        {service.name}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.short}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 4. Diferenciais / Tecnologia                                     */}
        {/* ---------------------------------------------------------------- */}
        <section id="tecnologia" className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <SectionLabel>Tecnologia com propósito</SectionLabel>
              <h2 className="mt-6 font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Equipamento de ponta,{" "}
                <span className="text-primary">cuidado de perto</span>
              </h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                Investimos em tecnologia para que você tenha resultado com menos
                desconforto e menos tempo parada. Mas quem conduz continua sendo
                gente, olhando para o seu caso.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {technologies.map((tech) => (
                <Card
                  key={tech.name}
                  className="overflow-hidden rounded-[2rem] border-border/70 bg-card py-0 shadow-sm"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    {/* TODO: substituir por foto autorizada da clínica (equipamento real) */}
                    <StockImage
                      src={tech.image}
                      alt={tech.imageAlt}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <CardContent className="px-7 pb-8 pt-6">
                    <h3 className="font-heading text-2xl font-bold">
                      {tech.headline}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {tech.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {tech.highlights.map((highlight) => (
                        <li key={highlight}>
                          <Badge
                            variant="secondary"
                            className="rounded-full bg-accent/70 px-3 py-1 text-xs font-medium text-accent-foreground"
                          >
                            {highlight}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {differentials.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] bg-secondary/70 p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-card text-primary shadow-sm">
                    <ServiceIcon name={item.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-bold">
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
        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <SectionLabel>Depoimentos</SectionLabel>
              <h2 className="mt-6 font-heading text-3xl font-bold leading-tight sm:text-4xl">
                O que elas contam depois
              </h2>

              {/* Aviso obrigatório enquanto os depoimentos forem fictícios. */}
              {TESTIMONIALS_ARE_FICTIONAL && (
                <p className="mt-5 rounded-2xl bg-accent/60 px-5 py-3.5 text-xs leading-relaxed text-accent-foreground">
                  <span className="font-bold">Conteúdo fictício · </span>
                  {TESTIMONIALS_DISCLAIMER}
                </p>
              )}
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.quote.slice(0, 50)}
                  // min-w-0: os nomes usam `truncate` (white-space: nowrap), que
                  // define um min-content maior que a coluna. Sem isso o card
                  // estoura a tela na largura de celular.
                  className="flex min-w-0 flex-col rounded-[1.75rem] bg-card p-7 shadow-sm ring-1 ring-border/70"
                >
                  <Quote
                    className="size-7 text-primary/45"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-foreground/90">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-border/70 pt-5">
                    <span
                      aria-hidden
                      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent font-heading text-sm font-bold text-accent-foreground"
                    >
                      {testimonial.author.charAt(0)}
                    </span>
                    <span className="min-w-0 text-sm">
                      <span className="block font-bold">
                        {testimonial.author}
                      </span>
                      <span className="block leading-snug text-muted-foreground">
                        {testimonial.detail}
                      </span>
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
        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <SectionLabel>Dúvidas frequentes</SectionLabel>
              <h2 className="mt-6 font-heading text-3xl font-bold leading-tight sm:text-4xl">
                Pode perguntar
              </h2>
              <p className="mt-4 text-[0.95rem] text-muted-foreground">
                E se a sua dúvida não estiver aqui, é só chamar no WhatsApp.
              </p>
            </div>

            <Accordion type="single" collapsible className="mt-10 w-full">
              {faq.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${index}`}
                  className="mb-3 overflow-hidden rounded-2xl border border-border/70 bg-card px-5 last:border-b"
                >
                  <AccordionTrigger className="text-left font-heading text-base font-bold hover:no-underline">
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
        <section id="contato" className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-secondary/70 p-7 sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <SectionLabel>Vamos conversar</SectionLabel>
                <h2 className="mt-6 font-heading text-3xl font-bold leading-tight sm:text-4xl">
                  A gente te espera com{" "}
                  <span className="text-primary">café quente</span>
                </h2>
                <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                  Chame no WhatsApp e escolha o melhor horário para a sua
                  avaliação. Se preferir, dá uma espiada no nosso dia a dia pelo
                  Instagram primeiro.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="h-13 rounded-full px-7 text-base font-semibold shadow-lg shadow-primary/20"
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
                    className="h-13 rounded-full border-border bg-card px-7 text-base font-semibold"
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

                <address className="mt-9 space-y-3 not-italic text-sm text-muted-foreground">
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

              <MapPlaceholder className="rounded-[2rem] border-border bg-card/60" />
            </div>
          </div>
        </section>
      </main>

      {/* ------------------------------------------------------------------ */}
      {/* 7. Rodapé                                                          */}
      {/* ------------------------------------------------------------------ */}
      <footer className="border-t border-border/70 px-5 pb-28 pt-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <p className="font-heading text-xl font-bold">
                Espaço <span className="text-primary">DuoVitta</span>
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
                  className="flex size-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <InstagramIcon size={17} />
                </a>
                <a
                  href={clinic.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Facebook ${clinic.social.facebook.handle}`}
                  className="flex size-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <FacebookIcon size={17} />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex size-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <WhatsAppIcon size={17} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-sm font-bold">Onde estamos</h3>
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
              <h3 className="font-heading text-sm font-bold">Horário</h3>
              <dl className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {openingHours.map((entry) => (
                  <div key={entry.days} className="flex justify-between gap-4">
                    <dt>{entry.days}</dt>
                    <dd className="text-right font-medium text-foreground/80">
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

          <div className="mt-10 flex flex-col gap-3 border-t border-border/70 pt-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
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
