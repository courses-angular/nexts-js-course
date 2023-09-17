import React, { FunctionComponent, useContext } from "react";
import classes from "../../styles/MeetupList.module.css";
import { Meetup } from "../models/meetup";
import Card from "../ui/Card";
import FavoritesContent from "../../store/favorites-content";

const MeetupItem: FunctionComponent<Meetup> = (meetup) => {
  const favoritesCtx = useContext(FavoritesContent);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(meetup.id);
  const ToggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(meetup.id);
    } else {
      favoritesCtx.addFavorite(meetup);
    }
  };

  return (
    <li key={meetup.id}>
      <Card>
        <div className={classes.imgWrapper}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <h2>{meetup.title}</h2>
        <p>{meetup.description}</p>
        <address>{meetup.address}</address>
        <div className={classes.actions}>
          <button
            className={classes.button}
            onClick={ToggleFavoriteStatusHandler}
          >
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
