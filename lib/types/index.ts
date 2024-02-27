export type Location = "funaab" | "futa"; // for now

export type Institution = { abbr: string; fullName?: string; location: Location };

export type Tab = { name: string; tag: string };

export type VendorTag = "menu" | "info" | "reviews";
export type VendorTab = { name: string; tag: VendorTag };

export type Food = {
  name: string;
  image: string;
  description: string;
  seller: string;
  price: number;
  isAvailable: boolean;
};
