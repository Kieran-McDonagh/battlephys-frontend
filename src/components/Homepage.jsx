import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

import FeaturedWorkout from "./FeaturedWorkout";

const Homepage = () => {
  const { user } = useContext(UserContext);
  if (!user.mongoData) {
    return <h3>Loading...</h3>;
  }

  const { username } = user.mongoData;
  return (
    <section className="homepage">
      <h2 className="greeting">Hello {username}!</h2>
      <FeaturedWorkout />
    </section>
  );
};

export default Homepage;
