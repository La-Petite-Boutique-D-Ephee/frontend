import { create } from "zustand";
import { getToken } from "../action.js";

export const useStore = create((set, get) => ({
  user: null,
  fetchUser: async () => {
    const response = await fetch("https://127.0.0.1:8000/api/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${await getToken()}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    set({ user: data.data.user });
    return data.data.user;
  },
}));
