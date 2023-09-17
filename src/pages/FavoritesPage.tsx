import { useContext } from "react";
import FavoritesContent from "../store/favorites-content";
import MeetupList from "../components/meetups/MeetupList";
import classes from "../styles/Favorites.module.css";

const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContent);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <p className={classes.noContent}>
        You got no favorites yet. Start adding some?
      </p>
    );
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>Favorites Page</h1>
      {content}
    </section>
  );
};
export default FavoritesPage;
