import { createContext, useState } from "react";
import { Meetup } from "../components/models/meetup";

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

  function addFavotiesHandler(favoriteMeetup: any) {
    // Update  state depends on previous state
    setUserFavorites((prevState) => prevState.concat(favoriteMeetup));
  }

  const removeFavoriteHandler = (meetupId: number) => {
    setUserFavorites((prevState) =>
      prevState.filter((meetup: Meetup) => meetup.id !== meetupId)
    );
  };

  const itemIsFavoriteHandler = (meetupId: number) => {
    return userFavorites.some((meetup: Meetup) => meetup.id === meetupId);
  };

  return (
    <FavoritesContent.Provider value={context}>
      {props.children}
    </FavoritesContent.Provider>
  );
};
