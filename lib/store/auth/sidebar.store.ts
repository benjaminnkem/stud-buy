import { SidebarLink } from "@/lib/types/auth/sidebar.types";
import { create } from "zustand";

type UseSidebar = {
  isOpen: boolean;
  toggleIsOpen: () => void;
  controlOpen: (state: boolean) => void;

  links: SidebarLink[];
  updateLinks: (link: SidebarLink[]) => void;
};

export const useSidebar = create<UseSidebar>((set) => ({
  isOpen: true,
  links: [],
  controlOpen: (isOpen) => set((state) => ({ ...state, isOpen })),
  toggleIsOpen: () => set((state) => ({ ...state, isOpen: !state.isOpen })),
  updateLinks: (links) => set((state) => ({ ...state, links })),
}));
