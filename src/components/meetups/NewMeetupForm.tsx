import React, { FunctionComponent, useRef } from "react";
import Card from "../ui/Card";
import classes from "../../styles/NewMeetupForm.module.css";
import { Meetup } from "../models/meetup";

interface OwnProps {
  onAddMeetup: (meetupData: Meetup) => void;
}

type Props = OwnProps;

const NewMeetupForm: FunctionComponent<Props> = ({ onAddMeetup }) => {
  const titleInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const imageInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const addressInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const descriptionInputRef =
    useRef() as React.MutableRefObject<HTMLTextAreaElement>;

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    debugger;
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData: Meetup = {
      id: +Math.random().toString().split(".")[1],
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="desc">Meetup Description</label>
          <textarea
            id="desc"
            required
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
