import { SidebarLink } from "@/lib/types/dashboard/sidebar.types";

export const sidebarLinks: SidebarLink[] = [
  {
    heading: "Main",
    links: [
      {
        label: "Home",
        href: "/home",
        children: null,
      },
      {
        label: "Analytics",
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
      {
        label: "Reports",
        href: "/reports",
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
    links: [],
  },
];
