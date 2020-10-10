import React, { useState } from "react";
import {
  SearchFilterProvider,
  useSubredditFilter,
} from "../../../context/SearchFilterContext";
import { useSubreddits } from "../../../hooks/reddit";
import { useGetAllUserNotes } from "../../../services/search/hooks";
import { ResultTable } from "./ResultTable";
import { SearchFilter } from "./SearchFilter";

const Search: React.FC = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [searchUsername, setSearchUsername] = useState("");
  const { status, errorMessage, notes } = useGetAllUserNotes();
  const modSubs = useSubreddits();
  const filteredSubs = useSubredditFilter();

  const onSubmit: React.FormEventHandler = ({ nativeEvent: event }) => {
    setSearchUsername(inputUsername);

    event.preventDefault();
  };

  // useEffect(() => {
  //   if (setNotes) setNotes(notes);
  // }, [notes]);

  if (!modSubs) return <div className="warning">Loading subreddits...</div>;

  if (modSubs.length <= 0)
    return <div className="error">No moderated subreddits found!</div>;

  return (
    <SearchFilterProvider>
      <h2>Search</h2>

      <SearchFilter />

      <ResultTable />
    </SearchFilterProvider>
  );
};

export default Search;
