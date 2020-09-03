import React, { useEffect, useState } from "react";
import { useNotesSetter } from "../../../context/NotesContext";
import { useGetAllUserNotes } from "../../../services/search/hooks";
import SearchResults from "./SearchResults";

const Search: React.FC = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [searchUsername, setSearchUsername] = useState("");
  const { status, errorMessage, notes } = useGetAllUserNotes();
  const setNotes = useNotesSetter();

  const onSubmit: React.FormEventHandler = ({ nativeEvent: event }) => {
    setSearchUsername(inputUsername);

    event.preventDefault();
  };

  useEffect(() => {
    if (setNotes) setNotes(notes);
  }, [notes]);

  return (
    <>
      <h2>Search</h2>

      <form onSubmit={onSubmit} id="searchForm">
        <label>
          /u/
          <input
            id="searchInput"
            type="search"
            placeholder="spez"
            onChange={(e) => setInputUsername(e.target.value)}
            name="search_username"
            autoFocus
          />
        </label>

        <input type="submit" value="Retrieve Notes" />
      </form>

      {searchUsername && <SearchResults username={searchUsername} />}
    </>
  );
};

export default Search;
