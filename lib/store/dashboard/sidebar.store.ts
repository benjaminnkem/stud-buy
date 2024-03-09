import { create } from "zustand";

type UseSidebar = {
  isOpen: boolean;
  toggleIsOpen: () => void;
};

export const useSidebar = create<UseSidebar>((set) => ({
  isOpen: true,
  toggleIsOpen: () => set((state) => ({ ...state, isOpen: !state.isOpen })),
}));
