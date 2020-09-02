import React from "react";
import { isAuthed } from "../context/AuthContext";
import ConditionalRender from "./ConditionalRender";

const UnauthenticatedOnly: React.FC = ({ children }) => (
  <ConditionalRender shouldRender={!isAuthed()}>{children}</ConditionalRender>
);

export default UnauthenticatedOnly;
