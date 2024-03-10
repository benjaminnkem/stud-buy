import NextAuth from "next-auth";
import { User, Vendor } from "./auth/user";

declare module "next-auth" {
  interface Session {
    user: User | Vendor;
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  }
}

import { JWT } from "next-auth/jwt";
declare module "next-auth/jwt" {
  interface JWT {
    user: User | Vendor;
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  }
}
