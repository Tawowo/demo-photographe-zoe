export type Category = "Portrait" | "Couple & Famille" | "Lifestyle";

export interface Photo {
  src: string;
  alt: string;
  category: Category;
  large?: boolean;
}

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const heroPhoto = u("photo-1529626455594-4ff0802cfb7e", 2000);
export const aboutPhoto = u("photo-1554080353-a576cf803bda", 1000);

export const galleryPhotos: Photo[] = [
  { src: u("photo-1494790108377-be9c29b29330"), alt: "Portrait de femme souriante en lumière naturelle", category: "Portrait", large: true },
  { src: u("photo-1516589178581-6cd7833ae3b2"), alt: "Couple complice à la golden hour", category: "Couple & Famille" },
  { src: u("photo-1511895426328-dc8714191300"), alt: "Famille réunie en extérieur, lumière douce", category: "Couple & Famille", large: true },
  { src: u("photo-1544005313-94ddf0286df2"), alt: "Portrait féminin lumineux et naturel", category: "Portrait" },
  { src: u("photo-1517841905240-472988babdf9"), alt: "Séance lifestyle spontanée en ville", category: "Lifestyle" },
  { src: u("photo-1500648767791-00dcc994a43e"), alt: "Portrait masculin en lumière dorée", category: "Portrait" },
  { src: u("photo-1438761681033-6461ffad8d80"), alt: "Portrait rayonnant en extérieur", category: "Portrait", large: true },
  { src: u("photo-1529634806980-85c3dd6d34ac"), alt: "Couple en balade au coucher du soleil", category: "Couple & Famille" },
  { src: u("photo-1542596768-5d1d21f1cf98"), alt: "Portrait créatif d'artiste en studio", category: "Lifestyle" },
];

export const services = [
  { title: "Portrait Solo", description: "Mettez en valeur votre personnalité", price: "à partir de 150€", icon: "portrait" },
  { title: "Couple & Famille", description: "Des souvenirs qui durent toute une vie", price: "à partir de 200€", icon: "family" },
  { title: "Lifestyle & Créateurs", description: "Des images qui vous ressemblent vraiment", price: "à partir de 180€", icon: "lifestyle" },
  { title: "Événements", description: "Immortalisez vos moments importants", price: "sur devis", icon: "event" },
];

export const testimonials = [
  { name: "Sidonie Thievin", text: "Zoé est vraiment adorable, elle met très à l'aise avec gentillesse et humour. Les séances sont toujours des moments agréables. C'était un vrai plaisir. Et évidemment les photos sont toujours magnifiques !!" },
  { name: "Alexandre Vladimus", text: "Une photographe exceptionnelle, elle a su nous mettre en confiance pendant toute la séance, on n'hésitera pas à reprendre rendez-vous ! Merci encore Zoé 🤩" },
  { name: "Anouar Bachatero", text: "Merci Zoé pour votre professionnalisme et votre disponibilité. Vous avez été patiente tout au long de la séance photo. Vos clichés étaient magnifiques. Je recommande les yeux fermés." },
  { name: "Victoria Le Bail", text: "Merci à Zoé ! C'est une photographe qui prend le temps et qui sait nous mettre à l'aise, même quand on a pas l'habitude des photos, et je suis très satisfaite du résultat. Un moment mémorable." },
  { name: "Agathe Simon-Pailly", text: "J'ai eu une expérience géniale avec Zoé. Elle a su me mettre à l'aise, et le résultat était tout simplement sublime. Je conseille vivement, n'hésitez à pas à réserver votre séance !" },
  { name: "Tafilet Marie", text: "Je suis illustratrice, et Zoé est venue dans mon atelier pour me photographier alors que je dessinais. Les photos sont incroyables, pleines de lumière et de couleurs. J'ai enfin des photos professionnelles et qui me ressemblent." },
];
