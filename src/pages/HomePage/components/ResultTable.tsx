import { format, fromUnixTime } from "date-fns";
import React from "react";
import { Column, useTable } from "react-table";
import { ExternalLink } from "../../../components/ExternalLink";
import { useNotes } from "../../../context/NotesContext";
import { NoteWithUsername } from "../../../services/search/api";

const renderProfileLink = (username: string) => (
  <ExternalLink to={`https://reddit.com/user/${username}`} newTab>
    /u/{username}
  </ExternalLink>
);

const columns: Column<NoteWithUsername>[] = [
  {
    Header: "/u/",
    accessor: "username",
    Cell: ({ value }) => renderProfileLink(value),
  },
  {
    Header: "Note",
    accessor: "message",
  },
  {
    Header: "Moderator",
    accessor: "mod",
    Cell: ({ value }) => renderProfileLink(value),
  },
  {
    Header: "Date",
    accessor: "timestamp",
    Cell: ({ value }) => format(fromUnixTime(value), "yyyy-MM-dd hh:mm a"),
  },
];

export const ResultTable: React.FC = () => {
  const notes = useNotes();

  const allReports = Object.keys(notes || {})
    .map((username) => notes![username].map((note) => ({ ...note, username })))
    .reduce((array, notesForUser) => array.concat(...notesForUser), []);

  console.log(allReports);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: allReports });

  return (
    <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px red",
                  background: "aliceblue",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
