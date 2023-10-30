import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <nav className="top-nav-bar">
      <button onClick={() => {
        navigate('/user')
      }}>Profile</button>
      <button onClick={() => {
        navigate('/')
      }}>Home</button>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navigation;
