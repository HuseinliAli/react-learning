import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: "oiaf-sa13-mc43-13m2",
    username: "ali.h",
    bio: "developer",
  });
  const values = { user, setUser };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
