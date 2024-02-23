type NavLink = {
  label: string;
  path: string;
  icon?: JSX.Element;
};

type NavData = {
  links: NavLink[];
};

export const navLinks: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/" },
  { label: "Vendors", path: "/vendors" },
  { label: "Trending 🔥", path: "/" },
  // { label: "About", path: "/" },
];
