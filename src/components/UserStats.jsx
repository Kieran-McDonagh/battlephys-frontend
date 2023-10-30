import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const UserStats = () => {
  const { user } = useContext(UserContext);

  if (!user.mongoData) {
    return <h3>Loading...</h3>;
  }

  const { goal, height, weight, age, calories } = user.mongoData;

  return (
    <ul className="user-stats-list">
      <li className="your-stats">Your stats:</li>
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
