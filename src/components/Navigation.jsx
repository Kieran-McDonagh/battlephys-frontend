import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Navigation = () => {
  const { setUser } = useContext(UserContext);
  return (
    <div>
      <button
        onClick={() => {
          setUser(null);
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Navigation;
