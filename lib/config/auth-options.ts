import CredentialsProvider from "next-auth/providers/credentials";
import { publicApi } from "./axios-instance";
import { decode } from "jsonwebtoken";
import { AuthOptions } from "next-auth";

type LoginPayload = {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
};

type BasicUserSignature = {
  id: string;
  email: string;
  isVerified: boolean;
  firstName: string;
  lastName: string;
};

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "email", label: "Email", placeholder: "enter email" },
        password: { type: "password", label: "Password", placeholder: "****" },
      },
      async authorize(credentials, _) {
        if (!credentials) return null;

        const { email, password } = credentials;

        try {
          if (!email || !password) return null;

          const { data } = await publicApi.post<LoginPayload>("/auth/login", { email, password });

          const decodedData = decode(data.tokens.accessToken) as BasicUserSignature;

          return { ...data, ...decodedData };
        } catch (e: any) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // jwt: async () => {},
    // session: async () => {},
  },
  pages: {
    error: "/account/login",
    signIn: "/account/login",
    signOut: "/",
  },
};

export default authOptions;
