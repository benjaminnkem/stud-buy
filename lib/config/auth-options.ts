import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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

        const user = { id: "1", name: "Benjamin Nkem", email: "benjaminnkem@gmail.com" };

        if (user) return user;

        return null;
      },
    }),
  ],
};

export default authOptions;
