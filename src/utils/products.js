import productImg01 from "../Images/double-sofa-01.png";
import productImg02 from "../Images/double-sofa-02.png";
import productImg03 from "../Images/double-sofa-03.png";

import productImg04 from "../Images/single-sofa-01.jpg";
import productImg05 from "../Images/single-sofa-02.jpg";
import productImg06 from "../Images/single-sofa-03.jpg";
import productImg007 from "../Images/single-sofa-04.png";

import productImg07 from "../Images/arm-chair-01.jpg";
import productImg08 from "../Images/arm-chair-02.jpg";
import productImg09 from "../Images/arm-chair-03.jpg";
import productImg10 from "../Images/arm-chair-01.jpg";

import phone01 from "../Images/phone-01.jpg";
import phone02 from "../Images/phone-02.jpg";
import phone03 from "../Images/phone-03.png";
import phone04 from "../Images/phone-04.jpg";
import phone05 from "../Images/phone-05.jpg";
import phone06 from "../Images/phone-06.jpg";
import phone08 from "../Images/phone-08.png";

import watch01 from "../Images/watch-01.jpg";
import watch02 from "../Images/watch-02.jpg";
import watch03 from "../Images/watch-03.jpg";
import watch04 from "../Images/watch-04.jpg";

import wireless01 from "../Images/wireless-01.png";
import wireless02 from "../Images/wireless-02.png";
import wireless03 from "../Images/wireless-03.png";
import wireless04 from "../Images/wireless-04.png";

import sofaSlide from "../Images/hero-img.png";
import watchSlide from "../Images/watch-07.png";

export const SliderData = [
  {
    id: 1,
    title: "–50 % sur votre première commande",
    desc: "Profitez d’une offre exceptionnelle sur une sélection de produits de qualité, avec livraison rapide partout en Tunisie.",
    cover: sofaSlide,
  },
  {
    id: 2,
    title: "Offres spéciales sur les smartphones",
    desc: "Découvrez les derniers modèles à des prix compétitifs, avec garantie et service après-vente.",
    cover: phone08,
  },
  {
    id: 3,
    title: "Accessoires sans fil de qualité",
    desc: "Casques et accessoires performants pour un confort optimal au quotidien.",
    cover: wireless01,
  },
  {
    id: 4,
    title: "Montres modernes et élégantes",
    desc: "Un large choix de montres pour tous les styles, à prix accessible.",
    cover: watchSlide,
  },
];

export const serviceData = [
  {
    icon: <ion-icon name="car"></ion-icon>,
    title: "Livraison gratuite",
    subtitle: "Livraison rapide partout en Tunisie.",
    bg: "#fdefe6",
  },
  {
    icon: <ion-icon name="card"></ion-icon>,
    title: "Paiement sécurisé",
    subtitle: "Paiement à la livraison ou en ligne en toute sécurité.",
    bg: "#ceebe9",
  },
  {
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
    title: "Produits garantis",
    subtitle: "Qualité vérifiée et produits authentiques.",
    bg: "#e2f2b2",
  },
  {
    icon: <ion-icon name="headset"></ion-icon>,
    title: "Service client",
    subtitle: "Support disponible pour vous accompagner.",
    bg: "#d6e5fb",
  },
];

export const discoutProducts = [
  {
    id: "01",
    productName: "Canapé Westview moderne",
    imgUrl: productImg01,
    category: "sofa",
    price: 1700,
    discount: 30,
    shortDesc:
      "Canapé confortable au design moderne, idéal pour le salon.",
    description:
      "Canapé moderne avec une assise confortable et une finition soignée. Parfait pour apporter style et confort à votre espace de vie.",
    reviews: [
      {
        rating: 4.7,
        text: "Très confortable et bonne qualité.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Canapé Bigelow contemporain",
    imgUrl: productImg02,
    category: "sofa",
    price: 2000,
    discount: 20,
    shortDesc:
      "Canapé élégant avec un excellent rapport qualité-prix.",
    description:
      "Canapé au design contemporain, solide et confortable, adapté à un usage quotidien.",
    reviews: [
      {
        rating: 4.8,
        text: "Design moderne et confortable.",
      },
      {
        rating: 4.8,
        text: "Très bon produit.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Chaise Baltsar",
    imgUrl: productImg08,
    category: "chair",
    price: 450,
    discount: 15,
    shortDesc:
      "Chaise confortable pour salle à manger ou bureau.",
    description:
      "Chaise pratique et élégante, offrant un bon confort pour une utilisation quotidienne.",
    reviews: [
      {
        rating: 4.6,
        text: "Solide et confortable.",
      },
      {
        rating: 4.9,
        text: "Très bon rapport qualité-prix.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "Chaise Helmar moderne",
    imgUrl: productImg09,
    category: "chair",
    price: 320,
    discount: 35,
    shortDesc:
      "Chaise moderne avec finition de qualité.",
    description:
      "Chaise au style moderne, conçue avec des matériaux résistants pour un confort durable.",
    reviews: [
      {
        rating: 4.6,
        text: "Bonne qualité.",
      },
      {
        rating: 4.9,
        text: "Très satisfait.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "12",
    productName: "Smartphone Realme 8",
    imgUrl: phone03,
    category: "mobile",
    price: 599,
    discount: 10,
    shortDesc:
      "Smartphone performant avec bonne autonomie.",
    description:
      "Smartphone fluide et performant, idéal pour une utilisation quotidienne, avec un écran de qualité et une bonne autonomie.",
    reviews: [
      {
        rating: 4.8,
        text: "Excellent pour le prix.",
      },
      {
        rating: 4.9,
        text: "Rapide et pratique.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "Smartphone OnePlus Nord",
    imgUrl: phone04,
    category: "mobile",
    price: 799,
    discount: 5,
    shortDesc:
      "Smartphone fluide et puissant.",
    description:
      "Smartphone haut de gamme offrant rapidité, fluidité et design élégant. Parfait pour les utilisateurs exigeants.",
    reviews: [
      {
        rating: 4.8,
        text: "Très bonne performance.",
      },
      {
        rating: 4.9,
        text: "Qualité au rendez-vous.",
      },
    ],
    avgRating: 4.8,
  },
];


export const products = [
  // 1
  {
    id: "01",
    productName: "Canapé Westview moderne",
    imgUrl: productImg01,
    category: "sofa",
    price: 1890,
    shortDesc: "Canapé confortable au design moderne.",
    description:
      "Canapé moderne avec assise confortable et finition soignée. Idéal pour salon et espace de vie.",
    reviews: [{ rating: 4.7, text: "Très confortable." }],
    avgRating: 4.5,
  },
  // 2
  {
    id: "02",
    productName: "Canapé Bigelow contemporain",
    imgUrl: productImg02,
    category: "sofa",
    price: 2290,
    shortDesc: "Canapé élégant et spacieux.",
    description:
      "Canapé contemporain offrant un excellent confort et une bonne durabilité pour un usage quotidien.",
    reviews: [{ rating: 4.8, text: "Très bonne qualité." }],
    avgRating: 4.7,
  },
  // 3
  {
    id: "03",
    productName: "Canapé moderne 3 places",
    imgUrl: productImg03,
    category: "sofa",
    price: 1690,
    shortDesc: "Canapé moderne et pratique.",
    description:
      "Canapé 3 places au design simple, facile à intégrer dans tout type d’intérieur.",
    reviews: [{ rating: 4.7, text: "Bon rapport qualité-prix." }],
    avgRating: 4.7,
  },
  // 4
  {
    id: "04",
    productName: "Canapé tissu confort",
    imgUrl: productImg04,
    category: "sofa",
    price: 1590,
    shortDesc: "Canapé doux et confortable.",
    description:
      "Canapé en tissu agréable au toucher, idéal pour un usage quotidien.",
    reviews: [{ rating: 4.8, text: "Très confortable." }],
    avgRating: 4.7,
  },
  // 5
  {
    id: "05",
    productName: "Canapé velours élégant",
    imgUrl: productImg05,
    category: "sofa",
    price: 1750,
    shortDesc: "Canapé en velours au style moderne.",
    description:
      "Canapé élégant avec finition velours, apportant une touche raffinée à votre salon.",
    reviews: [{ rating: 4.7, text: "Très joli design." }],
    avgRating: 4.7,
  },
  // 6
  {
    id: "06",
    productName: "Canapé Fluffy Sheep",
    imgUrl: productImg06,
    category: "sofa",
    price: 1630,
    shortDesc: "Canapé moelleux et confortable.",
    description:
      "Canapé cosy au design unique, parfait pour se détendre après une longue journée.",
    reviews: [{ rating: 4.7, text: "Très agréable." }],
    avgRating: 4.7,
  },
  // 7
  {
    id: "07",
    productName: "Fauteuil Sakarias",
    imgUrl: productImg07,
    category: "chair",
    price: 420,
    shortDesc: "Fauteuil confortable et solide.",
    description:
      "Fauteuil pratique pour salon ou bureau, avec une bonne assise.",
    reviews: [{ rating: 4.7, text: "Confortable." }],
    avgRating: 4.7,
  },
  // 8
  {
    id: "08",
    productName: "Chaise Baltsar",
    imgUrl: productImg08,
    category: "chair",
    price: 350,
    shortDesc: "Chaise simple et élégante.",
    description:
      "Chaise idéale pour salle à manger ou bureau, robuste et confortable.",
    reviews: [{ rating: 4.8, text: "Bonne qualité." }],
    avgRating: 4.7,
  },
  // 9
  {
    id: "09",
    productName: "Chaise Helmar moderne",
    imgUrl: productImg09,
    category: "chair",
    price: 480,
    shortDesc: "Chaise moderne et résistante.",
    description:
      "Chaise au design moderne, conçue pour une utilisation durable.",
    reviews: [{ rating: 4.8, text: "Très satisfait." }],
    avgRating: 4.7,
  },
  // 10
  {
    id: "10",
    productName: "iPhone 12 Pro",
    imgUrl: phone01,
    category: "mobile",
    price: 3490,
    shortDesc: "Smartphone Apple performant.",
    description:
      "iPhone offrant fluidité, qualité photo et performances élevées.",
    reviews: [{ rating: 4.9, text: "Excellent téléphone." }],
    avgRating: 4.8,
  },
  // 11
  {
    id: "11",
    productName: "iPhone 12 Max",
    imgUrl: phone02,
    category: "mobile",
    price: 3790,
    shortDesc: "Grand écran et haute performance.",
    description:
      "Smartphone Apple avec grand écran et autonomie améliorée.",
    reviews: [{ rating: 4.9, text: "Très performant." }],
    avgRating: 4.8,
  },
  // 12
  {
    id: "12",
    productName: "Smartphone Realme 8",
    imgUrl: phone03,
    category: "mobile",
    price: 1290,
    shortDesc: "Bon smartphone à prix accessible.",
    description:
      "Smartphone fluide avec bonne autonomie, idéal pour un usage quotidien.",
    reviews: [{ rating: 4.8, text: "Très bon pour le prix." }],
    avgRating: 4.8,
  },
  // 13
  {
    id: "13",
    productName: "Smartphone OnePlus Nord",
    imgUrl: phone04,
    category: "mobile",
    price: 1990,
    shortDesc: "Performance et fluidité.",
    description:
      "Smartphone rapide avec une excellente expérience utilisateur.",
    reviews: [{ rating: 4.9, text: "Très fluide." }],
    avgRating: 4.8,
  },
  // 14
  {
    id: "14",
    productName: "iPhone 13 Pro",
    imgUrl: phone05,
    category: "mobile",
    price: 4490,
    shortDesc: "Smartphone haut de gamme Apple.",
    description:
      "iPhone premium avec performances élevées et excellente qualité photo.",
    reviews: [{ rating: 4.9, text: "Top qualité." }],
    avgRating: 4.8,
  },
  // 15
  {
    id: "15",
    productName: "Samsung Galaxy S22",
    imgUrl: phone06,
    category: "mobile",
    price: 2890,
    shortDesc: "Smartphone Samsung puissant.",
    description:
      "Galaxy S22 offrant rapidité, écran de qualité et bon appareil photo.",
    reviews: [{ rating: 4.8, text: "Très bon téléphone." }],
    avgRating: 4.8,
  },
  // 16
  {
    id: "16",
    productName: "Montre classique élégante",
    imgUrl: watch01,
    category: "watch",
    price: 690,
    shortDesc: "Montre élégante pour homme.",
    description:
      "Montre au design classique, adaptée à un usage quotidien.",
    reviews: [{ rating: 4.7, text: "Très élégante." }],
    avgRating: 4.8,
  },
  // 17
  {
    id: "17",
    productName: "Montre Timex Easy Reader",
    imgUrl: watch02,
    category: "watch",
    price: 590,
    shortDesc: "Montre facile à lire et élégante.",
    description:
      "Montre simple et pratique, idéale pour un usage quotidien.",
    reviews: [{ rating: 4.7, text: "Pratique et jolie." }],
    avgRating: 4.8,
  },
  // 18
  {
    id: "18",
    productName: "Montre Rolex Classique",
    imgUrl: watch03,
    category: "watch",
    price: 4250,
    shortDesc: "Montre de luxe Rolex.",
    description: "Montre de luxe avec finition haut de gamme et style intemporel.",
    reviews: [{ rating: 4.9, text: "Magnifique !" }],
    avgRating: 4.8,
  },
  // 19
  {
    id: "19",
    productName: "Apple Watch",
    imgUrl: watch04,
    category: "watch",
    price: 2190,
    shortDesc: "Montre connectée Apple.",
    description:
      "Montre intelligente avec suivi santé et notifications.",
    reviews: [{ rating: 4.9, text: "Très pratique." }],
    avgRating: 4.8,
  },
  // 20
  {
    id: "20",
    productName: "Casque audio sans fil",
    imgUrl: wireless01,
    category: "wireless",
    price: 590,
    shortDesc: "Casque sans fil confortable.",
    description:
      "Casque offrant une bonne qualité sonore et un bon confort.",
    reviews: [{ rating: 4.8, text: "Son clair." }],
    avgRating: 4.8,
  },
  // 21
  {
    id: "21",
    productName: "Casque Beat EP",
    imgUrl: wireless03,
    category: "wireless",
    price: 590,
    shortDesc: "Casque Bluetooth pratique.",
    description:
      "Casque léger et facile à utiliser pour appels et musique.",
    reviews: [{ rating: 4.8, text: "Très pratique." }],
    avgRating: 4.8,
  },
  // 22
  {
    id: "22",
    productName: "Casque Noir Bluetooth",
    imgUrl: wireless02,
    category: "wireless",
    price: 480,
    shortDesc: "Casque audio sans fil.",
    description:
      "Casque léger et robuste, idéal pour écouter de la musique partout.",
    reviews: [{ rating: 4.8, text: "Très bon rapport qualité-prix." }],
    avgRating: 4.8,
  },
];

