"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { dancingScript } from "../utils/fonts";
import { useUser } from "../data/auth/user.store";
import { motion } from "framer-motion";
import { fadeToTopSlowVariant } from "../utils/variants";

type Props = React.PropsWithChildren;

const AuthProvider: React.FC<Props> = ({ children }) => {
  const { data: session, status } = useSession();
  const { updateUser } = useUser();

  useEffect(() => {
    if (session && status === "authenticated") {
      updateUser(session.user);
    }
  }, [status]);

  if (status === "loading")
    return (
      <div className="bg-deepRed/20 fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="flex items-center gap-4">
          <motion.p
            {...fadeToTopSlowVariant}
            className={`font-extrabold text-4xl text-deepRed ${dancingScript.className} animate-pulse`}
            style={{ fontSize: "8rem" }}
          >
            StudBuy.
          </motion.p>
          {/* <div className="size-16 border-[6px] flex-shrink-0 border-black/5 border-t-deepRed animate-spin rounded-full"></div> */}
        </div>
      </div>
    );

  return <>{children}</>;
};

export default AuthProvider;
