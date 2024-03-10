import { User, Vendor } from "@/lib/types/auth/user";
import { create } from "zustand";

type UserStore = {
  user: User | Vendor | null;
  updateUser: (user: User | Vendor) => void;
};

export const useUser = create<UserStore>((set) => ({
  user: null,
  updateUser: (user) => set((state) => ({ ...state, user })),
}));
