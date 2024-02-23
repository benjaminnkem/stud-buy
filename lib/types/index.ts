export type Location = "funaab" | "futa"; // for now

export type Institution = { abbr: string; fullName?: string; location: Location };

export type Food = {
  name: string;
  image: string;
  description: string;
  seller: string;
  price: number;
};
