import React from "react";
import { useSubreddits } from "../../../hooks/reddit";

export const SearchFilter: React.FC = () => {
  const modSubs = useSubreddits();

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.selectedOptions;

    for (const obj of selected) {
      console.log(obj.value);
      // TODO: set subreddit filter state
    }
  };

  if (!modSubs) return <div className="warning">Loading subreddits...</div>;

  return (
    <div id="searchFilter">
      <span id="subredditFilter">
        Subreddits:
        <select
          name="subreddits"
          multiple
          onChange={onChange}
          defaultValue={modSubs.map((subName) => subName.toLowerCase())}
        >
          {modSubs.map((subName, idx) => (
            <option key={idx} value={subName.toLowerCase()}>
              {subName}
            </option>
          ))}
        </select>
      </span>

      <span id="usernameFilter">
        /u/
        <input type="text" name="userFilter" placeholder="spez" autoFocus />
      </span>
    </div>
  );
};
