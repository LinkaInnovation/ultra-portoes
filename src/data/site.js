// ============================================================
// site.js — contact constants, helpers and content data
// ============================================================

// ---- contact constants ----
export const WA_NUMBER = "5511940403153";
export const PHONE_DISPLAY = "(11) 94040-3153";
export const EMAIL = "ultraportoes@gmail.com ";
export const ADDRESS =
  "Av. Nossa Sra. da Assunção, 960 — Vila Butantã, São Paulo · SP";
export const ADDRESS_SHORT = "Vila Butantã · São Paulo / SP";
export const INSTAGRAM = "https://instagram.com/ultraportoes";
export const FACEBOOK = "https://www.facebook.com/profile.php?id=61574797958293";

export const WA_BASE = "https://wa.me/5511940403153";

export const waLink = (msg) =>
  msg ? `${WA_BASE}?text=${encodeURIComponent(msg)}` : WA_BASE;

// ---- data ----
export const SERVICES = [
  {
    ic: "install",
    t: "Instalação de Portões",
    d: "Projeto e instalação de portões basculantes, deslizantes e pivotantes, com acabamento e segurança de fábrica.",
  },
  {
    ic: "automate",
    t: "Automação de Portões",
    d: "Motorização inteligente com controle remoto, travas de segurança anti furto e integração ao seu sistema de segurança.",
  },
  {
    ic: "wrench",
    t: "Manutenção Corretiva",
    d: "Diagnóstico rápido e reparo de motores, trilhos e automatizadores com peças originais.",
  },
  {
    ic: "wrench",
    t: "Trabalho de Pintura Eletrostática",
    d: "Pintura e revestimento eletrostático com precisão, qualidade e proteção duradoura para seu portão.",
  },
  {
    ic: "cpu",
    t: "Motores e Acessórios",
    d: "Venda e troca de motores, centrais, controles e acessórios das melhores marcas do mercado.",
  },
  {
    ic: "building",
    t: "Atendimento p/ Condomínios",
    d: "Contratos de manutenção e suporte técnico dedicado para portarias e acessos coletivos.",
  },
];

export const DIFERENCIAIS = [
  {
    ic: "award",
    t: "+5 anos de experiência",
    d: "Histórico sólido em instalação e automação para residências, comércios e condomínios.",
  },
  {
    ic: "bolt",
    t: "Atendimento rápido",
    d: "Resposta ágil e agendamento sem burocracia — urgências priorizadas.",
  },
  {
    ic: "users",
    t: "Equipe especializada",
    d: "Técnicos treinados e certificados para cada tipo de portão e automatizador.",
  },
  {
    ic: "layers",
    t: "Materiais de qualidade",
    d: "Trabalhamos apenas com peças e motores originais, homologados e duráveis.",
  },
  {
    ic: "shieldCheck",
    t: "Garantia dos serviços",
    d: "Toda instalação e reparo acompanha garantia formal por escrito.",
  },
  {
    ic: "creditCard",
    t: "Parcelamento em até 10x",
    d: "Avaliação técnica e proposta transparente, sem taxas escondidas.",
  },
];

export const PROJ_CATS = ["Todos", "Basculantes", "Deslizantes"];
export const PROJECTS = [
  {
    cat: "Deslizantes",
    t: "Portão deslizante branco",
    img: "/images/services-foto.jpeg",
  },
  { cat: "Deslizantes", t: "Portão deslizante branco", img: "/images/1.jpeg" },
  { cat: "Basculantes", t: "Deslizante residencial", img: "/images/proj-02.jpeg" },
  { cat: "Basculantes", t: "Basculante decorativo", img: "/images/proj-03.jpeg" },
  { cat: "Basculantes", t: "Deslizante cinza moderno", img: "/images/proj-04.jpeg" },
  { cat: "Basculantes", t: "Portão basculante", img: "/images/2.jpeg" },

  { cat: "Basculantes", t: "Portão basculante", img: "/images/4.jpeg" },
  {
    cat: "Basculantes",
    t: "Basculante estilo diamante",
    img: "/images/proj-07.jpeg",
  },
  { cat: "Basculantes", t: "Basculante premium", img: "/images/proj-08.jpeg" },
  { cat: "Basculantes", t: "Basculante contemporâneo", img: "/images/proj-09.jpeg" },
];

export const DEPOIMENTOS = [
  {
    n: "Walquiria Morins Barreto",
    l: "4 meses atrás",
    q: "Gostaria de parabenizar a equipe pelo excelente trabalho no novo portão. É raro encontrar profissionais tão dedicados, que entregam tão bem, o resultado final superou nossas expectativas, super indico.",
    av: "https://i.pravatar.cc/80?img=47",
  },
  {
    n: "Clovis Manzalli",
    l: "11 meses atrás",
    q: "A empresa Ultra Portões realmente me surpreendeu com a postura profissional e dedicação em realizar um portão bem ajustado. Minha garagem é de uma casa antiga, fora de esquadro, mas os profissionais fizeram um ótimo trabalho no prazo combinado. Estou muito feliz. Obrigado.",
    av: "https://i.pravatar.cc/80?img=15",
  },
  {
    n: "Vanusa Rodrigues",
    l: "7 meses atrás",
    q: "Excelente trabalho, eles estão de parabéns. O portão ficou maravilhoso, amei!",
    av: "https://i.pravatar.cc/80?img=32",
  },
];

export const HOODS = [
  "Butantã",
  "Vila Butantã",
  "Rio Pequeno",
  "Jaguaré",
  "Morumbi",
  "Vila Sônia",
  "Raposo Tavares",
  "Cidade Universitária",
  "Pinheiros",
  "Lapa",
  "Vila Leopoldina",
  "Perdizes",
];

export const NAV_LINKS = [
  { href: "#servicos", t: "Serviços" },
  { href: "#diferenciais", t: "Diferenciais" },
  { href: "#sobre", t: "Sobre" },
  { href: "#projetos", t: "Projetos" },
  { href: "#cobertura", t: "Cobertura" },
];
