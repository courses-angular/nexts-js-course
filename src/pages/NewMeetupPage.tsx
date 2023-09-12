import NewMeetupForm from "../components/meetups/NewMeetupForm";
import React from "react";
import Card from "../components/ui/Card";

const NewMeetupPage = () => {
  return (
    <section>
      <h1>New Meetup Page</h1>
      <Card>
        <NewMeetupForm />
      </Card>
    </section>
  );
};
export default NewMeetupPage;
