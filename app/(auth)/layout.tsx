import DashboardProvider from "@/lib/providers/dashboard-provider";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  robots: {
    nocache: true,
    index: false,
  },
};

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <DashboardProvider>{children}</DashboardProvider>
    </main>
  );
};

export default Layout;
