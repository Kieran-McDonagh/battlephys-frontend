import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const UserStats = () => {
  const { user } = useContext(UserContext);
  const { goal, height, weight, age, calories } = user.mongoData;

  return (
    <ul className="homepage-stats-list">
      Your stats:
      <li>Current goal: {goal}</li>
      <li>Height(cm): {height}</li>
      <li>Weight(kg): {weight}</li>
      <li>Age: {age}</li>
      <li>
        Calorie goal:{" "}
        {goal === "build muscle"
          ? calories + calories * 0.1 + 1000 + 300
          : goal === "maintain weight"
          ? calories + calories * 0.1 + 1000
          : goal === "lose fat"
          ? calories + calories * 0.1 + 1000 - 300
          : null}
      </li>
    </ul>
  );
};

export default UserStats;
