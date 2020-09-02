import React from "react";
import { isAuthed } from "../context/AuthContext";
import ConditionalRender from "./ConditionalRender";

const AuthenticatedOnly: React.FC = ({ children }) => (
  <ConditionalRender shouldRender={isAuthed()}>{children}</ConditionalRender>
);

export default AuthenticatedOnly;
