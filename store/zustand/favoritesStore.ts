import { create } from 'zustand';

interface FavoritesStoreType {
  favoriteMealIds: string[];
  addFavorites: (id: string) => void;
  remFavorites: (id: string) => void;
}

export const useFavoritesStore = create<FavoritesStoreType>((set) => ({
  favoriteMealIds: [],
  addFavorites: (id: string) =>
    set((state) => ({ favoriteMealIds: [id, ...state.favoriteMealIds] })),
  remFavorites: (id: string) =>
    set((state) => ({
      favoriteMealIds: [...state.favoriteMealIds.filter((x) => x !== id)],
    })),
}));
