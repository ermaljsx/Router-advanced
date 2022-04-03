import React, {
  useState,
  useEffect,
  useCallback
} from "react";

let logoutTimer;

const AuthContext = React.createContext ({
  token: "",
  isLoggedIn: false,
  login: ( token ) => {},
  logout: () => {},
});

const calculateRemainingTime = ( expirationTime ) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date( expirationTime ).getTime();
  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime( storedExpirationDate );

  if ( remainingTime <= 4000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = ( props ) => {
  const tokenData = retrieveStoredToken();
  // const initialToken = localStorage.getItem ("token");

  let initialToken;
  if ( tokenData ) {
    initialToken = tokenData.token;
  };

  const [ token, setToken ] = useState( initialToken );
  const userIsLoggedIn = !!token;

  const handleLogout = useCallback (
    () => {
      setToken( null );
      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");

      if ( logoutTimer ) {
        clearTimeout( logoutTimer );
      }
    }, []
  );

  const handleLogin = ( token, expirationTime ) => {
    setToken( token );
    localStorage.setItem (
      "token",
      token
    );
    localStorage.setItem (
      "expirationTime",
      expirationTime
    );

    const remainingTime = calculateRemainingTime ( expirationTime );

    logoutTimer = setTimeout (
      handleLogout,
      remainingTime
    );
  };

  useEffect (
    () => {
      if ( tokenData ) {
        console.log( tokenData.duration );
        logoutTimer = setTimeout (
          handleLogout,
          tokenData.duration
        );
      }
    }, [ tokenData, handleLogout ]
  );

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: handleLogin,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value = { contextValue }>
      { props.children }
    </AuthContext.Provider>
  );
};

export default AuthContext;