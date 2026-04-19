export const SITE = {
  name: "Fátima Negreiros",
  role: "Podóloga",
  city: "Solânea — PB",
  whatsappRaw: "5583993901775",
  whatsappDisplay: "(83) 99390-1775",
  instagram: "podologa.fatima.negreiros",
  instagramUrl: "https://instagram.com/podologa.fatima.negreiros",
  address:
    "Av. Gov. João Fernandes de Lima, 327 — 1º andar (em frente à Rodoviária), Solânea — PB, 58225-000",
  addressShort: "Av. Gov. João Fernandes de Lima, 327 — 1º andar",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Gov.+João+Fernandes+de+Lima,+327+Solânea+PB",
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+Gov.+João+Fernandes+de+Lima,+327+Solânea+PB&output=embed",
};

export const waLink = (msg: string) =>
  `https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent(msg)}`;

export const clinicalServices = [
  {
    title: "Unha Encravada (Onicocriptose)",
    desc: "Tratamento conservador com técnica indolor para alívio imediato e correção definitiva.",
  },
  {
    title: "Micoses & Fungos",
    desc: "Diagnóstico, higienização profunda e plano terapêutico para restaurar a saúde da unha.",
  },
  {
    title: "Rachaduras & Fissuras",
    desc: "Remoção de calosidades, hidratação intensiva e protocolo para selar e prevenir.",
  },
  {
    title: "Verruga Plantar",
    desc: "Avaliação criteriosa e procedimentos seguros para eliminar lesões com conforto.",
  },
  {
    title: "Correção de Unhas Deformadas",
    desc: "Reconstrução e ortesias para devolver forma, função e autoestima aos seus pés.",
  },
  {
    title: "Calosidades & Olho de Peixe",
    desc: "Remoção delicada com instrumental esterilizado e alívio da dor desde a primeira sessão.",
  },
];

export const aestheticServices = [
  {
    title: "Spa dos Pés",
    desc: "Ritual completo de hidratação, esfoliação e aromaterapia para renovar seus pés.",
  },
  {
    title: "Limpeza de Pele",
    desc: "Higienização profunda do rosto com extração delicada e finalização nutritiva.",
  },
  {
    title: "Massagem Relaxante",
    desc: "Toque terapêutico que alivia tensões, melhora circulação e restaura a energia.",
  },
  {
    title: "Drenagem Linfática",
    desc: "Técnica manual que reduz inchaço, desintoxica e revitaliza o corpo.",
  },
  {
    title: "Manicure & Pedicure",
    desc: "Acabamento impecável com biossegurança rigorosa e estilo personalizado.",
  },
  {
    title: "Sobrancelhas & Depilação",
    desc: "Design harmônico do olhar e cuidados estéticos com precisão e suavidade.",
  },
];

export const testimonials = [
  {
    name: "Vanessa Brito",
    when: "6 meses atrás",
    text: "Atendimento humanizado, desencravou a unha da minha bebê e ela nem chorou.",
    highlight: "Atendimento Humanizado",
    emoji: "🥰",
  },
  {
    name: "André Luis Castelo Branco",
    when: "2 anos atrás",
    text: "Excelente. Muito pontual, me aliviou 100%. Atenciosa, com toda calma do mundo, com toda higiene, SEM DOR, até comigo que estava ansioso com minhas duas unhas encravadas. Recomendo mil vezes.",
    highlight: "Sem Dor",
    emoji: "💯",
  },
  {
    name: "Claudia Dias de Oliveira",
    when: "1 ano atrás",
    text: "Há muito tempo sofrendo com unhas encravadas, tentando resolver com manicure/pedicure, sem sucesso. Uma amiga me indicou a Fátima que já havia resolvido o problema do filho dela. Não tenho palavras para descrever a educação e a delicadeza.",
    highlight: "Profissionalismo",
    emoji: "✨",
  },
  {
    name: "Jessica Carolina",
    when: "1 ano atrás",
    text: "Super indico. Pessoa muito profissional, maravilhosa, cuidadosa e paciente. Comunicação, simpatia, paciência e valor — tudo impecável. Obrigada Fátima!",
    highlight: "Cuidado & Paciência",
    emoji: "😘",
  },
  {
    name: "Benit Empreendimentos",
    when: "2 semanas atrás",
    text: "Excelente profissional e ser humano ímpar. Muito cuidadosa, trata o problema do paciente com todo carinho. Muito obrigado pelos seus serviços!",
    highlight: "Cuidado Genuíno",
    emoji: "🌿",
  },
  {
    name: "Mariana Dela-Bianca",
    when: "2 meses atrás",
    text: "Maravilhosa! Recomendo!",
    highlight: "Recomendado",
    emoji: "⭐",
  },
];
