import React from "react";
import { useEffect, useState } from "react";
import { getCurrentTpUserDetail, getCurrentUserDetail, isLoggedIn } from "../authentication/index";
import userContext from "./userContext";

function UserProvider({ children }) {
  const [data, setData] = useState({
    data: {},
    login: false,
  });
  useEffect(() => {
    setData({
      data: getCurrentUserDetail(),
      login: isLoggedIn(),
    });
  }, []);
  console.log(data)
  return (
    <userContext.Provider value={{ data, setData }}>
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;
