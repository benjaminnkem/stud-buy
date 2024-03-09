"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { dancingScript } from "./fonts";

type Props = React.PropsWithChildren;

const AuthProvider: React.FC<Props> = ({ children }) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    // TODO: update state manager if session
  }, [status]);

  if (status === "loading")
    return (
      <div className="bg-deepRed/20 fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="flex items-center gap-4">
          <p
            className={`font-extrabold text-deepRed ${dancingScript.className} animate-pulse`}
            style={{ fontSize: "10rem" }}
          >
            StudBuy.
          </p>
          <div className="w-16 h-16 border-[6px] flex-shrink-0 border-black/5 border-t-deepRed animate-spin"></div>
        </div>
      </div>
    );

  return <>{children}</>;
};

export default AuthProvider;
