import { useEffect, useState } from "react";
import { Meetup } from "../components/models/meetup";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fetchedMeetups, setMeetups] = useState<Array<Meetup>>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-course-by-maximilian-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let meetups: Meetup[] = [];
        for (const key in data) {
          const meetup: Meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setMeetups(meetups);
      });
  }, []);

  return (
    <section>
      <h1>All Meetups Page</h1>
      {isLoading && <p>Loading...</p>}
      <MeetupList meetups={fetchedMeetups} />
    </section>
  );
};
export default AllMeetupsPage;
