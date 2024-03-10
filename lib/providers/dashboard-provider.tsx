"use client";

import DashboardNavbar from "@/components/Layout/Dashboard/Navbar";
import DashboardSidebar from "@/components/Layout/Dashboard/Sidebar";
import { useSession } from "next-auth/react";
import { useSidebar } from "../store/auth/sidebar.store";
import { SidebarLink } from "../types/auth/sidebar.types";
import { Book, Home, PieChart, Settings } from "lucide-react";
import { useEffect } from "react";

type Props = React.PropsWithChildren;

const DashboardProvider: React.FC<Props> = ({ children }) => {
  const { data: session } = useSession();
  const { updateLinks } = useSidebar();

  const splitSidebarLinks = (): SidebarLink[] => {
    // TODO: Do a role check.
    return [
      {
        heading: "Main",
        links: [
          {
            label: "Home",
            icon: <Home size={20} />,
            href: "/dashboard",
            children: null,
          },

          {
            label: "Reports",
            href: "/reports",
            icon: <Book size={20} />,
            children: [
              {
                label: "Monthly",
                href: "/reports/monthly",
                children: null,
              },
              {
                label: "Yearly",
                href: "/reports/yearly",
                children: null,
              },
            ],
          },
          {
            label: "Settings",
            href: "/settings",
            icon: <Settings size={20} />,
            children: [
              {
                label: "General",
                href: "/settings/general",
                children: null,
              },
              {
                label: "Profile",
                href: "/settings/profile",
                children: null,
              },
              {
                label: "Notifications",
                href: "/settings/notifications",
                children: null,
              },
            ],
          },
        ],
      },
      {
        heading: "Analytics",
        links: [
          {
            label: "Analytics",
            icon: <PieChart size={20} />,
            href: "/analytics",
            children: [
              {
                label: "Overview",
                href: "/analytics/overview",
                children: null,
              },
              {
                label: "Traffic",
                href: "/analytics/traffic",
                children: null,
              },
              {
                label: "User Engagement",
                href: "/analytics/user-engagement",
                children: null,
              },
            ],
          },
        ],
      },
    ];
  };

  useEffect(() => {
    updateLinks(splitSidebarLinks());
  }, []);

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
