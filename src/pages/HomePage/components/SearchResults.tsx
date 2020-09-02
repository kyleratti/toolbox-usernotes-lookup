import React from "react";
import Loading from "../../../components/Loading";
import { useGetUserNotes } from "../../../services/search/hooks";
import { AppStatus } from "../../../structures/appstatus";
import ResultTable from "./ResultTable";

type SearchResultsProps = {
  username?: string;
};

const SearchResults: React.FC<SearchResultsProps> = ({ username }) => {
  const { status, errorMessage, notes } = useGetUserNotes(username);

  if (status === AppStatus.Loading) return <Loading />;
  else if (status === AppStatus.ContactingReddit)
    return <Loading message="Chatting with reddit..." />;

  if (errorMessage) return <div>{errorMessage}</div>;

  return (
    <div id="searchResults">
      {notes && <ResultTable username={username} notes={notes} />}
    </div>
  );
};

export default SearchResults;
