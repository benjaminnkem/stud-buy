"use client";

import DashboardNavbar from "@/components/Layout/Dashboard/Navbar";
import DashboardSidebar from "@/components/Layout/Dashboard/Sidebar";

type Props = React.PropsWithChildren;

const DashboardProvider: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex">
      <DashboardSidebar />
      <div>
        <DashboardNavbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardProvider;
