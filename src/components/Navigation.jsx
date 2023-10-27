import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Navigation = () => {
  const { setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <nav className="top-nav-bar">
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navigation;

