import React, { createContext, useContext, useEffect, useState } from "react";
import { getCookie, setCookie } from "../services/cookiemanager";

const [TokenGetterContext, TokenSetterContext] = [
  createContext<string | null>(null),
  createContext<React.Dispatch<React.SetStateAction<string>> | null>(null),
];

export const useToken = () => useContext(TokenGetterContext);
export const useTokenSetter = () => useContext(TokenSetterContext);

export const isAuthed = () => {
  return Boolean(useToken());
};

const getTokenCookie = () => getCookie("token");

export const AuthenticationProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState(getTokenCookie() || "");

  useEffect(() => {
    if (token && getTokenCookie() !== token) {
      setCookie("token", token, {
        maxAge: 60 * 60,
      });
    }
  }, [token]);

  return (
    <TokenSetterContext.Provider value={setToken}>
      <TokenGetterContext.Provider value={token}>
        {children}
      </TokenGetterContext.Provider>
    </TokenSetterContext.Provider>
  );
};
