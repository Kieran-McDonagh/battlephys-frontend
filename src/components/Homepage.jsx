import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import CreateWorkout from "./CreateWorkout";
import FeaturedWorkout from "./FeaturedWorkout";
import UserStats from "./UserStats";

const Homepage = () => {
  const { user } = useContext(UserContext);

  if (user.mongoData) {
    const { username } = user.mongoData;

    return (
      <div className="homepage">
        <h2 className="greeting">Hello {username}!</h2>
        <FeaturedWorkout />
        <UserStats />
        <CreateWorkout />
      </div>
    );
  }
};

export default Homepage;
