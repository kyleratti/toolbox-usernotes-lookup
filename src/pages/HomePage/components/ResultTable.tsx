import moment from "moment";
import React, { ReactElement } from "react";
import { UserNotes, UserNotesObject } from "../../../services/search/api";

type ResultTableProps = {
  username?: string;
  notes: UserNotesObject;
};

const ResultTable: React.FC<ResultTableProps> = ({ username, notes }) => {
  const items = new Array<ReactElement>();

  Object.keys(notes).map((key, idx) => {
    if (!username || username.toLowerCase() === key.toLowerCase()) {
      const val = notes[key] as UserNotes;
      console.log(val);

      val.ns.forEach((note, idx2) => {
        const timestamp = moment.unix(note.t);
        items.push(
          <tr key={`${idx}_${idx2}`}>
            <td>
              <a href={`https://reddit.com/user/${note.m}`} target="_blank">
                {note.m}
              </a>
            </td>
            <td>{note.n}</td>
            <td>
              <time dateTime={timestamp.format("YYYY-MM-DDTHH:mm:ssZ")}>
                {timestamp.format()}
              </time>
            </td>
          </tr>
        );
      });
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Author</th>
          <th>Note</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>{items}</tbody>
    </table>
  );
};

export default ResultTable;
