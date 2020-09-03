import React from "react";
import NoResults from "./NoResults";
import ResultTable from "./ResultTable";

type SearchResultsProps = {
  username?: string;
};

const SearchResults: React.FC<SearchResultsProps> = ({ username }) => {
  return (
    <div id="searchResults">
      {(username && <ResultTable username={username} />) || <NoResults />}
    </div>
  );
};

export default SearchResults;
