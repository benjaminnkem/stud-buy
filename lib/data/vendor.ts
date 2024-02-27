import { Food } from "../types";
import { VendorTab } from "../types";

export const tabs: VendorTab[] = [
  { name: "Menu", tag: "menu" },
  { name: "Info", tag: "info" },
  { name: "Reviews", tag: "reviews" },
];

export const menuCats = ["rice", "beans", "chicken", "drinks", "pizza", "cake", "soup", "swallow"];

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
  {
    id: crypto.randomUUID(),
    name: "Bottle Water",
    image: "/images/vendors/food/bottle-water.jpg",
    description: "Boripe foods is a very popular Nigerian food store located at FUNAAB and make outstanding meals.",
    price: 250,
    seller: "Boripe Foods",
    isAvailable: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Viju Milk",
    image: "/images/vendors/food/viju.jpg",
    description: "Boripe foods is a very popular Nigerian food store located at FUNAAB and make outstanding meals.",
    price: 600,
    seller: "Boripe Foods",
    isAvailable: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Plantain",
    image: "/images/home/beans-plantain.jpg",
    description: "Boripe foods is a very popular Nigerian food store located at FUNAAB and make outstanding meals.",
    price: 600,
    seller: "Boripe Foods",
    isAvailable: true,
  },
];
