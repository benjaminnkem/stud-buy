"use client";

import { ToastOptions, Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: React.PropsWithChildren) => {
  const toastOptions: ToastOptions = {
    duration: 2000,
    style: {},
    position: "top-right",
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
