import NewMeetupForm from "../components/meetups/NewMeetupForm";
import React from "react";
import classes from "../styles/NewMeetupPage.module.css";
import { Meetup } from "../components/models/meetup";
import { useNavigate } from "react-router-dom";

interface OwnProps {}

type Props = OwnProps;

const NewMeetupPage = () => {
  const navigate = useNavigate();
  const onAddMeetupSubmit = (meetupData: Meetup) => {
    fetch(
      "https://react-course-by-maximilian-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
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
