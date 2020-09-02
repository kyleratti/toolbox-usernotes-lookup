import React from "react";
import RedirectExternal from "../components/RedirectExternal";
import { getRedditAuthUrl } from "../services/reddit";

const LoginPage: React.FC = () => {
  return <RedirectExternal to={getRedditAuthUrl()} />;
};

export default LoginPage;
