import { useEffect, useState } from "react";
import { AppStatus } from "../../structures/appstatus";
import { getAllUserNotes, UserNotesObject } from "./api";

export type GetUserNotesHookData = {
  status: AppStatus;
  errorMessage: string | null;
  notes: UserNotesObject | null;
};

export const useGetAllUserNotes = (): GetUserNotesHookData => {
  const [status, setStatus] = useState(AppStatus.Ready);
  const [errorMessage, setErrorMessage] = useState(null);
  const [notes, setNotes] = useState<UserNotesObject | null>(null);

  useEffect(() => {
    const loadNotes = async () => {
      setStatus(AppStatus.Loading);

      try {
        setStatus(AppStatus.ContactingReddit);
        const res = await getAllUserNotes();
        setNotes(res.notes);

        setErrorMessage(null);
      } catch (err) {
        console.error(err);
        setErrorMessage(err.message);
      } finally {
        setStatus(AppStatus.Ready);
      }
    };

    loadNotes();
  }, []);

  return { status, errorMessage, notes };
};
