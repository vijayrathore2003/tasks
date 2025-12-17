import { create } from "zustand";
import type { User } from "../api";

interface authState {
    user: null | User;
    setUser: (user: User) => void;
    clearUser: () => void;
}


export const useAuthStore = create<authState>()(
    (set) => ({
        user: null,
        setUser: (user: User) => set({ user }),
        clearUser: () => set({ user: null }),
    })
);