import { useEffect, useState } from "react";
import { useSubreddits } from "../../hooks/reddit";
import { AppStatus } from "../../structures/appstatus";
import { getAllUserNotes, UserNotes } from "./api";

export type GetUserNotesHookData = {
  status: AppStatus;
  errorMessage: string | null;
  notes: UserNotes | null;
};

const combineNotes = (notes: UserNotes[]) => {
  const combinedNotes: UserNotes = {};

  notes.forEach((noteObj) => {
    for (const username in noteObj) {
      if (Object.prototype.hasOwnProperty.call(noteObj, username)) {
        const usersNotes = noteObj[username];

        combinedNotes[username] ||= [];
        combinedNotes[username].push(...usersNotes);
      }
    }
  });

  return combinedNotes;
};

const loadNotes = async (subreddits: string[]) => {
  const notePromises = subreddits.map((subreddit) => {
    return getAllUserNotes(subreddit);
  });

  const notes = await Promise.all(notePromises);

  return combineNotes(notes);
};

export const useGetAllUserNotes = (): GetUserNotesHookData => {
  const [status, setStatus] = useState(AppStatus.Ready);
  const [errorMessage, setErrorMessage] = useState(null);
  const [notes, setNotes] = useState<UserNotes | null>(null);
  const subreddits = useSubreddits();

  useEffect(() => {
    setStatus(AppStatus.Loading);

    if (!subreddits) {
      setStatus(AppStatus.ContactingReddit);
    } else {
      loadNotes(subreddits)
        .then((notes) => {
          setStatus(AppStatus.Ready);
          setNotes(notes);
        })
        .catch((err) => {
          setErrorMessage(err.message);
        });
    }
  }, [subreddits]);

  return { status, errorMessage, notes };
};
