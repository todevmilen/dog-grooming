// import hero slider images
import HeroSlideImage1 from "./assets/img/dogs/dog-slide-1.png";
import HeroSlideImage2 from "./assets/img/dogs/dog-slide-2.png";
import HeroSlideImage3 from "./assets/img/dogs/dog-slide-3.png";
// import dog category images
import DogCateg1 from "./assets/img/dogs/dog-categ-1.png";
import DogCateg2 from "./assets/img/dogs/dog-categ-2.png";
import DogCateg3 from "./assets/img/dogs/dog-categ-3.png";
import DogCateg4 from "./assets/img/dogs/dog-categ-4.png";
// import social icons
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export const navigation = [
  {
    name: "начало",
    href: "#",
  },
  {
    name: "цени",
    href: "#prices",
  },
  {
    name: "контакти",
    href: "#contact",
  },
];

export const heroSlider = [
  {
    id: 1,
    title: "Golden Pets  Груминг и Спа",
    image: <HeroSlideImage1 />,
    subtitle: "За здравето и красотата на вашия домашен любимец",
    buttonText: "Get an appointment",
  },
  {
    id: 2,
    title: "С грижа и любов към вашия любимец",
    image: <HeroSlideImage2 />,
    buttonText: "Get an appointment",
  },
];

export const bundleData = [
  {
    id: 1,
    image: <DogCateg1 />,
    name: "Малко",
    dogCategory: "1 - 5 kg",
    services: [
      {
        name: "цялостен груминг за късокосмести",
        price: "40 лв",
        list: [
          "Подстригване",
          "Оформяне",
          "Къпане",
          "Сушене",
          "Подрязване на нокти",
          "Почистване на уши",
        ],
      },
      {
        name: "цялостен груминг за всички породи - без късокосмести",
        price: "45 лв",
        list: [
          "Подстригване",
          "Оформяне",
          "Къпане",
          "Сушене",
          "Подрязване на нокти",
          "Почистване на уши",
        ],
      },
      {
        name: "Допълнителни услуги",
        price: " ",
        list: [
          "Почистване на уши: 7 лв",
          "Подрязване на нокти: 7 лв",
          "Дентална хигиена: 60 лв",
          "Личен накрайник: 25 лв",
          "Озонотерапия: 50 лв",
          "Озонотерапия към основен груминг: 25лв",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Средно",
    image: <DogCateg2 />,
    dogCategory: "5 - 10 kg",
    services: [
      {
        name: "цялостен груминг за късокосмести",
        price: "50 лв",
        list: [
          "Подстригване",
          "Оформяне",
          "Къпане",
          "Сушене",
          "Подрязване на нокти",
          "Почистване на уши",
        ],
      },
      {
        name: "цялостен груминг за всички породи - без късокосмести",
        price: "55 лв",
        list: [
          "Подстригване",
          "Оформяне",
          "Къпане",
          "Сушене",
          "Подрязване на нокти",
          "Почистване на уши",
        ],
      },
      {
        name: "Допълнителни услуги",
        list: [
          "Почистване на уши: 7 лв",
          "Подрязване на нокти: 7 лв",
          "Дентална хигиена: 60 лв",
          "Личен накрайник: 25 лв",
          "Озонотерапия: 50 лв",
          "Озонотерапия към основен груминг: 25лв",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Голямо",
    image: <DogCateg3 />,
    dogCategory: "над 10 kg",
    services: [
      {
        name: "цялостен груминг за късокосмести",
        price: "60 лв",
        list: [
          "Подстригване",
          "Оформяне",
          "Къпане",
          "Сушене",
          "Подрязване на нокти",
          "Почистване на уши",
        ],
      },
      {
        name: "цялостен груминг за всички породи - без късокосмести",
        price: "65 лв",
        list: [
          "Подстригване",
          "Оформяне",
          "Къпане",
          "Сушене",
          "Подрязване на нокти",
          "Почистване на уши",
        ],
      },
      {
        name: "Допълнителни услуги",
        list: [
          "Почистване на уши: 7 лв",
          "Подрязване на нокти: 7 лв",
          "Дентална хигиена: 60 лв",
          "Личен накрайник: 25 лв",
          "Озонотерапия: 50 лв",
          "Озонотерапия към основен груминг: 25лв",
        ],
      },
    ],
  },
];

export const social = [
  {
    icon: <AiFillFacebook />,
    href: "https://www.facebook.com/profile.php?id=100083217377875",
  },
  {
    icon: <AiFillInstagram />,
    href: "https://www.instagram.com/golden_pets.grooming/",
  },
];
