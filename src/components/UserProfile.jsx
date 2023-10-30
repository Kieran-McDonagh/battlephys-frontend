import React from "react";
import UserStats from "./UserStats";
import CreateWorkout from "./CreateWorkout";

const UserProfile = () => {
  return (
    <div className="user-profile">
      <UserStats />
      <section>
        <CreateWorkout />
        <h2>display user workouts here</h2>
      </section>
    </div>
  );
};

export default UserProfile;
