type BaseUser = {
  id: string;
  email: string;
  password: string;
  image?: string;
  coverImage?: string;
  role: "USER" | "VENDOR";
  bio?: string;
};

export type User = {
  firstName: string;
  username: string;
} & BaseUser;

export type Vendor = { restaurantName: string } & BaseUser;
