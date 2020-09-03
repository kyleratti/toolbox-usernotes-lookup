import React, { createContext, useContext, useState } from "react";
import { UserNotesObject } from "../services/search/api";

const [NotesGetterContext, NotesSetterContext] = [
  createContext<UserNotesObject | null>(null),
  createContext<React.Dispatch<
    React.SetStateAction<UserNotesObject | null>
  > | null>(null),
];

export const useNotes = () => useContext(NotesGetterContext);
export const useNotesSetter = () => useContext(NotesSetterContext);

export const NotesProvider: React.FC = ({ children }) => {
  const [notes, setNotes] = useState<UserNotesObject | null>(null);

  return (
    <NotesSetterContext.Provider value={setNotes}>
      <NotesGetterContext.Provider value={notes}>
        {children}
      </NotesGetterContext.Provider>
    </NotesSetterContext.Provider>
  );
};
