import React from "react";
import { useState } from "react";
import { auth } from "../../firebase";
import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getMongoData } from "../../../utils/apiCalls";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const [signInError, setSignInError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setPersistence(auth, browserSessionPersistence);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      setSignInError(false);
      const mongoData = await getMongoData(userCredential.user.uid);
      setUser((prevUser) => ({
        ...prevUser,
        mongoData: mongoData,
      }));
    } catch (error) {
      setSignInError(true);
    }
  };

  return (
    <div className="sign-in-container">
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <h1>Log in to your account</h1>
        <input
          required
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          required
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Log in</button>
      </form>
      {signInError ? (
        <span className="sign-in-error">Incorrect email or password</span>
      ) : null}

      <h3>
        Don't have an account? <Link to="/signup">Click here</Link>
      </h3>
    </div>
  );
};

export default SignIn;
