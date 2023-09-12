import { DUMMY_DATA } from "../components/data/mock";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
};
export default AllMeetupsPage;
