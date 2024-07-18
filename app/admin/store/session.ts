import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { User } from "../types/user";

type sessionStore = {
  token: string;
  setToken: (token: string) => void;
  user: User;
  setUser: (user: User) => void;
};

const useSessionStore = create<sessionStore>()(
  persist(
    (set, get) => ({
      token: "",
      setToken: (token) => set({ token: get().token || token }),
      user: {} as User,
      setUser: (user) => set({ user }),
    }),
    {
      name: "session",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useSessionStore;
