export type SidebarChild = {
  label: string;
  href: string;
  children: SidebarChild[] | null;
};

export type SidebarLink = {
  heading: string;
  links: SidebarChild[];
};
