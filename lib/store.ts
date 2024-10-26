import { create } from "zustand";

interface ThemeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setIsDarkMode: (value: boolean) => void;
}

const useStore = create<ThemeState>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => {
    set((state) => {
      const newDarkModeState = !state.isDarkMode;
      document.cookie = `isDarkMode=${newDarkModeState}; path=/;`;
      return { isDarkMode: newDarkModeState };
    });
  },
  setIsDarkMode: (value) => set({ isDarkMode: value }),
}));

export default useStore;
