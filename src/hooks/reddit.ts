import { useEffect, useState } from "react";
import { getRedditClient } from "../services/reddit";

export const useSubreddits = () => {
  const [subreddits, setSubreddits] = useState<string[] | null>(null);

  useEffect(() => {
    getRedditClient()
      .getModeratedSubreddits()
      .then((subs) => {
        const subsArray = Array.from(subs)
          .filter((sub) => sub.title !== "")
          .map((sub) => sub.title);

        setSubreddits(subsArray);
      });
  }, []);

  return subreddits;
};
