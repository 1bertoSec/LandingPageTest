/**
 * Fonte única de conteúdo do Espaço DuoVitta.
 *
 * As três landing pages (/v1, /v2, /v3) consomem exatamente estes mesmos dados —
 * o que muda entre elas é apenas a identidade visual. Assim, quando o cliente
 * aprovar uma das versões, o texto já estará validado nas três.
 */

export const clinic = {
  name: "Espaço DuoVitta",
  tagline: "Resgatando autoestima com tecnologia e ciência",
  professional: {
    name: "Dra. Graciele Siboldi",
    role: "Fisioterapeuta Dermatofuncional",
    // TODO: substituir por foto autorizada da clínica (retrato da Dra. Graciele)
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    photoAlt: "Retrato de profissional de saúde em jaleco",
  },
  address: {
    street: "Rua Luís Lousã, 28, sala 27",
    district: "Santa Paula",
    city: "São Caetano do Sul",
    state: "SP",
    zip: "09540-430",
    full: "Rua Luís Lousã, 28, sala 27 - Santa Paula, São Caetano do Sul/SP, 09540-430",
    short: "Rua Luís Lousã, 28, sala 27 — Santa Paula, São Caetano do Sul/SP",
  },
  social: {
    instagram: {
      handle: "@duovitta",
      url: "https://instagram.com/duovitta",
    },
    facebook: {
      handle: "/espacoduovitta",
      url: "https://facebook.com/espacoduovitta",
    },
  },
} as const;

/** WhatsApp da clínica, no formato exigido pelo wa.me: 55 + DDD + número. */
export const WHATSAPP_NUMBER = "5511973637104";

const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site do Espaço DuoVitta e gostaria de agendar uma avaliação.";

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

/** TODO: confirmar com a clínica os horários reais antes de publicar. */
export const openingHours = [
  { days: "Segunda a sexta", hours: "09h às 19h" },
  { days: "Sábado", hours: "09h às 14h" },
  { days: "Domingo e feriados", hours: "Fechado" },
] as const;

export const HOURS_PLACEHOLDER_NOTE =
  "[PLACEHOLDER - confirmar horário de funcionamento real]";

/**
 * Nome do ícone é resolvido pelo componente de cada versão para um ícone do
 * lucide-react — manter aqui apenas o dado, nunca o JSX.
 */
export type ServiceIcon =
  | "flame"
  | "waves"
  | "sun"
  | "snowflake"
  | "wind"
  | "layers"
  | "zap"
  | "syringe"
  | "sparkles"
  | "heart-pulse";

export type Service = {
  slug: string;
  name: string;
  icon: ServiceIcon;
  short: string;
  /** Foto ilustrativa de banco de imagens livre (Unsplash). Nunca foto de paciente. */
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "co2-fracionado",
    name: "CO2 Fracionado",
    icon: "flame",
    short:
      "Laser que estimula colágeno em profundidade para tratar cicatrizes de acne, textura irregular e flacidez da pele.",
    // TODO: substituir por foto autorizada da clínica
    image: "https://images.unsplash.com/photo-1631730486572-226d1f595b68",
    imageAlt: "Equipamento de laser em ambiente clínico",
  },
  {
    slug: "ultraformer-iii",
    name: "Ultraformer III",
    icon: "waves",
    short:
      "Ultrassom microfocado que promove lifting sem cortes, redefinindo o contorno do rosto e do pescoço.",
    // TODO: substituir por foto autorizada da clínica
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9",
    imageAlt: "Aplicação de aparelho estético no rosto",
  },
  {
    slug: "despigmentacao",
    name: "Despigmentação",
    icon: "sun",
    short:
      "Protocolos combinados para clarear melasma e manchas solares, devolvendo uniformidade ao tom da pele.",
    // TODO: substituir por foto autorizada da clínica
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
    imageAlt: "Pele de rosto em close, iluminação suave",
  },
  {
    slug: "criolipolise",
    name: "Criolipólise",
    icon: "snowflake",
    short:
      "Congelamento controlado de células de gordura localizada, sem cirurgia e sem tempo de recuperação.",
    // TODO: substituir por foto autorizada da clínica
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2",
    imageAlt: "Sessão de tratamento corporal em maca de clínica",
  },
  {
    slug: "ozonioterapia",
    name: "Ozonioterapia",
    icon: "wind",
    short:
      "Uso terapêutico do ozônio para acelerar cicatrização, melhorar oxigenação tecidual e apoiar outros protocolos.",
    // TODO: substituir por foto autorizada da clínica
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
    imageAlt: "Insumos e equipamentos clínicos organizados",
  },
  {
    slug: "peeling",
    name: "Peeling",
    icon: "layers",
    short:
      "Renovação celular com ativos ajustados ao seu tipo de pele, melhorando brilho, poros e marcas superficiais.",
    // TODO: substituir por foto autorizada da clínica
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
    imageAlt: "Aplicação de produto facial durante procedimento estético",
  },
  {
    slug: "jato-de-plasma",
    name: "Jato de Plasma",
    icon: "zap",
    short:
      "Tecnologia de plasma para retração de pele em pálpebras e pequenas áreas, alternativa não cirúrgica.",
    // TODO: substituir por foto autorizada da clínica
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935",
    imageAlt: "Detalhe de equipamento de precisão em clínica estética",
  },
  {
    slug: "injetaveis",
    name: "Aplicação de Injetáveis",
    icon: "syringe",
    short:
      "Protocolos injetáveis aplicados com critério técnico e avaliação individual, sempre com foco em naturalidade.",
    // TODO: substituir por foto autorizada da clínica
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
    imageAlt: "Materiais estéreis preparados para procedimento",
  },
  {
    slug: "fotodepilacao",
    name: "Fotodepilação",
    icon: "sparkles",
    short:
      "Redução progressiva e duradoura dos pelos com tecnologia de luz, com conforto durante as sessões.",
    // TODO: substituir por foto autorizada da clínica
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
    imageAlt: "Ambiente de sala de procedimentos estéticos",
  },
  {
    slug: "pos-operatorio",
    name: "Cuidados Pós-operatório",
    icon: "heart-pulse",
    short:
      "Acompanhamento fisioterapêutico após cirurgias plásticas para reduzir edema, fibrose e acelerar a recuperação.",
    // TODO: substituir por foto autorizada da clínica
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
    imageAlt: "Atendimento de fisioterapia em maca clínica",
  },
];

/**
 * Fotos de ambiente/equipe usadas principalmente pela versão /v2 (acolhedora).
 * Todas de banco de imagens livre — nenhuma é foto de paciente.
 */
export const ambience = [
  {
    // TODO: substituir por foto autorizada da clínica (recepção real)
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    alt: "Recepção clara e acolhedora de clínica de estética",
    caption: "Recepção",
  },
  {
    // TODO: substituir por foto autorizada da clínica (sala de procedimentos real)
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
    alt: "Sala de procedimentos com maca e iluminação suave",
    caption: "Sala de procedimentos",
  },
  {
    // TODO: substituir por foto autorizada da clínica (equipe real)
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
    alt: "Equipe de saúde em ambiente clínico",
    caption: "Nossa equipe",
  },
];

export type Technology = {
  name: string;
  headline: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
};

export const technologies: Technology[] = [
  {
    name: "CO2 Fracionado",
    headline: "Laser de CO2 fracionado",
    description:
      "Um dos lasers mais estudados da dermatologia. Trabalha em colunas microscópicas, preservando a pele ao redor e acelerando a recuperação, enquanto estimula a produção de colágeno novo.",
    highlights: [
      "Cicatrizes de acne e textura irregular",
      "Estímulo de colágeno em profundidade",
      "Protocolo ajustado por tipo de pele",
    ],
    // TODO: substituir por foto autorizada da clínica (equipamento real)
    image: "https://images.unsplash.com/photo-1631730486572-226d1f595b68",
    imageAlt: "Equipamento de laser de CO2 fracionado",
  },
  {
    name: "Ultraformer III",
    headline: "Ultraformer III (HIFU)",
    description:
      "Ultrassom microfocado com visualização que entrega energia em camadas específicas da pele, incluindo o SMAS. Lifting sem cortes, com resultado que evolui ao longo dos meses.",
    highlights: [
      "Lifting facial sem cirurgia",
      "Profundidade controlada por transdutor",
      "Sem afastamento das atividades",
    ],
    // TODO: substituir por foto autorizada da clínica (equipamento real)
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9",
    imageAlt: "Aparelho de ultrassom microfocado em uso",
  },
];

export const differentials = [
  {
    icon: "stethoscope" as const,
    title: "Responsabilidade técnica",
    description:
      "Todos os protocolos são conduzidos por fisioterapeuta dermatofuncional, com avaliação individual antes de qualquer procedimento.",
  },
  {
    icon: "microscope" as const,
    title: "Base científica",
    description:
      "Indicações fundamentadas em evidência, sem promessas de resultado imediato ou protocolo genérico.",
  },
  {
    icon: "shield-check" as const,
    title: "Tecnologia de ponta",
    description:
      "Investimento contínuo em equipamentos de referência, como CO2 Fracionado e Ultraformer III.",
  },
  {
    icon: "heart-pulse" as const,
    title: "Acompanhamento próximo",
    description:
      "Da avaliação ao pós-procedimento, você é acompanhada em cada etapa do plano de tratamento.",
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  detail: string;
};

/**
 * ATENÇÃO — CONTEÚDO FICTÍCIO.
 *
 * Estes depoimentos foram escritos apenas para diagramação: as pessoas não
 * existem e nenhuma delas foi atendida na clínica. Publicar depoimento
 * inventado como se fosse real configura publicidade enganosa (CDC art. 37 e
 * Código do CONAR), então a página exibe o aviso de `TESTIMONIALS_DISCLAIMER`
 * junto da seção enquanto eles estiverem aqui.
 *
 * TODO: substituir por depoimentos reais, com autorização por escrito de cada
 * paciente, e remover o aviso.
 */
export const TESTIMONIALS_ARE_FICTIONAL = true;

export const TESTIMONIALS_DISCLAIMER =
  "Depoimentos ilustrativos, escritos apenas para esta apresentação. Substituir por relatos reais, com autorização por escrito, antes de publicar.";

export const testimonials: Testimonial[] = [
  {
    quote:
      "Cheguei insegura, achando que ia ouvir uma proposta de pacote fechado. Foi o contrário: a Dra. Graciele olhou minha pele, perguntou da minha rotina e me explicou por que um dos procedimentos que eu queria não fazia sentido para o meu caso agora. Essa honestidade me ganhou.",
    author: "Mariana R.",
    detail: "Avaliação e protocolo de despigmentação",
  },
  {
    quote:
      "O que mais me marcou foi entender o que estava acontecendo. Antes de cada sessão ela explicava o que o aparelho faz na pele e o que eu ia sentir. Saí de todas sabendo exatamente o que tinha sido feito — e as orientações de pós vieram por escrito.",
    author: "Camila S.",
    detail: "CO2 Fracionado",
  },
  {
    quote:
      "Fiz o acompanhamento pós-operatório aqui por indicação do meu cirurgião. O que me deu segurança foi o cuidado com o tempo: nada foi apressado, e sempre que tive dúvida entre as sessões eu consegui resposta no WhatsApp.",
    author: "Patrícia L.",
    detail: "Cuidados pós-operatório",
  },
];

export const faq = [
  {
    question: "Preciso de avaliação antes de começar um tratamento?",
    answer:
      "Sim. Toda pessoa passa por uma avaliação inicial para entender histórico, tipo de pele e objetivo. É a partir dela que o protocolo é definido — nunca o contrário.",
  },
  {
    question: "Em quanto tempo eu vejo resultado?",
    answer:
      "Depende do procedimento e da resposta individual. Tecnologias que trabalham com estímulo de colágeno, como CO2 Fracionado e Ultraformer III, mostram evolução ao longo de semanas a meses. Na avaliação você recebe uma expectativa realista para o seu caso.",
  },
  {
    question: "Os procedimentos doem?",
    answer:
      "A maior parte é bem tolerada, e usamos recursos de conforto quando indicado. Tudo é conversado antes, para que você saiba exatamente o que esperar da sessão.",
  },
  {
    question: "Preciso me afastar das atividades depois?",
    answer:
      "Varia por procedimento. Muitos não exigem afastamento; outros, como o CO2 Fracionado, pedem alguns dias de cuidado específico. As orientações de pós são entregues por escrito.",
  },
  {
    question: "Vocês atendem pós-operatório de cirurgia plástica?",
    answer:
      "Sim. O acompanhamento pós-operatório é uma das especialidades da casa, com foco em reduzir edema e fibrose e apoiar a recuperação dentro do que foi orientado pelo cirurgião.",
  },
];

export const aboutParagraphs = [
  "O Espaço DuoVitta nasceu de uma convicção simples: autoestima não se resgata com promessa, se resgata com método. Por isso cada atendimento começa por uma avaliação — entender a sua pele, o seu histórico e o que é possível alcançar com segurança.",
  "À frente da responsabilidade técnica está a Dra. Graciele Siboldi, fisioterapeuta dermatofuncional. A formação em dermatofuncional coloca a fisiologia no centro: entender como o tecido responde a cada estímulo é o que permite escolher a tecnologia certa, na intensidade certa, no momento certo.",
  "Tecnologia e ciência não são adorno de marketing aqui — são o critério. Equipamentos como CO2 Fracionado e Ultraformer III existem na clínica porque têm literatura por trás, e são indicados apenas quando fazem sentido para o seu caso.",
];
