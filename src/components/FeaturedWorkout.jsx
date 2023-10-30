import React, { useEffect, useState } from "react";
import { getFeaturedWorkouts } from "../../utils/apiCalls";

const FeaturedWorkout = () => {
  const [latestFeaturedWorkout, setLatestFeaturedWorkout] = useState({});

  useEffect(() => {
    getFeaturedWorkouts().then((data) => {
      setLatestFeaturedWorkout(data[0]);
    });
  }, []);

  if (!latestFeaturedWorkout) {
    return <h2>Loading latest featured workout...</h2>;
  }

  if (latestFeaturedWorkout.body) {
    const createdAt = new Date(latestFeaturedWorkout.createdAt).toDateString();
    return (
      <div className="latest-featured-workout">
        <h2>Latest featured workout:</h2>
        <ul>
          <li className="featured-workout-title">
            {latestFeaturedWorkout.title}
          </li>
          <li>{createdAt}</li>
          <li>Created by: {latestFeaturedWorkout.author}</li>

          {Object.entries(latestFeaturedWorkout.body).map((value) => {
            {
              if (value[0] === "description") {
                return (
                  <li className="featured-workout-description" key={value[0]}>
                    {Object.values(value[1])}
                  </li>
                );
              } else {
                return (
                  <li key={value[0]}>
                    {value[0]}: {Object.keys(value[1])}:{" "}
                    {Object.values(value[1])}
                  </li>
                );
              }
            }
          })}
        </ul>
        <button>View all featured workouts</button>
      </div>
    );
  }
};

export default FeaturedWorkout;
