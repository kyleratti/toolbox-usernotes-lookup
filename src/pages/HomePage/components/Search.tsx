import React, { useState } from "react";
import SearchResults from "./SearchResults";

const Search: React.FC = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [searchUsername, setSearchUsername] = useState("");

  const onSubmit: React.FormEventHandler = ({ nativeEvent: event }) => {
    setSearchUsername(inputUsername);

    event.preventDefault();
  };

  return (
    <>
      <h2>Search</h2>

      <form onSubmit={onSubmit}>
        <label>
          /u/
          <input
            type="search"
            placeholder="reddit username here"
            onChange={(e) => setInputUsername(e.target.value)}
            name="search_username"
          />
        </label>

        <input type="submit" value="Retrieve Notes" />
      </form>

      <SearchResults username={searchUsername} />
    </>
  );
};

export default Search;
