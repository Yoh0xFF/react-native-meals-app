import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

interface FavoritesContextDataType {
  favoriteMealIds: string[];
  addFavorites: (id: string) => void;
  remFavorites: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextDataType>({
  favoriteMealIds: [],
  addFavorites: (id: string) => {},
  remFavorites: (id: string) => {},
});

export function FavoritesContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  const add = (id: string) => {
    setFavoriteMealIds((prevState) => [id, ...prevState]);
  };
  const rem = (id: string) => {
    setFavoriteMealIds((prevState) => [...prevState.filter((x) => x !== id)]);
  };

  const value: FavoritesContextDataType = useMemo(
    () => ({
      favoriteMealIds,
      addFavorites: add,
      remFavorites: rem,
    }),
    [favoriteMealIds, add, rem]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoritesContext(): FavoritesContextDataType {
  const context = useContext(FavoritesContext);

  if (context == null) {
    throw new Error('Favorites context undefined');
  }

  return context;
}
