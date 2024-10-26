// import { create } from "zustand";

// interface ThemeState {
//   isDarkMode: boolean;
//   toggleDarkMode: () => void;
//   setIsDarkMode: (value: boolean) => void;
// }

// const useStore = create<ThemeState>((set) => ({
//   isDarkMode: false,
//   toggleDarkMode: () => {
//     set((state) => {
//       const newDarkModeState = !state.isDarkMode;
//       document.cookie = `isDarkMode=${newDarkModeState}; path=/;`;
//       return { isDarkMode: newDarkModeState };
//     });
//   },
//   setIsDarkMode: (value) => set({ isDarkMode: value }),
// }));

// export default useStore;
// stores/useStore.ts
// stores/useStore.ts
import { create } from "zustand";

interface Movie {
  poster_path: any;
  id: number;
  title: string;
}

interface AppState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setIsDarkMode: (value: boolean) => void;
  watchlist: Movie[];
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (id: number) => void;
}

const useStore = create<AppState>((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => {
    set((state) => {
      const newDarkModeState = !state.isDarkMode;
      document.cookie = `isDarkMode=${newDarkModeState}; path=/;`;
      return { isDarkMode: newDarkModeState };
    });
  },
  setIsDarkMode: (value) => set({ isDarkMode: value }),

  watchlist: [],
  addToWatchlist: (movie) =>
    set((state) => ({
      watchlist: [...state.watchlist, movie],
    })),
  removeFromWatchlist: (id) =>
    set((state) => ({
      watchlist: state.watchlist.filter((movie) => movie.id !== id),
    })),
}));

export default useStore;
