import { ToastOptions, Toaster } from "react-hot-toast";

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
      <Toaster {...toastOptions} />
      {children}
    </>
  );
};

export default Providers;
