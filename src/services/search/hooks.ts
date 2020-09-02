import { useEffect, useState } from "react";
import { AppStatus } from "../../structures/appstatus";
import { getUserNotes, UserNotesObject } from "./api";

export type GetUserNotesHookData = {
  status: AppStatus;
  errorMessage: string | null;
  notes: UserNotesObject | null;
};

export const useGetUserNotes = (username?: string): GetUserNotesHookData => {
  const [status, setStatus] = useState(AppStatus.Ready);
  const [errorMessage, setErrorMessage] = useState(null);
  const [notes, setNotes] = useState<UserNotesObject | null>(null);

  useEffect(() => {
    const loadNotes = async () => {
      setStatus(AppStatus.Loading);

      try {
        if (username) {
          const res = await getUserNotes(username);
          setNotes(res.notes);
        } else setNotes(null);

        setErrorMessage(null);
      } catch (err) {
        console.error(err);
        setErrorMessage(err.message);
      } finally {
        setStatus(AppStatus.Ready);
      }
    };

    loadNotes();
  }, [username]);

  return { status, errorMessage, notes };
};
