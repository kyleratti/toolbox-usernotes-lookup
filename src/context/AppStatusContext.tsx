import React, { createContext, useContext, useState } from "react";
import { AppStatus } from "../structures/appstatus";

type AppStatusUpdate = {
  status: AppStatus;
  message?: string;
};

const defaultStatus: AppStatusUpdate = {
  status: AppStatus.Ready,
};

const [AppStatusGetterContext, AppStatusSetterContext] = [
  createContext<AppStatusUpdate>(defaultStatus),
  createContext<React.Dispatch<React.SetStateAction<AppStatusUpdate>> | null>(
    null
  ),
];

export const useAppReady = () => {
  const setter = useSubredditFilterSetter();

  if (setter)
    setter({
      status: AppStatus.Ready,
    });
};

export const useSubredditFilter = () => useContext(AppStatusGetterContext);
export const useSubredditFilterSetter = () =>
  useContext(AppStatusSetterContext);

export const AppStatusProvider: React.FC = ({ children }) => {
  const [appStatus, setAppStatus] = useState(defaultStatus);

  return (
    <AppStatusSetterContext.Provider value={setAppStatus}>
      <AppStatusGetterContext.Provider value={appStatus}>
        {children}
      </AppStatusGetterContext.Provider>
    </AppStatusSetterContext.Provider>
  );
};
