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

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "preparer-seance-photo-tours",
    title: "Comment bien préparer sa séance photo à Tours",
    date: "15 juin 2024",
    excerpt: "Les astuces essentielles pour aborder votre séance sereinement : tenue, lieu, timing et état d'esprit, tout ce qu'il faut savoir avant de venir.",
    image: u("photo-1500648767791-00dcc994a43e", 1600),
    content: [
      "Réserver sa première séance photo peut sembler intimidant, surtout quand on n'a pas l'habitude d'être devant l'objectif. Pourtant, avec quelques conseils simples, vous pouvez transformer cette appréhension en véritable moment de plaisir. Voici tout ce qu'il faut savoir pour préparer sereinement votre séance à Tours et repartir avec des photos qui vous ressemblent vraiment.",
      "Le choix du moment : la lumière naturelle est au cœur de mon travail, et le moment de la journée influence énormément le rendu final. Je privilégie toujours la golden hour, cette heure dorée qui précède le coucher du soleil, où la lumière devient douce, chaude et flatteuse pour tous les types de peau. En fin de matinée ou en fin d'après-midi, la lumière est également plus douce qu'en plein midi, où le soleil zénithal crée des ombres dures peu esthétiques. Ensemble, nous choisirons le créneau qui correspond le mieux à votre séance et à la saison.",
      "Côté tenue : optez pour des vêtements aux couleurs unies ou aux motifs discrets plutôt que des logos imposants ou des imprimés trop chargés, qui peuvent détourner l'attention de l'essentiel : vous. Les teintes terreuses, pastel ou neutres se marient particulièrement bien avec les décors naturels de Tours et de ses environs. N'hésitez pas à prévoir une seconde tenue si votre séance comporte plusieurs ambiances, et pensez à des couches (une veste, un cardigan) qui apportent du mouvement et de la texture aux photos.",
      "Les lieux à Tours : la ville regorge de décors magnifiques pour une séance photo. Le jardin des Prébendes d'Oé offre une verdure luxuriante et une atmosphère intimiste, idéale pour les portraits en douceur. Les quais de Loire et leurs ponts offrent des perspectives urbaines et lumineuses, parfaites en fin de journée. Le Vieux Tours, avec ses ruelles pavées et ses façades à colombages, apporte un cachet authentique et intemporel. Nous choisirons ensemble le lieu qui correspond le mieux à l'ambiance que vous recherchez.",
      "Se préparer mentalement : la plupart des personnes que je photographie me disent, avant la séance, qu'elles ne sont « pas photogéniques ». C'est presque toujours faux : ce sont surtout les postures figées et le stress qui donnent cette impression sur les photos. Mon rôle est justement de vous mettre à l'aise, de vous faire bouger, rire, discuter, pour que votre naturel reprenne le dessus. Arrivez détendu·e, sans attentes trop rigides, et laissez-vous guider.",
      "Les petits détails du jour J : prévoyez d'arriver quelques minutes en avance pour prendre le temps de vous installer sans stress. Une paire de chaussures confortables est recommandée si la séance implique de la marche, notamment le long des quais ou dans le Vieux Tours. Pour les familles, pensez à apporter un objet ou un jouet qui rassure les plus petits : cela permet des moments de complicité authentiques et spontanés, bien plus précieux qu'une pose figée.",
      "Enfin, faites-moi confiance : chaque séance est unique et pensée pour vous. Mon objectif n'est pas de vous faire adopter des poses artificielles, mais de capturer qui vous êtes vraiment, dans une lumière qui vous met en valeur. Si vous avez des questions avant votre séance, n'hésitez pas à me contacter : je suis là pour vous accompagner à chaque étape, de la réservation jusqu'à la remise de vos photos.",
    ],
  },
  {
    slug: "shooting-lumiere-naturelle",
    title: "Shooting en lumière naturelle : pourquoi c'est magique",
    date: "2 mai 2024",
    excerpt: "Pourquoi je n'utilise jamais de flash et comment la lumière du jour transforme chaque portrait en instant sincère et intemporel.",
    image: u("photo-1438761681033-6461ffad8d80", 1600),
    content: [
      "Si vous avez déjà parcouru mon portfolio, vous avez sans doute remarqué que je n'utilise jamais de flash ni d'éclairage artificiel en studio. Ce choix n'est pas qu'une question de style : c'est une véritable philosophie de travail qui influence chaque aspect de mes séances photo, du lieu choisi jusqu'à l'heure du rendez-vous.",
      "La lumière naturelle a cette capacité unique de révéler les émotions avec authenticité. Contrairement à un flash qui aplatit les traits et fige les expressions, la lumière du jour épouse les formes du visage, souligne le regard et laisse transparaître une chaleur qu'aucun éclairage artificiel ne peut reproduire fidèlement. C'est cette qualité qui donne aux photos leur caractère intemporel et sincère.",
      "La golden hour, ce moment magique : environ une heure avant le coucher du soleil, la lumière change complètement de caractère. Elle devient rasante, dorée, et enveloppe les sujets d'une chaleur presque palpable. Les ombres s'allongent doucement, les contrastes s'adoucissent, et chaque photo semble baignée d'une nostalgie douce. C'est mon créneau favori pour les séances en extérieur, en particulier pour les couples et les familles.",
      "Les jours nuageux, un allié insoupçonné : contrairement à une idée reçue, un ciel couvert n'est pas un problème pour la photographie de portrait, bien au contraire. Les nuages agissent comme un immense diffuseur naturel, une sorte de gigantesque boîte à lumière qui adoucit les ombres et uniformise le teint de la peau. C'est une lumière particulièrement flatteuse, sans reflets ni zones de surexposition, idéale pour des portraits tout en douceur.",
      "Le contre-jour, pour une ambiance romantique : placer mes sujets face au soleil, avec la lumière derrière eux, permet de créer ces halos dorés si caractéristiques des séances de couple en fin de journée. Cette technique demande une bonne maîtrise de l'exposition, mais le résultat est saisissant : silhouettes nimbées de lumière, chevelures illuminées, atmosphère presque cinématographique.",
      "En intérieur aussi : pour les séances lifestyle réalisées chez vous ou dans votre atelier, je recherche systématiquement la lumière d'une fenêtre plutôt que d'ajouter un éclairage artificiel. Positionner le sujet perpendiculairement ou légèrement face à la source de lumière naturelle crée un rendu doux et enveloppant, très proche de ce qu'on retrouve dans la peinture classique.",
      "Pourquoi j'évite le soleil de midi : entre 12h et 15h environ, le soleil est au plus haut dans le ciel et projette une lumière dure, verticale, qui creuse les traits du visage et crée des ombres peu flatteuses sous les yeux et le nez. C'est pourquoi je programme systématiquement mes séances en début ou fin de journée, ou je recherche des zones ombragées homogènes lorsque les horaires ne peuvent pas être déplacés.",
      "Cette recherche constante de la lumière parfaite, c'est ce qui donne à mes photos leur signature : douce, naturelle, sincère. C'est un travail d'observation permanente, mais c'est aussi ce qui rend chaque séance différente et chaque photo unique.",
    ],
  },
  {
    slug: "photographe-couple-tours",
    title: "Photographe de couple à Tours : immortalisez votre histoire",
    date: "10 avril 2024",
    excerpt: "Des quais de Loire au Vieux Tours, découvrez les plus beaux spots et conseils pour une séance photo de couple réussie.",
    image: u("photo-1516589178581-6cd7833ae3b2", 1600),
    content: [
      "Qu'il s'agisse d'une demande en mariage récente, d'un anniversaire de rencontre ou simplement de l'envie de fixer un moment de complicité, une séance photo de couple est bien plus qu'une simple collection d'images : c'est la trace tangible d'une histoire en train de s'écrire.",
      "Pourquoi immortaliser votre relation : le temps passe vite, et les souvenirs, aussi précieux soient-ils, finissent par s'estomper. Une séance photo de couple permet de figer un instant précis de votre histoire, avec toute la complicité, la tendresse et l'humour qui vous caractérisent aujourd'hui. Ce sont des images que vous garderez toute votre vie, et que vous pourrez un jour partager avec vos enfants ou petits-enfants.",
      "Capturer l'authentique plutôt que le posé : mon approche privilégie toujours l'interaction naturelle entre vous deux plutôt que des poses figées et artificielles. Je vous demande souvent de marcher, de vous chuchoter quelque chose à l'oreille, de rire ensemble, de vous regarder simplement. C'est dans ces instants « entre deux poses » que naissent les photos les plus touchantes, celles où votre relation transparaît vraiment.",
      "Les plus beaux spots pour un couple à Tours : les quais de Loire offrent des lumières spectaculaires au coucher du soleil, avec les reflets sur l'eau et les ponts en arrière-plan. Le jardin des Prébendes, avec sa végétation dense et ses bancs romantiques, crée une atmosphère intimiste parfaite pour des moments de tendresse. Le Vieux Tours et ses ruelles pavées apportent un charme authentique, presque hors du temps. Pour les couples qui souhaitent une ambiance plus champêtre, les vignobles alentour offrent des décors somptueux, en particulier à l'automne.",
      "Se sentir à l'aise devant l'objectif : beaucoup de couples m'expriment une certaine appréhension avant leur séance, notamment s'ils n'ont pas l'habitude d'être photographiés ensemble. C'est totalement normal, et c'est justement mon rôle de vous mettre à l'aise. Je propose souvent des petits exercices simples : marcher main dans la main, se raconter un souvenir commun, danser un instant. Ces prompts permettent de faire retomber la pression et de laisser place à des interactions sincères et spontanées.",
      "Le bon timing : comme pour toutes mes séances, je recommande la fin d'après-midi ou la golden hour pour bénéficier d'une lumière douce et flatteuse. Le printemps et l'automne offrent des couleurs particulièrement photogéniques à Tours, mais chaque saison a son charme : l'hiver apporte une atmosphère cosy, l'été une luminosité éclatante en fin de journée.",
      "Une histoire, un style : chaque couple est différent, et j'aime adapter mon approche à votre personnalité. Certains préfèrent une ambiance douce et romantique, d'autres une énergie plus complice et ludique. Avant chaque séance, nous échangeons pour définir ensemble l'ambiance qui vous correspond le mieux, afin que les photos reflètent fidèlement qui vous êtes en tant que couple.",
      "Si vous souhaitez immortaliser votre histoire d'amour dans les plus beaux décors de Tours et de ses environs, n'hésitez pas à me contacter. Je serai ravie d'échanger avec vous sur votre projet et de vous accompagner dans la création de souvenirs qui vous ressembleront pour toujours.",
    ],
  },
];

export const testimonials = [
  { name: "Sidonie Thievin", text: "Zoé est vraiment adorable, elle met très à l'aise avec gentillesse et humour. Les séances sont toujours des moments agréables. C'était un vrai plaisir. Et évidemment les photos sont toujours magnifiques !!" },
  { name: "Alexandre Vladimus", text: "Une photographe exceptionnelle, elle a su nous mettre en confiance pendant toute la séance, on n'hésitera pas à reprendre rendez-vous ! Merci encore Zoé 🤩" },
  { name: "Anouar Bachatero", text: "Merci Zoé pour votre professionnalisme et votre disponibilité. Vous avez été patiente tout au long de la séance photo. Vos clichés étaient magnifiques. Je recommande les yeux fermés." },
  { name: "Victoria Le Bail", text: "Merci à Zoé ! C'est une photographe qui prend le temps et qui sait nous mettre à l'aise, même quand on a pas l'habitude des photos, et je suis très satisfaite du résultat. Un moment mémorable." },
  { name: "Agathe Simon-Pailly", text: "J'ai eu une expérience géniale avec Zoé. Elle a su me mettre à l'aise, et le résultat était tout simplement sublime. Je conseille vivement, n'hésitez à pas à réserver votre séance !" },
  { name: "Tafilet Marie", text: "Je suis illustratrice, et Zoé est venue dans mon atelier pour me photographier alors que je dessinais. Les photos sont incroyables, pleines de lumière et de couleurs. J'ai enfin des photos professionnelles et qui me ressemblent." },
];
