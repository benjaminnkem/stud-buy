"use client";

import { ToastOptions, Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// register gsap plugins
gsap.registerPlugin(ScrollTrigger);

const queryClient = new QueryClient();

const Providers = ({ children }: React.PropsWithChildren) => {
  const toastOptions: ToastOptions = {
    duration: 6000,
    style: {},
    position: "top-center",
    ariaProps: {
      "aria-live": "polite",
      role: "alert",
    },
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <Toaster {...toastOptions} />
          {children}
        </SessionProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default Providers;
