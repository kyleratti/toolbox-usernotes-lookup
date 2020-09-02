import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { AuthenticationProvider } from "./context/AuthContext";
import Routes from "./Routes";

const Main: React.FC = () => (
  <AuthenticationProvider>
    <Router>
      <Routes />
    </Router>
  </AuthenticationProvider>
);

export default Main;
