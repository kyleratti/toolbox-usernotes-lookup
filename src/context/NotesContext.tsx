import React, { createContext, useContext } from "react";
import { UserNotes } from "../services/search/api";
import { useGetAllUserNotes } from "../services/search/hooks";

const NotesGetterContext = createContext<UserNotes | null>(null);

export const useNotes = () => useContext(NotesGetterContext);

export const NotesProvider: React.FC = ({ children }) => {
  const { notes } = useGetAllUserNotes();

  return (
    <NotesGetterContext.Provider value={notes}>
      {children}
    </NotesGetterContext.Provider>
  );
};
