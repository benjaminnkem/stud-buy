import { Food } from "../types";

export const foods: Food[] = [
  {
    id: crypto.randomUUID(),
    name: "Jollof Rice",
    image: "/images/home/jollof-rice-min.jpg",
    description: "Boripe foods is a very popular Nigerian food store located at FUNAAB and make outstanding meals.",
    price: 200,
    seller: "Boripe Foods",
    isAvailable: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Egusi",
    image: "/images/home/egusi.jpg",
    description: "Boripe foods is a very popular Nigerian food store located at FUNAAB and make outstanding meals.",
    price: 250,
    seller: "Boripe Foods",
    isAvailable: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Beans and Plantain",
    image: "/images/home/beans-plantain.jpg",
    description: "Boripe foods is a very popular Nigerian food store located at FUNAAB and make outstanding meals.",
    price: 400,
    seller: "Boripe Foods",
    isAvailable: true,
  },
  // {
  //   id: crypto.randomUUID(),
  //   name: "Fanta",
  //   image: "/images/home/egusi.jpg",
  //   description: "Boripe foods is a very popular Nigerian food store located at FUNAAB and make outstanding meals.",
  //   price: 250,
  //   seller: "Boripe Foods",
  //   isAvailable: true,
  // },
  // {
  //   id: crypto.randomUUID(),
  //   name: "Viju Milk",
  //   image: "/images/home/beans-plantain.jpg",
  //   description: "Boripe foods is a very popular Nigerian food store located at FUNAAB and make outstanding meals.",
  //   price: 400,
  //   seller: "Boripe Foods",
  //   isAvailable: true,
  // },
];
