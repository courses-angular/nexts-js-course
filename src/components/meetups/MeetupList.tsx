import React, { FunctionComponent } from "react";
import { Meetup } from "../models/meetup";
import MeetupItem from "./MeetupItem";
import classes from "../../styles/MeetupList.module.css";

interface OwnProps {
  meetups: Meetup[];
}

type Props = OwnProps;

const MeetupList: FunctionComponent<Props> = ({ meetups }) => {
  return (
    <>
      <ul className={classes.meetups}>
        {meetups.map((meetup) => {
          return <MeetupItem key={meetup.id} {...meetup} />;
        })}
      </ul>
    </>
  );
};

export default MeetupList;
