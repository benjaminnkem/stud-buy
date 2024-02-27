import { create } from "zustand";
import { Tray } from "../types/vendor.types";

export const useTray = create<Tray>((set) => ({
  items: null,
  updateItems: (items) => set(() => ({ items })),
  deleteItems: (id) => set((state) => ({ items: state.items?.filter((el) => el.id !== id) })),
}));
