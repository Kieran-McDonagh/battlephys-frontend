import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import UserProfile from "./components/UserProfile";

function App() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    );
  } else if (user) {
    return (
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/user" element={<UserProfile />} />
        </Routes>
      </div>
    );
  }
}

export default App;
