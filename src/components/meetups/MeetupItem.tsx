import React, { FunctionComponent } from "react";
import classes from "../../styles/MeetupList.module.css";
import { Meetup } from "../models/meetup";
import Card from "../ui/Card";

const MeetupItem: FunctionComponent<Meetup> = (meetup) => {
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
          <button className={classes.button}>Add to favorites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
