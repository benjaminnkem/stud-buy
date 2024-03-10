export type SidebarLink = {
  heading: string;
  links: SidebarChild[];
};

export type SidebarChild = {
  label: string;
  icon?: JSX.Element;
  href: string;
  children: SidebarChild[] | null;
};
