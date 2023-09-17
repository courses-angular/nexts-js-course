import { createContext, useState } from "react";
import { Meetup } from "../components/models/meetup";

const FavoritesContent = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup: Meetup) => {},
  removeFavorite: (meetupId: number) => {},
  itemIsFavorite: (meetupId: number): any => {},
});
export const FavoritesContentProvider = (props: any) => {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoritesHandler(favoriteMeetup: any) {
    debugger;
    // Update  state depends on previous state
    setUserFavorites((prevState) => {
      return prevState.concat(favoriteMeetup);
    });

    console.group("%c GROUP", "color:#84B59F");
    console.log({ userFavorites });
    console.groupEnd();
  }

  const removeFavoriteHandler = (meetupId: number) => {
    setUserFavorites((prevState) =>
      prevState.filter((meetup: Meetup) => meetup.id !== meetupId)
    );
  };

  const itemIsFavoriteHandler = (meetupId: number): boolean => {
    return userFavorites.some((meetup: Meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoritesHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContent.Provider value={context}>
      {props.children}
    </FavoritesContent.Provider>
  );
};
export default FavoritesContent;
