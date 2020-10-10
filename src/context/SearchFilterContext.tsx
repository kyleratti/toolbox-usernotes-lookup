import React, { createContext, useContext, useState } from "react";

const [SubredditFilterGetterContext, SubredditFilterSetterContext] = [
  createContext<string[]>([]),
  createContext<React.Dispatch<React.SetStateAction<string[]>> | null>(null),
];

export const useSubredditFilter = () =>
  useContext(SubredditFilterGetterContext);
export const useSubredditFilterSetter = () =>
  useContext(SubredditFilterSetterContext);

export const SearchFilterProvider: React.FC = ({ children }) => {
  const [subredditFilter, setSubredditFilter] = useState<Array<string>>([]);

  return (
    <SubredditFilterSetterContext.Provider value={setSubredditFilter}>
      <SubredditFilterGetterContext.Provider value={subredditFilter}>
        {children}
      </SubredditFilterGetterContext.Provider>
    </SubredditFilterSetterContext.Provider>
  );
};
