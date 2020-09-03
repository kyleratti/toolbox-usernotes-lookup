import moment from "moment";
import React, { ReactElement } from "react";
import { useNotes } from "../../../context/NotesContext";
import { UserNotes } from "../../../services/search/api";
import NoResults from "./NoResults";

type ResultTableProps = {
  username?: string;
};

const ResultTable: React.FC<ResultTableProps> = ({ username }) => {
  const items = new Array<ReactElement>();
  const notes = useNotes();

  if (!notes) return <>ERROR</>;

  Object.keys(notes).map((key, idx) => {
    if (!username || username.toLowerCase() === key.toLowerCase()) {
      const val = notes[key] as UserNotes;

      val.ns.forEach((note, idx2) => {
        const timestamp = moment.unix(note.t);
        items.push(
          <tr key={`${idx}_${idx2}`}>
            <td>
              <a href={`https://reddit.com/user/${note.m}`} target="_blank">
                /u/{note.m}
              </a>
            </td>
            <td>{note.n}</td>
            <td className="date">
              <time dateTime={timestamp.format("YYYY-MM-DDTHH:mm:ssZ")}>
                {timestamp.local().format("YYYY-MM-DD @ HH:mm")}
              </time>
            </td>
          </tr>
        );
      });
    }
  });

  if (!items || items.length <= 0) return <NoResults />;

  return (
    <table>
      <thead>
        <tr>
          <th style={{ maxWidth: "12em" }}>Moderator</th>
          <th>Note</th>
          <th style={{ maxWidth: "15em" }}>Date</th>
        </tr>
      </thead>

      <tbody>{items}</tbody>
    </table>
  );
};

export default ResultTable;
