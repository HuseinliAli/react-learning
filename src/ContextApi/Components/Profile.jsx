import { useState } from "react";
import { useUserContext } from "../context/UserContext";
const Profile = () => {
  const { user, setUser } = useUserContext();
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(true);
  };
  const handleLogout = () => {
    setIsLogin(false);
  };
  return (
    <div>
      {isLogin === true ? (
        <div>
          <h1>hello dear {user.username}</h1>
          <button className="btn btn-secondary" onClick={handleLogout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h1>hello dear visitor</h1>
          <button className="btn btn-primary" onClick={handleLogin}>
            login
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
