"use client";

import { ToastOptions, Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

// register gsap plugins
gsap.registerPlugin(ScrollTrigger);

const Providers = ({ children }: React.PropsWithChildren) => {
  const toastOptions: ToastOptions = {
    duration: 2000,
    style: {},
    position: "bottom-left",
    ariaProps: {
      "aria-live": "polite",
      role: "alert",
    },
  };

  return (
    <>
      <SessionProvider>
        <Toaster {...toastOptions} />
        {children}
      </SessionProvider>
    </>
  );
};

export default Providers;
