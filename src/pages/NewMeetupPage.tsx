import NewMeetupForm from "../components/meetups/NewMeetupForm";
import React from "react";
import classes from "../styles/NewMeetupPage.module.css";
import { Meetup } from "../components/models/meetup";

interface OwnProps {}

type Props = OwnProps;

const NewMeetupPage = () => {
  const onAddMeetupSubmit = (meetupData: Meetup) => {
    const meetup = meetupData;
    debugger;
  };

  return (
    <section className={classes.newMeetupSection}>
      <h1>New Meetup Page</h1>
      <NewMeetupForm
        onAddMeetup={(meetupData) => onAddMeetupSubmit(meetupData)}
      />
    </section>
  );
};
export default NewMeetupPage;
