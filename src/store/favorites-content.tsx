import { createContext, useState } from "react";

const FavoritesContent = createContext({
  favorites: [],
  totalFavorites: 0,
});
const FavoritesContentProvider = (props: any) => {
  const [userFavorites, setUserFavorites] = useState([]);
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  return (
    <FavoritesContent.Provider value={context}>
      {props.children}
    </FavoritesContent.Provider>
  );
};
