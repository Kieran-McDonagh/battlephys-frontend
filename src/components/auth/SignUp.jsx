import React from "react";
import { useState } from "react";
import { auth } from "../../firebase";
import {
  setPersistence,
  createUserWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { postNewUser } from "../../../utils/apiCalls";
import { calorieCalculation } from "../../../utils/calorieCalculation";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [goal, setGoal] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setPersistence(auth, browserSessionPersistence);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      const calories = calorieCalculation(sex, weight, height, age);
      const userToPost = {
        username: username,
        goal: goal,
        weight: weight,
        height: height,
        age: age,
        sex: sex,
        calories: calories,
        admin: false,
        firebaseId: userCredential.user.uid,
      };

      const data = await postNewUser(userToPost);
      const { newUser } = data;
      setUser((prevUser) => ({
        ...prevUser,
        mongoData: newUser,
      }));
      navigate("/");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        <label htmlFor="email">Enter your email:</label>
        <input
          id="email"
          type="email"
          placeholder="user@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="username">Create a username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="password">Create a password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label htmlFor="goal">Goal:</label>
        <select
          name="goal"
          id="goal"
          value={goal}
          onChange={(e) => {
            setGoal(e.target.value);
          }}
        >
          <option value=""></option>
          <option value="lose fat">Lose fat</option>
          <option value="maintain weight">Maintain weight</option>
          <option value="build muscle">Build muscle</option>
        </select>
        <label htmlFor="weight">Current weight(kg):</label>
        <input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        />
        <label htmlFor="height">Height(cm):</label>
        <input
          id="height"
          type="number"
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <label htmlFor="sex">Sex:</label>
        <select
          name="sex"
          id="sex"
          value={sex}
          onChange={(e) => {
            setSex(e.target.value);
          }}
        >
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
